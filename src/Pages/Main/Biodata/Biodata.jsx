import { Pagination } from "flowbite-react";
import MemberCard from "../../../Components/MemberCard";
import SectionTitle from "../../../Components/SectionTitle";
import useBiodata from "../../../Hooks/useBiodata";
import bg1 from "../../../assets/bg-image.png"
import { useEffect, useState } from "react";

const Biodata = () => {


    const [biodata, isLoading, refetch] = useBiodata();

    const [displayData, setDisplayData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (!isLoading) {
            setTotalPages(Math.ceil(biodata.length / 6))

            const startIdx = (currentPage - 1) * 6;
            const endIdx = currentPage*6;

            setDisplayData(biodata.slice(startIdx , endIdx))
        }
    }, [biodata, isLoading, currentPage])
    
    const onPageChange = (page) => setCurrentPage(page);

    if (isLoading) {
        return "Loading..."
    }
    
    
    return (
        <section className="mt-14">
            <section className="flex ">
                <aside className="w-72 hidden lg:block  ">
                    <div>

                    </div>
                </aside>

                <div className="w-full">
                    <SectionTitle heading={"Biodatas"} subHeading={"Find your match among our diverse members  your ideal connection awaits"}></SectionTitle>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
                        
                        {
                            displayData.map((bio,idx)=><MemberCard key={idx} biodata={bio}></MemberCard>)
                        }
                    </div>
                    <div className="flex justify-center overflow-x-auto sm:justify-center mt-4">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Biodata;