import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import ReviewCards from '../ReviewCards/ReviewCards';

const Home = () => {
    const [carts, setCarts] = useCart();
    return (
        <section className='px-4 py-5 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                        The Best Smart Speakers With Alexa and Google Assistant.
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        Chatty assistants from Google, Amazon, and Apple are popular. But which one is right for you?
                    </p>
                    <Link
                        to='/review'
                        className='w-full mb-2 py-2 px-8 text-white mt-3 mx-2 rounded-full bg-cyan-600 sm:w-auto sm:mb-0'
                    >
                        Explore
                    </Link>
                    <Link
                        to='/contact'
                        className='w-full mb-2 py-2 px-8 text-white mt-3 mx-2 rounded-full bg-cyan-600 sm:w-auto sm:mb-0'
                    >
                        Contact us
                    </Link>
                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src='https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='font-sans font-bold text-xl text-gray-600'>Customer Review: {carts.length}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center'>
                    {
                        carts.map(cart => <ReviewCards key={cart.id} cart={cart}></ReviewCards>)
                    }
                </div>
                <div className='mt-5'>
                    <Link
                        to='/review'
                        className='w-full mb-2 py-2 px-3 text-white mt-3 bg-cyan-600 sm:w-auto sm:mb-0'
                    >
                        See All Reviews
                    </Link>
                </div>
            </div>

        </section>



    );
};

export default Home;