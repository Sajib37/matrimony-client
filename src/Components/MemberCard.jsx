import { Card } from "flowbite-react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import { Link } from "react-router-dom";


const MemberCard = ({ biodata }) => {
    
    return (
        <div className='px-3 md:px-0'>

            <div className="max-w-sm md:max-w-xs  lg:max-w-sm bg-[#F3F3F3] mx-auto rounded-md" style={{boxShadow: "1px 1px 5px 2px #cccccc"}}>
                <div>
                    <img className="w-full h-56" src={biodata.photo} alt="" />
                </div>
                <div className='flex flex-col p-4'>
                    <h1 className='text-xl font-semibold text-Primary'>{biodata.name}</h1>
                    <h1 className='text-lg font-semibold mb-1 text-Secondary'>Biodata Id: { biodata.biodataId}</h1>
                    
                    <div className=" w-full text-Accent text-sm">
                        <h1 className=""><span className="font-semibold text-black text-base">Division:</span> {biodata.permanentDivision}</h1> 
                        <h1 className=""><span className="font-semibold text-black text-base">Occupation:</span> { biodata.occupation}</h1>
                    </div>
                    <div className="flex gap-20 text-Accent text-sm">
                        <h1><span className="font-semibold text-black text-base">Sex:</span> {biodata.type}</h1> 
                        <h1><span className="font-semibold text-black text-base">Age:</span> { biodata.age} years</h1>
                    </div>
                    <Link to={`/profile/${biodata._id}`} className="mt-2"><AwesomeButton  type="secondary">View Profile</AwesomeButton></Link>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;