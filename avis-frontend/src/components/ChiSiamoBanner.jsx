import React from 'react';
import fotogruppo from "../assets/chisiamo.jpg";

const ChiSiamoBanner = () => (
    <div className="max-w-[1640px] mx-auto overflow-hidden">
        <div className="relative w-full h-[500px]">
            {/* Overlay */}
            <div className="absolute w-full h-full text-white bg-black/40 flex flex-col justify-center">
                <p className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg text-center">
                    CHI SIAMO
                </p>
            </div>
            {/* Background Image */}
            <div
                className="w-full h-full bg-cover bg-center lg:bg-[center_left] md:bg-[center] bg-no-repeat"
                style={{
                    backgroundImage: `url(${fotogruppo})`,
                }}
            ></div>
        </div>
    </div>
);

export default ChiSiamoBanner;