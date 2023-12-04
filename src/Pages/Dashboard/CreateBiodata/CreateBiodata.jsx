import { Datepicker, FileInput, Label, Select, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Loader from "../../../Components/Loader";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateBiodata = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const [singleBio, setSingleBio] = useState({});
    const[loadBio , setLoadBio]=useState(true)

    
    
    useEffect(() => {
        if (user) {
            axiosPublic.get(`/biodata/${user?.email}`)
                .then(res => setSingleBio(res.data))
                .catch(err => console.log(err))
            
        }
    },[user])

    console.log(singleBio)

    const onSubmit = async (data) => {
        // console.log(data.photo)
        const imageFile = { image: data.photo[0] };
        // console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        // console.log(res.data.data.display_url)

        const newBio = {
            name: data.name,
            type: data.type,
            photo: res.data.data.display_url,
            dob: data.dob,
            height: data.height,
            weight: data.weight,
            age: data.age,
            occupation: data.occupation,
            race: data.race,
            fathersName: data.fathersName,
            mothersName: data.mothersName,
            permanentDivision: data.permanentDivision,
            presentDivision: data.presentDivision,
            partnerAge: data.partnerAge,
            partnerHeight: data.partnerHeight,
            partnerWeight: data.partnerWeight,
            email: data.email,
            phone: data.phone,
        }

        // console.log(newBio)

        if (res.data.success) {
            axiosPublic.put('/update/biodata', newBio)
                .then(res => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your biodata has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                })
                .catch(err => {
                console.log(err)
            })
        }
    }

    
    
    if (user.email) {
        return (
            <section className="my-10 w-full">
                <Helmet>
                    <title>Matrimony || Create Biodata</title>
                </Helmet>
                
                <section >
                    <h1 className="text-3xl text-Accent font-Lato mb-8 font-bold text-center">Create or Edit Biodata</h1>
                    <div className="lg:w-[80%] bg-gray-100 py-6 md:py-8 lg:py-10 px-3 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <div className="mb-1 block">
                                    <Label value="Name*" />
                                </div>
                                <TextInput {...register('name')} defaultValue={singleBio.name || ""}   id="base" type="text" sizing="md" required/>
                            </div>
    
    
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Type:" />
                                    </div>
                                    <Select  {...register('type')}  id="type" required>
                                        <option value={'default'} disabled>Select Type</option>
                                        <option value={"male"}>Male</option>
                                        <option value={"female"}>Female</option>
                                    </Select>
                                </div>
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label  value="Photo:" />
                                    </div>
                                    <FileInput {...register('photo')} id="file-upload" required/>
                                </div>
                            </div>
    
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label  value="Date of Birth:" />
                                    </div>
                                    <input required className="w-full rounded-lg" {...register('dob')} type="date"></input>
                                </div>
                                
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Height:" />
                                    </div>
                                    <Select  {...register('height')}  id="type" required>
                                        <option value={'default'} disabled>Select Height:</option>
                                        <option value={"150 cm"}>150 cm</option>
                                        <option value={"155 cm"}>155 cm</option>
                                        <option value={"160 cm"}>160 cm</option>
                                        <option value={"165 cm"}>165 cm</option>
                                        <option value={"170 cm"}>170 cm</option>
                                        <option value={"175 cm"}>175 cm</option>
                                    </Select>
                                </div>
                                
                            </div>
    
    
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Weight:" />
                                    </div>
                                    <Select  {...register('weight')}  id="type" required>
                                        <option value={'default'} disabled>Select Weight:</option>
                                        <option value={"45 kg"}>45 kg</option>
                                        <option value={"50 kg"}>50 kg</option>
                                        <option value={"60 kg"}>60 kg</option>
                                        <option value={"70 kg"}>70 kg</option>
                                        <option value={"75 kg"}>75 kg</option>
                                        <option value={"80 kg"}>80 kg</option>
                                        <option value={"85 kg"}>85 kg</option>
                                        <option value={"90 kg"}>90 kg</option>
                                        <option value={"95 kg"}>95 kg</option>
                                        <option value={"100 kg"}>100 kg</option>
                                        <option value={"105 kg"}>105 kg</option>
                                        <option value={"110 kg"}>110 kg</option>
                                    </Select>
                                </div>
    
                                <div className="w-full">
                                    <div className="mb-1 block">
                                        <Label value="Age*" />
                                    </div>
                                    <TextInput  {...register('age')} defaultValue={singleBio.age || ""}  id="base" type="number" sizing="md" required/>
                                </div>
                            </div>
    
    
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Occupation:" />
                                    </div>
                                    <Select  {...register('occupation')}  id="type" required>
                                        <option value={'default'} disabled>Select Occuaption:</option>
                                        <option value={"Doctor"}>Doctor</option>
                                        <option value={"Engineer"}>Engineer</option>
                                        <option value={"Lecturer"}>Lecturer</option>
                                        <option value={"Teacher"}>Teacher</option>
                                        <option value={"Police"}>Police</option>
                                        <option value={"Lawer"}>Lawer</option>
                                        <option value={"Designer"}>Designer</option>
                                        <option value={"Others"}>Others</option>
                                    </Select>
                                </div>
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Race:" />
                                    </div>
                                    <Select  {...register('race')}  id="type" required>
                                        <option value={'default'} disabled>Select Race:</option>
                                        <option value={"Bengali"}>Bengali</option>
                                        <option value={"Chakma"}>Chakma</option>
                                        <option value={"Marma"}>Marma</option>
                                        <option value={"Tripura"}>Tripura</option>
                                        <option value={"Bihari"}>Bihari</option>
                                        <option value={"Muro"}>Muro</option>
                                        <option value={"Rohingya"}>Rohingya</option>
                                        <option value={"Others"}>Others</option>
                                    </Select>
                                </div>
                            </div>
    
    
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full">
                                    <div className="mb-1 block">
                                        <Label value="Fathers Name:" />
                                    </div>
                                    <TextInput  {...register('fathersName')} defaultValue={singleBio.fathersName || ""}  id="base" type="text" sizing="md" required/>
                                </div>
                                <div className="w-full">
                                    <div className="mb-1 block">
                                        <Label value="Mothers Name" />
                                    </div>
                                    <TextInput {...register('mothersName')} defaultValue={singleBio.mothersName || ""}  id="base" type="text" sizing="md" required/>
                                </div>
                            </div>
    
    
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Permanent Division:" />
                                    </div>
                                    <Select  {...register('permanentDivision')}  id="type" required>
                                        <option value={'default'} disabled>Permanent Division:</option>
                                        <option value={"Dhaka"}>Dhaka</option>
                                        <option value={"Rajshahi"}>Rajshahi</option>
                                        <option value={"Sylhet"}>Sylhet</option>
                                        <option value={"MymenSing"}>MymenSing</option>
                                        <option value={"Chittagong"}>Chittagong</option>
                                        <option value={"Khulna"}>Khulna</option>
                                        <option value={"Barishal"}>Barishal</option>
                                        <option value={"Rangpur"}>Rangpur</option>
                                    </Select>
                                </div>
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Present division:" />
                                    </div>
                                    <Select  {...register('presentDivision')}  id="type" required>
                                        <option value={'default'} disabled>Present Division:</option>
                                        <option value={"Dhaka"}>Dhaka</option>
                                        <option value={"Rajshahi"}>Rajshahi</option>
                                        <option value={"Sylhet"}>Sylhet</option>
                                        <option value={"MymenSing"}>MymenSing</option>
                                        <option value={"Chittagong"}>Chittagong</option>
                                        <option value={"Khulna"}>Khulna</option>
                                        <option value={"Barishal"}>Barishal</option>
                                        <option value={"Rangpur"}>Rangpur</option>
                                    </Select>
                                </div>
                            </div>
    
                            <div className="flex flex-col md:flex-row gap-2">
                                
    
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Partner Height:" />
                                    </div>
                                    <Select  {...register('partnerHeight')}  id="type" required>
                                        <option value={'default'} disabled>Select Height:</option>
                                        <option value={"150 cm"}>150 cm</option>
                                        <option value={"155 cm"}>155 cm</option>
                                        <option value={"160 cm"}>160 cm</option>
                                        <option value={"165 cm"}>165 cm</option>
                                        <option value={"170 cm"}>170 cm</option>
                                        <option value={"175 cm"}>175 cm</option>
                                    </Select>
                                </div>
                                <div className="w-full">
                                    <div className="mb-2 block">
                                        <Label value="Partner Weight:" />
                                    </div>
                                    <Select {...register('partnerWeight')}  id="type" required>
                                        <option value={'default'} disabled>Partner Weight:</option>
                                        <option value={"45 kg"}>45 kg</option>
                                        <option value={"50 kg"}>50 kg</option>
                                        <option value={"60 kg"}>60 kg</option>
                                        <option value={"70 kg"}>70 kg</option>
                                        <option value={"75 kg"}>75 kg</option>
                                        <option value={"80 kg"}>80 kg</option>
                                        <option value={"85 kg"}>85 kg</option>
                                        <option value={"90 kg"}>90 kg</option>
                                        <option value={"95 kg"}>95 kg</option>
                                        <option value={"100 kg"}>100 kg</option>
                                        <option value={"105 kg"}>105 kg</option>
                                        <option value={"110 kg"}>110 kg</option>
                                    </Select>
                                </div>
                            </div>
    
    
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="w-full">
                                    <div className="mb-1 block">
                                        <Label value="Partner Age:" />
                                    </div>
                                    <TextInput {...register('partnerAge')} defaultValue={singleBio.partnerAge || ''}  id="base" type="number" sizing="md" required/>
                                </div>
                                <div className="w-full">
                                    <div className="mb-1 block">
                                        <Label value="Your Phone:" />
                                    </div>
                                    <TextInput {...register('phone')} defaultValue={singleBio.phone || ""}  id="base" type="text" sizing="md" required/>
                                </div>
                            </div>
    
                            <div className="w-full">
                                <div className="mb-1 block">
                                    <Label value="Your Email:" />
                                </div>
                                <TextInput {...register('email')} defaultValue={user.email}  id="base" type="email" sizing="md" required/>
                            </div>
    
                            <button className="uppercase text-white bg-[#D1A054] flex gap-2 items-center p-2 rounded-md mt-4 w-32" style={{background: 'linear-gradient(to right, #fc383f, #fa8286)'}}> Save Biodata</button>
                        </form>
                    </div>
                </section>
            </section>
        );
    }
};

export default CreateBiodata;