import React from 'react';
import useCart from '../../hooks/useCart';
import ReviewNavCarts from '../ReviewNavCarts/ReviewNavCarts';


const Review = () => {
    const [carts, setCarts] = useCart();
    return (
        <div>
            <h2 className='font-sans font-bold text-2xl text-gray-600'>Customer Feedback!!</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center'>
                {
                    carts.map(cinfo => <ReviewNavCarts key={cinfo.id} cinfo={cinfo}></ReviewNavCarts>)
                }




            </div>


        </div>
    );
};

export default Review;