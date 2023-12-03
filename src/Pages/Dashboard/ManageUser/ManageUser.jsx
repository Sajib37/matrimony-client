import Swal from "sweetalert2";
import Loader from "../../../Components/Loader";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUser from "../../../Hooks/useUser";

const ManageUser = () => {
    const [users, loadUsers, refetch] = useUser();
    const axiosSecure = useAxiosSecure()
    if (loadUsers) {
        return <Loader></Loader>
    }

    const handleMakePremium = (user) => {
        axiosSecure.patch(`/premium/${user.email}`)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Make premium completed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => console.log(err))
    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/make/admin/${user.email}`)
        .then(res => {
            if (res.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Make premium completed",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <section className='py-10 lg:py-14 w-full min-h-screen bg-[#F6F6F6]'>
        <section className=" px-1">
            <SectionTitle  subHeading={'All users are here'} heading={'All Users'}></SectionTitle>    
            <div className="lg:w-[70%] bg-white py-6 md:py-8 lg:py-10 px-1 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">

                    <h1 className="text-2xl font-bold">Total users: {users.length} </h1>

                <table className=" w-full mt-8">
                    <thead>
                        <tr className="bg-[#ff5a60] text-white">
                            <th className="py-2 lg:text-lg mx-auto">Name</th>
                            <th className="py-2 lg:text-lg hidden md:table mx-auto">Email</th>
                            <th className="py-2 lg:text-lg mx-auto">Make admin</th>
                            <th className="py-2 lg:text-lg mx-auto">Make premium</th>                             
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users &&
                            users.map((user, idx) =>
                                <tr key={idx} className={idx % 2 == 0 ? "bg-white" : "bg-gray-100"}>
                                    <td className="py-2 md:font-semibold text-center">{ user.name}</td>
                                    <td className="py-2 md:font-semibold hidden lg:block text-center">{ user.email}</td>
                                    <td onClick={()=>handleMakeAdmin(user)} className="py-2 cursor-pointer  md:font-semibold text-center text-Accent">admin</td>
                                    <td onClick={()=>handleMakePremium(user)} className="py-2 text-center cursor-pointer text-green-500 font-bold">Premium</td>            
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

export default ManageUser;