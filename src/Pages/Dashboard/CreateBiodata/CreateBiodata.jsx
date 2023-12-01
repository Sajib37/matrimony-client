import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const CreateBiodata = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const onSubmit = async (data) => {
        
    }
    return (
        <section className="my-10 w-full">
            <Helmet>
                <title>Matrimony || Create Biodata</title>
            </Helmet>
            <section >
                <h1 className="text-3xl text-Accent font-Lato mb-8 font-bold text-center">Create or Edit Biodata</h1>
                <div className="lg:w-[80%] bg-regular py-6 md:py-8 lg:py-10 px-3 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
                    <form
                        className="flex flex-col gap-2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        

                        <button className="uppercase text-white bg-[#D1A054] flex gap-2 items-center p-2 rounded-md mt-4 w-32" style={{background: 'linear-gradient(to right, #fc383f, #fa8286)'}}> Save Biodata</button>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default CreateBiodata;