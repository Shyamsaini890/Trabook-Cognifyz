import React from "react";
import "./Contact.css";
import { LiaAngleDownSolid } from "react-icons/lia";
// import circle from "./images/circle-removebg-preview.png";
import element from "./images/Element.svg";

const Contact = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="skills">
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "100%",
            border: "2px solid white",
            position: "absolute",
            bottom: "-5px",
            left: "-15px",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            border: "2px solid white",
            position: "absolute",
            bottom: "-5px",
            left: "-20px",
          }}
        ></div>
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "100%",
            border: "2px solid white",
            position: "absolute",
            bottom: "-5px",
            left: "-25px",
          }}
        ></div>
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "100%",
            border: "2px solid white",
            position: "absolute",
            bottom: "-5px",
            left: "-30px",
          }}
        ></div>
        <div
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "100%",
            border: "2px solid white",
            position: "absolute",
            bottom: "-5px",
            left: "-35px",
          }}
        ></div>
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "100%",
            border: "2px solid white",
            position: "absolute",
            bottom: "-5px",
            left: "-40px",
          }}
        ></div>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "100%",
            border: "2px solid white",
            position: "absolute",
            bottom: "-5px",
            left: "-45px",
          }}
        ></div>
        <div>
          <img
            src={element}
            style={{ position: "absolute", right: "0", top: "5px" }}
          />
        </div>
        <div>
          <h1
            style={{
              // zIndex: "100",
              width: "500px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
              marginBottom: "0",
            }}
          >
            Subscribe and get exclusive
          </h1>
          <h1
            style={{
              // zIndex: "100",
              width: "500px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0px",
              marginBottom: "50px",
            }}
          >
            deals & offer
          </h1>
        </div>
        <div
          style={{
            width: "500px",
            // border: "2px solid black",
            display: "flex",
            justifyContent: "space-around",
            background: "white",
            height: "60px",
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "18.667px",
              border: "2px solid #999999",
              height: "16px",
              borderRadius: "4px",
              zIndex: "10",
              marginRight: "0",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                color: "#999999",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LiaAngleDownSolid />
            </div>
          </div>
          <input
            type="email"
            placeholder="Enter your mail"
            style={{
              border: "none",
              fontSize: "16px",
              marginLeft: "0",
              paddingLeft: "0",
              marginRight: "130px",
              zIndex: "10",
            }}
          />
          <button
            style={{
              width: "100px",
              height: "40px",
              borderRadius: "5px",
              border: "none",
              background: "#FA7436",
              fontSize: "16px",
              color: "white",
              fontWeight: "500",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
