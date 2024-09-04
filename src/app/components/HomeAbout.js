import React from 'react';
import Link from 'next/link';

const HomeAbout = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="lg:text-4xl md:text-3xl text-3xl mb-2 p-5 font-bold text-black font-serif text-center ">About Us</h2>
                <p className="text-gray-700 mb-6 p-5 px-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quod delectus fugiat veritatis sapiente deleniti iure atque neque iste ipsam in error, fugit enim culpa dolores maiores, sint laudantium doloremque soluta labore? Architecto libero velit cupiditate, hic debitis fuga ab quibusdam minus inventore consectetur quas! Alias, ratione sed, aspernatur pariatur repellendus repudiandae numquam quam incidunt tenetur ex quis error perferendis dolores ipsum tempore quisquam facere rem? Perferendis corporis quos facere, nulla est modi sint porro. Vitae cum neque, omnis at rerum non odio aliquid placeat, minima necessitatibus molestias numquam alias exercitationem eligendi doloribus libero ratione, laborum dolorum autem. Nostrum, nulla!
                </p>
                <Link href="/AboutUs" legacyBehavior>
                    <a className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
                        Explore More
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default HomeAbout;
