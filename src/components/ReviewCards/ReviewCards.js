import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCards = ({ cart }) => {


    const { id, img, name, reviewed_at, review_rating, review_title } = cart;

    return (
        <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4'>
            <Link to={`/`}>
                <div className='gap-4 flex justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <div>
                            <img
                                alt='profile'
                                src={img}
                                className='mx-auto object-cover rounded-full h-16 w-16 '
                            />
                        </div>
                    </div>
                    <div className=' flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{name}</span>
                        <span className='text-gray-600 font-normal'>{review_title}</span>
                        <span className='text-gray-600 font-medium'>{review_rating}</span>
                        <span className='text-gray-400 text-xs'>{reviewed_at}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ReviewCards;