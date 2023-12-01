import { FaPhone } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle";


const Location = () => {
    return (
        <section className="max-w-screen-xl mx-auto my-12 md:my-16 lg:my-20">
            <SectionTitle subHeading={'Visit Us'} heading={'Our Location'}></SectionTitle>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 px-3 ">
                
                <div className="max-w-sm border-2 min-w-full pb-6 mx-auto">
                    <div className="bg-orange-400 py-2 text-3xl text-white flex justify-center">
                        <FaPhone />
                    </div>
                    <div className="w-[85%] mx-auto h-48 bg-regular flex flex-col items-center justify-center gap-4">
                        <h1 className="uppercase font-semibold text-center text-3xl">Phone</h1>
                        <p>01900998877</p>
                    </div>
                </div>
                
                
                <div className="max-w-sm border-2 min-w-full pb-6">
                    <div className="bg-orange-400 py-2 text-3xl text-white flex justify-center">
                        <FaPhone />
                    </div>
                    <div className="w-[85%] mx-auto h-48 bg-regular flex flex-col items-center justify-center gap-4">
                        <h1 className="uppercase font-semibold text-center text-3xl">Phone</h1>
                        <p>01800998877</p>
                    </div>
                </div>
                
                <div className="max-w-sm border-2 min-w-full pb-6">
                    <div className="bg-orange-400 py-2 text-3xl text-white flex justify-center">
                        <FaPhone />
                    </div>
                    <div className="w-[85%] mx-auto h-48 bg-regular flex flex-col items-center justify-center gap-4">
                        <h1 className="uppercase font-semibold text-center text-3xl">Phone</h1>
                        <p>01700998877</p>
                    </div>
                </div>

            </section> 
        </section>
    );
};

export default Location;