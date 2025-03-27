import React from "react";
import "../../public/uses.css";
function Uses() {
  return (
    <div className="component">
      <div className="agriculture use">
        <div className="circle one"></div>

        <p className="headeruse">Drones in Agriculture </p>
        <div className="desc">
          DJI Agriculture's annual report highlights significant progress in the
          agricultural drone industry and paves the way for future advancements.
          By prioritizing sustainability and innovation, we aim to revolutionize
          modern agriculture and positively impact global food production. Stay
          tuned for our next update as we work towards a greener, smarter, and
          more efficient agricultural future.
          <br></br>
          <span className="model">Model Used: DJI Agartas 50</span>
          <br></br>
          <div className="buttonb">
            <button>
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dji.com/global"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
        <video autoPlay loop muted>
          <source src={`/media/droneclips/agriedited.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="photography use">
        <div className="circle two"></div>
        <p className="headeruse">Aerial Photography with Drones </p>
        <div className="desc">
          Drones have revolutionized aerial photography, offering
          high-resolution cameras, stabilized gimbals, and advanced flight
          controls, enabling stunning, dynamic shots previously requiring
          expensive equipment like helicopters.
          <br></br>
          <span className="model">Model Used: DJI Mavic 3 pro</span>
          <br></br>
          <div className="buttonb">
          <button>
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dji.com/global"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
        <video autoPlay loop muted>
          <source
            src={`/media/droneclips/photographyedited.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="rescue use">
        <div className="circle three"></div>

        <p className="headeruse">Drones for Rescue Missions </p>
        <div className="desc">
          In rescue operations, drones enhance efficiency with thermal imaging,
          real-time video streaming, and rapid deployment. They locate survivors
          in disaster zones, deliver critical supplies, and navigate hazardous
          terrains, significantly improving response times and saving lives.
          <br></br>
          <span className="model">Model Used: DJI Dock 3</span>
          <br></br>
          <div className="buttonb">
          <button>
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dji.com/global"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
        <video autoPlay loop muted>
          <source src={`/media/droneclips/rescueedited.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="delivery use">
        <div className="circle four"></div>

        <p className="headeruse">Drone-Powered Delivery </p>
        <div className="desc">
          Drones have advanced delivery systems by enabling fast, eco-friendly
          logistics. With GPS precision, autonomous flight, and payload
          capacities, they deliver packages to remote areas, reduce traffic
          congestion, and lower carbon emissions, redefining last-mile delivery.
          <br></br>
          <span className="model">Model Used: DJI Flycart 30</span>
          <br></br>
          <div className="buttonb">
          <button>
              {" "}
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dji.com/global"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
        <video autoPlay loop muted>
          <source
            src={`/media/droneclips/deliveryedited.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Uses;
