import React from "react";
import { FaRegStar, FaStar, FaRegStarHalf } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

import "@smastrom/react-rating/style.css";
import { useState } from "react";

import ale from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2";

import LazyLoad from "react-lazy-load";

const SingleView = ({ data }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick() {
    setIsDisabled(true);
    ale.fire({
      title: "success!",
      text: "Your Favorite Food add",
      icon: "success",
      confirmButtonText: "Cool",
    });
  }

  const { recipeName, ingredients, cookingMethod, rating, imgUrl } = data;
  return (
    <div className="card  glass">
      <LazyLoad  threshold={0.20}>
        <figure>
          <img src={imgUrl} className="w-full rounded-lg h-80" />
        </figure>
      </LazyLoad>
      <div className="card-body py-2">
        <h2 className="card-title">{recipeName}</h2>
        <ol className="list-decimal grid grid-cols-2">
          {ingredients.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ol>
        <p>{cookingMethod}</p>
        <div className="card-actions justify-between">
          <div className="flex flex-row items-center mr-3">
            <span className="pr-2">{rating}</span>
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

          <button
            onClick={handleClick}
            disabled={isDisabled}
            className={
              isDisabled
                ? "disabled:opacity-50 bg-amber-600 py-1  hover:bg-amber-800 rounded-lg px-4"
                : "bg-amber-600 py-1  hover:bg-amber-800 rounded-lg px-4"
            }
          >
            favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleView;
