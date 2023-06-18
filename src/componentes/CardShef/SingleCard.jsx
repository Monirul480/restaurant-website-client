import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const SingleCard = ({data}) => {
    const {id,chef_name,chef_picture,likes,short_bio,number_of_recipes,years_of_experience} = data;
    return (
        <div className="card   shadow-cyan-500/50 card-compact bg-slate-400 shadow-xl">
          <figure>
            <img
              src={chef_picture}
              className='h-80  w-full opacity-75 bg-slate-700'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {chef_name}</h2>
            <p className='text-base'>Experience:<span className='font-bold'> {years_of_experience}</span></p>
            <p className='text-base'>Numbers Of Recipes: <span className='font-bold'>{number_of_recipes}</span> </p>
            <div className="card-actions justify-between">
                <p className='flex my-auto font-semibold'><FaHandPointRight className='text-2xl
                 text-black mr-2'></FaHandPointRight>{likes}</p>
              <button className="btnnn bg-yellow-900"><Link to={`/viewRecipy/${id}`}>View Recipes</Link></button>
            </div>
          </div>
        </div>
    );
};

export default SingleCard;