import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { FileInput, Label, Select, TextInput, Textarea } from "flowbite-react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UserHome = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        // console.log(res.data.data.display_url)

        const newStory = {
            image: res.data.data.display_url,
            maleBiodataId: data.maleBiodataId,
            femaleBiodataId: data.femaleBiodataId,
            marriageDate: data.marriageDate,
            review: data.review,
            story: data.story
        }

        console.log(newStory)

        if (res.data.success) {
            axiosPublic.post("/review", newStory)
                .then(res => {
                    if (res.data.acknowledged) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
                .catch(err => console.log(err))
            
        }
    }

    return (
        <section className="py-12 w-full px-2">
            <Helmet>
                <title>Matrimony || Got Maried</title>
            </Helmet>
            
            <SectionTitle heading={'Explore your story'} subHeading={'Explore your story and give us service rating'}></SectionTitle>

            <section className="lg:w-[80%] bg-gray-100 py-6 md:py-8 lg:py-10 px-3 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
                
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-2 flex-col md:flex-row">
                        <div className="w-full">
                            <div className="mb-1 block">
                                <Label value="Groom Biodata Id*" />
                            </div>
                            <TextInput {...register('maleBiodataId')} placeholder="Enter Groom Biodata Id"   id="base" type="number" sizing="md" required/>
                        </div>
                        <div className="w-full">
                            <div className="mb-1 block">
                                <Label value="Bride Biodata Id*" />
                            </div>
                            <TextInput {...register('femaleBiodataId')} placeholder="Enter Bride Biodata Id"   id="base" type="number" sizing="md" required/>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label  value="Photo:" />
                        </div>
                        <FileInput {...register('image')} id="file-upload" required/>
                    </div>

                    <div className="flex gap-2 flex-col md:flex-row">
                        <div className="w-full">
                            <div className="mb-1 block">
                                <Label value="Give Us rating*" />
                            </div>
                            <Select  {...register('review')} defaultValue={"default"}  id="type" required>
                                <option value={'default'} disabled>Select rating</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Select>
                        </div>

                        <div className="w-full">
                            <div className="mb-1 block">
                                <Label value="Marriage Date*" />
                            </div>
                            <TextInput {...register('marriageDate')} placeholder="Enter your marriage Date"   id="base" type="date" sizing="md" required/>
                        </div>
                    </div>

                    <div>
                        <div className="mb-1 block">
                            <Label value="Enter your story*" />
                        </div>
                        <Textarea {...register('story')} id="comment" placeholder="Leave a comment..." required rows={4} />
                    </div>

                    <button className="uppercase text-white bg-[#D1A054] flex gap-2 items-center p-2 rounded-md mt-4 w-32" style={{background: 'linear-gradient(to right, #fc383f, #fa8286)'}}> Save Biodata</button>
                </form>
            </section>
        </section>
    );
};

export default UserHome;