import SectionTitle from "../../../../Components/SectionTitle";
import useBiodata from "../../../../Hooks/useBiodata";
import total from "../../../../assets/icons/team.png"
import male from "../../../../assets/icons/man (1).png"
import female from "../../../../assets/icons/woman.png"
import bg from '../../../../assets/home/Counterbg.jpg'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const Counter = () => {

    const axiosPublic = useAxiosPublic()

    const { data : count , refetch ,isLoading} = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const result = await axiosPublic.get('/biodataCount')
            return result.data;
        }
    })

    if (isLoading) {
        return ""
    }

    const totalBio = count.total;
    const maleBio = count.male;
    const femaleBio = count.female;

    
    return (
        <section className=" my-10 md:my-12 lg:my-24  py-16 md:py-20 lg:py-20 bg-fixed" style={{backgroundPosition: 'center',backgroundImage:`url(${bg})` , backgroundSize:"cover"}}>
            <SectionTitle heading={'Our Impact in Numbers'} subHeading={"Explore Biodata, Gender Stats, and Successful Matches"}></SectionTitle>

            <section className="max-w-screen-xl mx-auto grid grid-cols-3">
                <div className="flex flex-col items-center">
                    <img className="w-20 lg:w-36" src={total} alt="" />
                    <div className="flex flex-col">
                        <h1 className="text-white text-xl lg:text-3xl font-Lato font-bold">Total: { totalBio}</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-20 lg:w-36" src={male} alt="" />
                    <div className="flex flex-col">
                        <h1 className="text-white text-xl lg:text-3xl font-Lato font-bold">Male: { maleBio}</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-20 lg:w-36" src={female} alt="" />
                    <div className="flex flex-col">
                        <h1 className="text-white text-xl lg:text-3xl font-Lato font-bold">Female: { femaleBio}</h1>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Counter;