import React, { useEffect, useState } from "react";
import SingleMarque from "./SingleMarque";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("https://simply-recipes-server-monirul480.vercel.app/foodData")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg-slate-700">
        <h1 className="text-center text-slate-100 font-semibold text-4xl py-6">
        Top seller food
      </h1>
      <Marquee className="py-6" speed={50} pauseOnHover={Boolean}>
        {food.map((data) => (
          <SingleMarque key={data.id} data={data}></SingleMarque>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;
