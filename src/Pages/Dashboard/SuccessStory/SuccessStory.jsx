import { Helmet } from "react-helmet-async";
import Loader from "../../../Components/Loader";
import useReviews from "../../../Hooks/useReviews";
import SectionTitle from "../../../Components/SectionTitle";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessStory = () => {

    const [reviews, refetch, isLoading] = useReviews()


    if (isLoading) {
        return <Loader></Loader>
    }
    
    return (
        <section className='py-10 lg:py-14 w-full min-h-screen bg-[#F6F6F6]'>
            <Helmet>
                <title>Matrimony || Success Story</title>
            </Helmet>
            <section className=" px-1">
                <SectionTitle  subHeading={'All success stories are here!!'} heading={'success stories'}></SectionTitle>    
                <div className="lg:w-[70%] bg-white py-6 md:py-8 lg:py-10 px-1 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
 
                    {
                        reviews && <h1 className="text-2xl font-bold">Total Story: { reviews.length}</h1>
                    }

                    <table className=" w-full mt-8">
                        <thead>
                            <tr className="bg-[#ff5a60] text-white">
                                <th className="py-2 lg:text-lg mx-auto">Male Id</th>
                                <th className="py-2 lg:text-lg mx-auto hidden md:block">Female Id</th>
                                <th className="py-2 lg:text-lg mx-auto">Action</th>
                                                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews &&
                                reviews.map((review, idx) =>
                                    <tr key={idx} className={idx % 2 == 0 ? "bg-white" : "bg-gray-100"}>
                                        <td className="py-2 md:font-semibold text-center">{ review.maleBiodataId}</td>
                                        <td className="py-2 md:font-semibold text-center ">{ review.femaleBiodataId}</td>
                                        <td className="py-2 md:font-semibold text-center"><Link to={`viewStory/${review._id}`}><FaEye className="mx-auto text-xl text-green-600"/></Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </section>
        </section>
    );
};

export default SuccessStory;