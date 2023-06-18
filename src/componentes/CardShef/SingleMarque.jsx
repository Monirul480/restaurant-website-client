import React from "react";
import { FaRegStar, FaStar, FaRegStarHalf } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

import "@smastrom/react-rating/style.css";

const SingleMarque = ({ data }) => {
  const { recipeName, price, rating, imgUrl, ingredients } = data;
  return (
    <div className="card w-96 bg-slate-400 mx-3  shadow-xl">
      <figure>
        <img src={imgUrl} className="w-full h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {recipeName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions flex flex-row justify-end">
          <p>
            Price :$<span className="font-bold">{price}</span>
          </p>
          
          <div className="badge badge-outline">
            <p>{rating}</p>
            <ReactStars
              count={5}
              value={rating}
              size={24}
              isHalf={true}
              emptyIcon={<FaStar />}
              halfIcon={<FaRegStarHalf />}
              fullIcon={<FaRegStar />}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMarque;
