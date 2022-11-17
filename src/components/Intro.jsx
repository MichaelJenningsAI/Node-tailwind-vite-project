import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl
            mb-1 md:mb-3 font-bold">Michael Jennings</h1>
            <p className="text-base md:text-xl mb-3
            font-medium">Software Engineer & Data Architect</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Tis is my bio etc etc</p>
        </div>
    )
}

export default Intro;