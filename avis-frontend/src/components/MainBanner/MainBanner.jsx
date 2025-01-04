import React from 'react';

const MainBanner = () => (
    <div className="max-w-[1640px] mx-auto overflow-hidden">
        <div className="relative w-full h-[500px]">
            {/* Overlay */}
            <div className="absolute w-full h-full text-white bg-black/40 flex flex-col justify-center">
                <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
                    Dona il <span className="text-red-800">Sangue</span>,
                </h1>
                <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
                    <span className="text-red-800">Salva</span> una Vita
                </h1>
            </div>
            {/* Background Image */}
            <div
                className="w-full h-full bg-cover bg-center lg:bg-[center_left] md:bg-[center] bg-no-repeat"
                style={{
                    backgroundImage: `url('https://citizenadvocates.net/wp-content/uploads/2024/01/donating-blood_donation-areas-in-New-York_Citizen-Advocates-community-action-850x575.png')`,
                }}
            ></div>
        </div>
    </div>
);

export default MainBanner;
