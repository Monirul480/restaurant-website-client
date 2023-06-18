import React from "react";
import SingleCard from "./singleCard";
import {useState, useEffect} from 'react'

const CardShef = () => {
    const [Data, setData] = useState([]);
    useEffect( () => {
        fetch('https://simply-recipes-server-monirul480.vercel.app/allCard')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.log(error))
    },[])
    
  return (
    <div className="bg-slate-700">
      <h1 className="text-center text-slate-100 font-semibold text-4xl py-6">
        Chinese to 6 chef
      </h1>
      <div className="grid gap-5 mt-4 pb-9 md:grid-cols-2  lg:grid-cols-3 w-10/12 mx-auto">
        {
            Data.map(data => <SingleCard key={data.id} data={data}></SingleCard>)
        }
      </div>
    </div>
  );
};

export default CardShef;
