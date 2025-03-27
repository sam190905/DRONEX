import pg from 'pg';
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";
const app=express();
const port =3000;
const client = new OAuth2Client("48738458953-ejeund67hkp4p95l3btg3c2n9k845h5k.apps.googleusercontent.com");
app.use(express.json());
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    
})
const details={userName:""}
app.use(cors({ origin: "http://localhost:5173" }));
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
      const query1 = "select username from  users where username=$1";
     const un= await db.query(query1, [username]);
     const query2="select password  from  users where username=$1";
     if(un.rows.length>0){
      const p= await db.query(query2, [username]);
      const passmatch=await bcrypt.compare(password,p.rows[0].password)
      console.log(passmatch);
      
      if(passmatch){
        res.status(200).json({ message: "Login successful!",success:true });

      }
      else{
        res.status(200).json({ message: "Incorrect password!",success:false });

      }

     }
     else{
      res.status(200).json({ message: "No user find , try registering first!",success:false  });

     }

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedpass=await bcrypt.hash(password,10);
  
  try {
      const query = "INSERT INTO users (username, password) VALUES ($1, $2)";
      await db.query(query, [username, hashedpass]);
      res.status(200).json({ message: "User registered successfully!",success:true });
  } catch (error) {
      res.status(500).json({ error: error.message,success:false });
  }
});

app.post("/google-login", async (req, res) => {
  const { token } = req.body;

  try {
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: "48738458953-ejeund67hkp4p95l3btg3c2n9k845h5k.apps.googleusercontent.com",
      });

      const payload = ticket.getPayload();
      console.log("Google Verified User:", payload);
      console.log(payload.name);
      details.userName=payload.name;
      

      res.json({ success: true, user: payload });
  } catch (error) {
      console.error("Google Auth Error:", error);
      res.status(401).json({ success: false, error: "Invalid Google Token" });
  }
});

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "loginform",
    password: "ultron1234",
    port: 5432,
  });
  db.connect();
console.log("This is server")

app.get("/",(req,res)=>{
  res.send("Hello")
})

export default details;