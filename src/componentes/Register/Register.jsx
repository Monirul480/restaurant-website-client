import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlus, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSingIn, githubSign, upPhNa } =
    useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const nvg = location.state?.from?.pathname || "/";

  // sign in with email and password function
  const fromData = (event) => {
    event.preventDefault();
    const data = event.target;
    const name = data.name.value;
    const email = data.email.value;
    const photo = data.photo.value;
    createUser(email, password)
      .then((result) => {
        const logged = result.user;
        navigate(nvg, { replace: true });
        data.reset();
        updatep(logged,name, photo);
      })
      .catch((error) => console.log(error));
  };

  const updatep = (n, p) => {
    upPhNa(logged,n, p)
      .then((result) => {
        const loged = result.user;
        console.log(loged);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // password validation
  const handlePassword = (e) => {
    const getPassword = e.target.value;
    setPassword(getPassword);
    if (!/(?=.*[A-Z])/.test(password)) {
      setWrong("Please provide one uppercase letter");
    } else if (getPassword.length < 6) {
      setWrong("Wrong! at list six characters");
    } else {
      setWrong("");
    }
  };

  // sign in With google function

  const signGoogle = () => {
    googleSingIn()
      .then((result) => {
        const us = result.user;
        setWrong("");
        navigate(nvg, { replace: true });
      })
      .catch((error) => {
        setWrong(error.message);
      });
  };

  // sign in with github

  const signGithub = () => {
    githubSign()
      .then((result) => {
        const us = result.user;
        navigate(nvg, { replace: true });
        setWrong("");
      })
      .catch((error) => {
        setWrong(error.message);
      });
  };

  return (
    <div
      className="hero lg:min-h-[calc(100vh_-_10vh)]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <div className="hero-overlay pt-20 bg-opacity-60 text-slate-100">
        <h1 className="text-3xl text-white text-center font-bold">
          Register now!
        </h1>
        <form
          onSubmit={fromData}
          className="border p-2 rounded-sm bottom-0 lg:w-1/4 mx-auto my-4"
        >
          <h1 className="text-base mb-2 mt-2">Name</h1>
          <input
            className="w-full h-10 rounded-md pl-3 text-black"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <h1 className="text-base mb-2 mt-2">Photo</h1>
          <input
            className="w-full h-10 rounded-md pl-3 text-black"
            placeholder="Photo"
            type="text"
            name="photo"
          />
          <h1 className="text-base mb-2 mt-2">Email</h1>
          <input
            className="w-full h-10 rounded-md pl-3 text-black"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <h1 className="text-base mb-2 mt-2">Password</h1>

          <div className="flex">
            <div className="w-11/12">
              <input
                className="w-full h-10 rounded-md pl-3  text-black"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                type={show ? "text" : "password"}
                name="password"
                required
              />
            </div>
            <div
              onClick={() => setShow(!show)}
              className="bg-white w-10 pl-3 pt-3 pr-0  h-10 rounded-md text-center"
            >
              {show ? (
                <FaEye className="text-center text-black " />
              ) : (
                <FaEyeSlash className="text-center text-black " />
              )}
            </div>
          </div>
        
          {wrong && <span className="text-yellow-400 text-xl">{wrong}</span>}
          <button className="btnnn block w-full mt-10">Register</button>
          <p className="text-center mt-4">Or Sign With ?</p>
          <div className="mt-4 justify-center flex">
            <button
              onClick={signGoogle}
              className="bg-gray-200 text-black py-1 px-4 flex rounded-lg shadow-md mr-2"
            >
              <FaGooglePlus className="text-xl flex items-center h-full mr-1" />
              Google
            </button>
            <button
              onClick={signGithub}
              className="bg-gray-200 text-black py-1 px-4 flex rounded-lg shadow-md"
            >
              <FaGithub className="text-xl flex items-center h-full mr-1" />
              Github
            </button>
          </div>
          <p className="mt-4 mb-6">
            Already have an account?{" "}
            <span className="text-blue-400">
              <Link to="/login">Go to Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
