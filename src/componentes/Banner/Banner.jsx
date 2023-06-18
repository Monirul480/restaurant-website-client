import React from "react";
const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-[calc(100vh_-_10vh)] lg:min-h-[calc(100vh_-_10vh)]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-slate-100">
          <div className="">
            <h1 className="mb-5 text-4xl  font-bold">Welcome to Simply Recipes food website!</h1>
            <p className="mb-5">
             We're excited to share our passion for food and cooking with you. Our website is dedicated to providing you with a wide range of recipes, cooking tips, and culinary inspiration. Whether you're looking for quick and easy meals or want to explore new cuisines and cooking techniques, we have something for everyone. Our recipes are carefully curated to provide you with healthy and delicious options for every occasion. We also offer expert advice on meal planning, ingredient substitutions, and kitchen equipment. Thank you for joining us on this culinary journey, and we hope you enjoy our food website!.
            </p>
            <button className="btnnn">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
