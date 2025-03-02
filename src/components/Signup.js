import React, { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import google from "./images/flat-color-icons_google.svg";
import git from "./images/akar-icons_github-fill.svg";
import fb from "./images/bi_facebook.svg";
import motu from "./images/89e31fb982e6d87f239196db2b3e9ccc copy 1.png";
import bg from "./images/bg.png";
import { db } from "../FirebaseConfig";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [passState, setPassState] = useState("password");
  const nav = useNavigate();

  const validate = object({
    email: string()
      .email("Enter a valid E-mail address")
      .required("Please enter Email"),
    password: string()
      .min(8, "Password must be atleast 8 character")
      .required("Please enter Password"),
  });

  const usersCollectionRef = collection(db, "task4");

  const signUpUser = async ({ email, password }) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    if (userData.exists()) {
      console.log("Already exists");
      return;
    }
    await setDoc(userRef, {
      email: email,
      password: password,
    });
    nav("/login");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={signUpUser}
      validationSchema={validate}
    >
      <Form
        style={{
          background: "#FEDCC5",
          height: "89vh",
          width: "100%",
          display: "flex",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
        }}
      >
        <div style={{ width: "40%" }}>
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              flexDirection: "column",
              // border: "2px solid black",
              width: "47%",
              height: "540px",
              marginLeft: "20%",
              marginTop: "5%",
              // alignItems: "center",
              paddingLeft: "70px",
              paddingRight: "30px",
              background: "rgba(255, 255, 255, 0.30)",
              backdropFilter: "blur(5px)",
              borderRadius: "30px",
            }}
          >
            <h3
              style={{
                margin: "0",
                marginTop: "50px",
                marginBottom: "5px",
                color: "#F25019",
              }}
            >
              Your Logo
            </h3>
            <h1 style={{ padding: "0", margin: "0", marginBottom: "20px" }}>
              Sign up
            </h1>
            <label>Email</label>
            <Field
              type="email"
              name="email"
              placeholder="username@gmail.com"
              style={{
                width: "250px",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                marginBottom: "10px",
              }}
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="email"
            />
            <label>Password</label>
            <div
              style={{
                width: "250px",
                position: "relative",
                height: "40px",
              }}
            >
              <Field
                type={passState}
                name="password"
                placeholder="password"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
              />
              {passState == "password" ? (
                <AiFillEyeInvisible
                  style={{
                    position: "absolute",
                    right: "2%",
                    top: "20%",
                    height: "70%",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    setPassState((currState) => {
                      return currState == "password" ? "text" : "password";
                    });
                  }}
                />
              ) : (
                <AiFillEye
                  style={{
                    position: "absolute",
                    right: "2%",
                    top: "20%",
                    height: "70%",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    setPassState((currState) => {
                      return currState == "password" ? "text" : "password";
                    });
                  }}
                />
              )}
            </div>
            <ErrorMessage component="div" name="password" />
            <button
              type="submit"
              style={{
                width: "250px",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                background: "#F25019",
                color: "white",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Sign up
            </button>
            <p
              style={{
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                width: "250px",
                marginBottom: "30px",
                marginTop: "30px",
              }}
            >
              or continue with
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                //   marginLeft: "0px",
                width: "250px",
              }}
            >
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "40px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <img src={google} />
              </button>
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "40px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <img src={git} />
              </button>
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "40px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <img src={fb} />
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "60%" }}>
          <img src={motu} style={{ width: "700px", marginLeft: "50px" }} />
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;
