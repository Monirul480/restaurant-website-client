import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleView from "./SingleView";
import LazyLoad from "react-lazy-load";

const MainView = () => {
  const getData = useLoaderData();
  const {
    chef_name,
    chef_picture,
    likes,
    short_bio,
    number_of_recipes,
    years_of_experience,
    recipes,
  } = getData;
  return (
    <>
      <div
        className="hero lg:min-h-[calc(100vh_-_10vh)]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="hero-overlay  text-slate-100">
          <div className="grid gap-3 mx-4 lg:w-3/4 pt-12 lg:mx-auto lg:grid-cols-3">
            <div className="grid pt-10 col-span-1">
              <LazyLoad>
                <img className=" rounded-sm   w-full" src={chef_picture} />
              </LazyLoad>
            </div>
            <div className="lg:col-span-2 h-full lg:mt-32 mb-12 text-white">
              <h1 className="text-3xl  font-bold">
                Name: <span>{chef_name}</span>
              </h1>
              <p className="text-xl mt-5">Short bio: {short_bio}</p>
              <p className="mt-4">
                like: <span className="font-bold ">{likes}</span>
              </p>
              <p className="mt-4">
                Number of recipes:{" "}
                <span className="font-bold ">{number_of_recipes}</span>
              </p>
              <p className="mt-4">
                Year Of Experience:{" "}
                <span className="font-bold">{years_of_experience}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div children className="bg-slate-700 text-white pb-4">
        <h1 className="text-orange-50  text-4xl pt-10 text-center">
          Recipe section
        </h1>
        <div className="lg:w-3/4 grid gap-3 mx-4  pt-12 lg:mx-auto lg:grid-cols-3">
          {
            // console.log(recipes)
            recipes.map((d) => (
              <SingleView key={d.id} data={d}></SingleView>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default MainView;
