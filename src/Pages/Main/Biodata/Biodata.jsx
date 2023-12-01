import { Label, Pagination, Radio, Select } from "flowbite-react";
import MemberCard from "../../../Components/MemberCard";
import SectionTitle from "../../../Components/SectionTitle";
import useBiodata from "../../../Hooks/useBiodata";
import bg1 from "../../../assets/bg-image.png"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RiMenu2Fill } from "react-icons/ri";
import banner2 from "../../../assets/cover1.jpg"
import BannerCover from "../../../Shared/BannerCover/BannerCover";
import { Helmet } from "react-helmet-async";

const Biodata = () => {

    const [biodata, isLoading, refetch] = useBiodata();
    const [displayData, setDisplayData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterGender, setFilterGender] = useState('default');
    const [filterDivision, setFilterDivision] = useState('default');
    const [filterAge, setFilterAge] = useState('default');
    

    useEffect(() => {
        if (!isLoading) {

            const filteredBiodata = biodata.filter((bio) => {
                const genderMatch = filterGender === 'default' || bio.type === filterGender;
                const divisionMatch = filterDivision === 'default' || bio.permanentDivision === filterDivision;
                const ageMatch =
                  filterAge === 'default' || (bio.age >= filterAge && bio.age < filterAge + 5); // Adjust as needed
        
                return genderMatch && divisionMatch && ageMatch;
            });
            
            setTotalPages(Math.ceil(filteredBiodata.length / 6))

            const startIdx = (currentPage - 1) * 6;
            const endIdx = currentPage*6;

            setDisplayData(filteredBiodata.slice(startIdx , endIdx))
        }
    }, [biodata, isLoading, currentPage ,filterGender, filterDivision, filterAge])
    
    const onPageChange = (page) => setCurrentPage(page);

    if (isLoading) {
        return "Loading..."
    }


    
    
    return (
        <section className="mt-14 pb-12" style={{backgroundImage: `url(${bg1})` , backgroundSize:"cover"}}>
            <Helmet>
                <title>Matrimony || Biodatas</title>
            </Helmet>
            {/* <SectionTitle heading={"Biodatas"} subHeading={"Find your match among our diverse members  your ideal connection awaits"}></SectionTitle> */}
            <BannerCover image={banner2} heading={'Biodatas'} subHeading={'Find your match among our diverse members'}></BannerCover>
            <section className="flex mt-10 flex-col lg:flex-row relative"> 
                <aside className="px-4 mb-6 mt-4">
                    <div className="py-2 mx-auto w-full lg:w-72 bg-white">
                        <h1 className="text-xl text-center font-bold text-Primary">Filter Biodata</h1>
                    </div>

                    <form className="flex flex-col mt-2">
                        <Select onChange={(e) => setFilterGender(e.target.value)} defaultValue='default'  id="gender">
                            <option value="default" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Select>
                        <Select onChange={(e) => setFilterDivision(e.target.value)} defaultValue='default'  id="age">
                            <option value="default" disabled>Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Maymansign">Maymansign</option>
                        </Select>
                        <Select typeof="number" onChange={(e) => setFilterAge(parseInt(e.target.value, 10))} defaultValue='default'  id="countries">
                            <option value="default" disabled>Age range</option>
                            <option value={20}>20 to 25 years</option>
                            <option value={25}>25 to 30 years</option>
                            <option value={30}>30 to 35 years</option>
                            <option value={35}>35 to 40 years</option>
                            <option value={40}>40 to 45 years</option>
                            <option value={45}>Above 45 years</option>
                        </Select>
                    </form>
                </aside>



                <div className="w-full">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-6">
                        
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