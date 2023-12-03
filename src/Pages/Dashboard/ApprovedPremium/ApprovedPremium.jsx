import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader";
import SectionTitle from "../../../Components/SectionTitle";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const ApprovedPremium = () => {
    const axiosSecure =useAxiosSecure()

    const { data: premium, isLoading: loadPremium , refetch } = useQuery({
        queryKey: ['premium'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/premium`);
            return res.data;
        },
    });

    if (loadPremium) {
        return <Loader></Loader>
    }

    const handleMakePremium = (requester) => {
        axiosSecure.patch(`/premium/${requester.email}`)
            .then(res => {

                console.log(res.data)
                if (res.data.result1.acknowledged) {

                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Action Completed",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

                
            })
            .catch(err => console.log(err))
        
        
        
    }


    return (
        <section className='py-10 lg:py-14 w-full min-h-screen bg-[#F6F6F6]'>
            <Helmet>
                <title>Matrimony || Approved premium members</title>
            </Helmet>
            <section className=" px-1">
                <SectionTitle  subHeading={'Premium profile requests are here'} heading={'Premium Requests'}></SectionTitle>    
                <div className="lg:w-[70%] bg-white py-6 md:py-8 lg:py-10 px-1 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
 
                    {
                        premium && <h1 className="text-2xl font-bold">Total: { premium.length}</h1>
                    }

                    <table className=" w-full mt-8">
                        <thead>
                            <tr className="bg-[#ff5a60] text-white">
                                <th className="py-2 lg:text-lg mx-auto">Name</th>
                                <th className="py-2 lg:text-lg mx-auto hidden md:block">Email</th>
                                <th className="py-2 lg:text-lg mx-auto">Biodata Id</th>
                                <th className="py-2 lg:text-lg mx-auto">Member type</th>                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                premium &&
                                premium.map((request, idx) =>
                                    <tr key={idx} className={idx % 2 == 0 ? "bg-white" : "bg-gray-100"}>
                                        <td className="py-2 md:font-semibold text-center">{ request.name}</td>
                                        <td className="py-2 md:font-semibold text-center hidden lg:block">{ request.email}</td>
                                        <td className="py-2 md:font-semibold text-center">{request.biodataId}</td>
                                        {
                                            
                                            request.member==="premium" ? 
                                                <td onClick={()=>handleMakePremium(request)} className="py-2 md:font-semibold font-bold text-center text-blue-800 cursor-pointer">Premium member</td>
                                                :
                                                <td onClick={()=>handleMakePremium(request)} className="py-2 text-center cursor-pointer text-Accent font-bold">Make Premium</td>
                                        }            
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

export default ApprovedPremium;