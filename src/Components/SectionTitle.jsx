import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <section className="md:w-2/3 w-3/4 lg:w-2/5 mx-auto mb-6 md:mb-10">
            <h1 className="md:text-4xl text-[#ff5a60] font-bold text-xl text-center font-Lato py-2 border-y-2 border-yellow-300 uppercase">{ heading}</h1>
            <h1 className=" text-center text-Secondary italic mb-2"> ---{subHeading}--- </h1>
        </section>
    );
};

export default SectionTitle;