import pg from "pg";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = 3000;

// Initialize Google OAuth2 Client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(express.json());
app.use(cors({ 
  origin: "*", // Allow all origins temporarily
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

// Database Connection using Pooler Host
const db = new pg.Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false }, // Enable SSL
});

db.connect()
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch((err) => console.error("❌ Database Connection Error:", err.message));

// API Routes
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const query1 = "SELECT username, password FROM users WHERE username=$1";
    const user = await db.query(query1, [username]);

    if (user.rows.length > 0) {
      const passmatch = await bcrypt.compare(password, user.rows[0].password);
      if (passmatch) {
        return res.status(200).json({ message: "Login successful!", success: true });
      } else {
        return res.status(401).json({ message: "Incorrect password!", success: false });
      }
    } else {
      return res.status(404).json({ message: "No user found, try registering first!", success: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedpass = await bcrypt.hash(password, 10);

  try {
    const query = "INSERT INTO users (username, password) VALUES ($1, $2)";
    await db.query(query, [username, hashedpass]);
    res.status(201).json({ message: "User registered successfully!", success: true });
  } catch (error) {
    alert("User already exist!")
    res.status(500).json({ error: error.message, success: false });
  }
});

app.post("/google-login", async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log("Google Verified User:", payload);
    
    res.json({ success: true, user: payload });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(401).json({ success: false, error: "Invalid Google Token" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, the server is running!");
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
