import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./About.css";
const About = () => {
  return (
    <div class="aboutmain">
      <div class="aboutleft">
        <div>
          <h1 style={{ fontSize: "50px" }}>
            What people say{" "}
            <span style={{ color: "#FA7436" }}>
              {" "}
              <br></br> about Us.
            </span>
          </h1>
        </div>
        <div>
          <p>
            Our Clients send us bunch of smilies with our services and <br></br>
            we love them.
          </p>
        </div>
        <div>
          <button
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              //   background: "#FA7436",
              border: "2px solid #99999980",
              marginRight: "20px",
            }}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              background: "#FA7436",
              border: "none",
            }}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div class="aboutright">
        <div
          style={{
            width: "500px",
            height: "250px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <p style={{ width: "400px", marginLeft: "30px" }}>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <div>
            <h1 style={{ width: "400px", marginLeft: "30px" }}>Mike taylor</h1>
            <p style={{ width: "400px", marginLeft: "30px" }}>Loa Angles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
