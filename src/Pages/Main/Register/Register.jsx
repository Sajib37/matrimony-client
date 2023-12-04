import { Helmet } from "react-helmet-async";
import image1 from "../../../assets/register2.png";
import bgImage from "../../../assets/loginbg1.jpg";
import { FileInput, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useAuth } from "../../../AuthProvider/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { createUser ,profileUpdate } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        // upload image on imageBB and then get the url
        const imageFile = { image: data.image[0] };
        console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        // console.log(res.data.data.display_url);

        if (res.data.success) {
            if (data.password.length < 6) {
                toast.error("password must be at least six character");
                return;
            } else if (!/[A-Z]/.test(data.password)) {
                toast.error("password must be contain Upper Case");
                return;
            } else if (!/[a-z]/.test(data.password)) {
                toast.error("password must be contain Lower Case");
                return;
            } else if (!/\d/.test(data.password)) {
                toast.error("password must be contain a number");
                return;
            } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(data.password)) {
                toast.error("password must be contain a special Character");
                return;
            } else {
                createUser(data.email, data.password)
                    .then((result) => {
                        profileUpdate(data.name, res.data.data.display_url)
                            .then((result) => {
                                const newUser = {
                                    name: data.name,
                                    photo: res.data.data.display_url,
                                    email: data.email,
                                    password: data.password, role: 'common',
                                    role: 'user',
                                    member: 'normal'
                                }
                                // todo
                                axiosPublic.post('/post/user', newUser)
                                    .then( async res => {
                                        toast.success("Account created successfully");
                                        reset();
                                        await new Promise((resolve) => setTimeout(resolve, 1000));
                                        navigate("/login");
                                    })
                                    .catch(error => console.log(error))                               
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
                    .catch((error) => {
                        if (
                            error ==
                            `FirebaseError: Firebase: Error (auth/email-already-in-use).`
                        ) {
                            toast.error("Your Email already in use.");
                        } else {
                            toast.error("Account created Failed!");
                        }
                    });
            }
        }
    };

    return (
        <section
            className="mt-8 min-h-screen flex items-center py-12 md:px-10 px-4 lg:px-0"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
            }}
        >
            <Helmet>
                <title>Matrimony || Register </title>
            </Helmet>
            <Toaster />
            <section
                className="w-full max-w-screen-xl border-2 px-2 md:px-4 mx-auto md:py-2 py-2  flex items-center gap-2"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    boxShadow: "2px 2px 15px 1px #808080",
                    border: "none",
                }}
            >
                <img
                    className="w-1/2 h-fit hidden lg:block"
                    src={image1}
                    alt=""
                />

                <section className="w-full lg:w-1/2  mx-auto md:px-4  md:w-2/3 lg:max-w-lg rounded-lg py-6 md:py-4">
                    <h1 className="text-3xl md:text-4xl mb-4 text-center font-semibold text-black">
                        Create a new account
                    </h1>

                    {/* Form starts here */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <div className="mb-1 block text-black">
                                <Label
                                    htmlFor="input-gray"
                                    color="gray"
                                    value="Name:"
                                />
                            </div>
                            <TextInput
                                {...register("name")}
                                id="input-gray"
                                placeholder="Enter your Name"
                                type="text"
                                required
                                color="gray"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="mb-1 block text-black">
                                <Label
                                    htmlFor="file-upload"
                                    value="Upload your photo:"
                                />
                            </div>
                            <FileInput
                                {...register("image")}
                                id="file-upload"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="mb-1 block text-black">
                                <Label
                                    htmlFor="input-gray"
                                    color="gray"
                                    value="Email:"
                                />
                            </div>
                            <TextInput
                                {...register("email")}
                                id="input-gray"
                                placeholder="Enter your Email"
                                type="email"
                                required
                                color="gray"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="mb-1 block text-black">
                                <Label
                                    htmlFor="input-gray"
                                    color="gray"
                                    value="Password:"
                                />
                            </div>
                            <TextInput
                                {...register("password")}
                                id="input-gray"
                                type="password"
                                placeholder="Enter your password"
                                required
                                color="gray"
                            />
                        </div>

                        <button
                            {...register("submit")}
                            className={`w-full   py-2 rounded-lg text-white bg-[#D1A054] `}
                        >
                            Register
                        </button>
                    </form>

                    <p className="font-ubuntu font-medium mt-4 text-black">
                        Aready have an account? Please,{" "}
                        <Link className="text-[#D1A054]" to="/login">
                            Login
                        </Link>
                    </p>

                    <p className="text-center mt-2 font-semibold text-black">
                        Or sign up with
                    </p>
                    <SocialLogin></SocialLogin>
                </section>
            </section>
        </section>
    );
};

export default Register;
