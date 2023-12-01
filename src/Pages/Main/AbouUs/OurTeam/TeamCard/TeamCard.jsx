import React from 'react';

const TeamCard = ({ member }) => {
    
    return (
        <div className='mx-auto max-w-md'>
            <img className='w-52 mx-auto h-52 border-2 border-black rounded-full' src={member.image} alt="" />
            <div className='text-center font-semibold'>
                <h1 className='text-xl mb-1 font-bold text-Accent'>{ member.name}</h1>
                <h1>Role: {member.role}</h1>
                <h1>{member.bio}</h1>
                <h1 className='text-sm'>Conatct: <span className='text-Secondary cursor-pointer'>{ member.email}</span></h1>
            </div>
        </div>
    );
};

export default TeamCard;