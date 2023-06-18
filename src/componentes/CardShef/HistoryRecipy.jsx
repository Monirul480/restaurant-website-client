import React from "react";
import { FaUserFriends, FaUtensils, FaConciergeBell, FaHouseUser } from "react-icons/fa";

const HistoryRecipy = () => {
  return (
    <div className="bg-slate-900 ">
        <h1 className="text-orange-50  text-4xl py-20 text-center">Restaurant status</h1>
      <div className=" pb-8 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="text-center">
          <h1 className="text-8xl text-orange-400">
            <FaUserFriends className="mx-auto"></FaUserFriends>
          </h1>
          <h1 className="text-orange-50 text-3xl">152+</h1>
          <p className="text-orange-50">Members</p>
        </div>
        <div className="text-center">
          <h1 className="text-8xl text-orange-400">
            <FaUtensils className="mx-auto"></FaUtensils>
          </h1>
          <h1 className="text-orange-50 text-3xl">250+</h1>
          <p className="text-orange-50">Specialist</p>
        </div>
        <div className="text-center">
          <h1 className="text-8xl text-orange-400">
            <FaConciergeBell className="mx-auto"></FaConciergeBell>
          </h1>
          <h1 className="text-orange-50 text-3xl">158+</h1>
          <p className="text-orange-50">Donations</p>
        </div>
        <div className="text-center">
          <h1 className="text-8xl text-orange-400">
            <FaHouseUser className="mx-auto"></FaHouseUser>
          </h1>
          <h1 className="text-orange-50 text-3xl">352+</h1>
          <p className="text-orange-50">Dalicases</p>
        </div>
      
      </div>
    </div>
  );
};

export default HistoryRecipy;
