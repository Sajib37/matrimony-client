import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import MemberCard from "../../../../Components/MemberCard";
import { useEffect, useState } from "react";


const PremiumMember = () => {

    const axiosPublic = useAxiosPublic();
    const[biodata ,setBiodata]=useState([])

    // get premium users
    const { data: users, isLoading } = useQuery({
        queryKey: ['users'],
        // enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/premium/users`);
            // console.log(res.data)
            return res.data;
        },
    });


// get biodata of premium users
    useEffect(() => {
        const fetchBiodata = async () => {
            const bioDataPromises = users.map((user) => {
                const email = user.email;
                return axiosPublic.get(`/biodata/${email}`);
            });

            const bioDataResults = await Promise.all(bioDataPromises);
            const biodataList = bioDataResults.map((result) => result.data);

            setBiodata(biodataList);
        };

        if (users && users.length > 0) {
            fetchBiodata();
        }
    }, [axiosPublic, users]);

    if (isLoading) {
        return <h1>Loading Data....</h1>;
    }

    const sortedBio = biodata.sort((a, b) => a.age - b.age);
    return (
        <section className=" my-10 md:my-12 lg:my-20">
            <SectionTitle heading={'Our Premium Community'} subHeading={"Unlocking Excellence, Embracing Support"}></SectionTitle>
            <section className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sortedBio.slice(0,6).map((user,idx)=><MemberCard key={idx} biodata={user}></MemberCard>)
                }
            </section>
        </section>
    );
};

export default PremiumMember;