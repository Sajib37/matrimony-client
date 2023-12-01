import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import TeamCard from "./TeamCard/TeamCard";


const OurTeam = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('./team.json')
            .then(res => res.json())
            .then(data => setTeam(data))
        
    }, [])
    
    return (
        <section>
            <SectionTitle heading={"Meet our team"} subHeading={"Meet the talented professionals who bring innovation and passion to our platform."}></SectionTitle>
            <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    team.map((member,idx)=><TeamCard key={idx} member={member}></TeamCard>)
                }
            </section>
        </section>
    );
};

export default OurTeam;