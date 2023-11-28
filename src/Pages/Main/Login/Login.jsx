import { Helmet } from "react-helmet-async";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import toast, { Toaster } from "react-hot-toast";
import image1 from "../../../assets/login1.png"
import bgImage from "../../../assets/bg-image.png"
import { Label, TextInput } from "flowbite-react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const Login = () => {
    const [disabled, setDisabled] = useState(true)

    const captchaRef = useRef(null)
    const emailRef = useRef(null)

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleValidate = (event) => {
        event.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            toast.success("Captcha vaidated")
            setDisabled(false)
        }
   
        else {
            toast.error('Captcha validation Failed!')
            setDisabled(true)
        }
    }

    return (
        <section className="mt-8 min-h-screen flex items-center py-12 md:px-10 px-4 lg:px-0" style={{backgroundImage: `url(${bgImage})` ,backgroundSize:'cover'}}>
            <Helmet>
                <title>Matrimony || Login </title>
            </Helmet>
            <Toaster/>
            <section className="w-full max-w-screen-xl border-2 px-2 md:px-4 mx-auto md:py-2 py-2  flex items-center gap-2" style={{backgroundImage: `url(${bgImage})` , backgroundSize:'cover' ,boxShadow:'2px 2px 5px 2px #BBBCBD'}}>
                <img className="w-1/2 h-fit hidden lg:block" src={image1} alt="" />

                <section className="w-full lg:w-1/2  mx-auto md:px-4  md:w-2/3 lg:max-w-lg rounded-lg py-6 md:py-4">
                    <h1 className="text-3xl md:text-4xl mb-4 text-center font-semibold">
                        Login to your account
                    </h1>

                    {/* Form starts here */}
                    <form action="">
                        <div className="mb-3">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="Email:" />
                            </div>
                            <TextInput ref={emailRef}  name='email' id="input-gray" placeholder="Enter your Email" type='email' required color="gray"/>
                        </div>
                        <div className="mb-3">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="password:" />
                            </div>
                            <TextInput name='password' id="input-gray" type='password' placeholder="Enter your password" required color="gray"/>
                        </div>
                        {/* captcha */}
                            <LoadCanvasTemplate/>
                        <div className="mb-1 mt-2">
                            <TextInput name='capctha'  ref={captchaRef}  id="input-gray" type='text' placeholder="Enter the text above" required color="gray"/>
                        </div>
                         <button onClick={handleValidate} className={`px-2 py-1 mb-2  text-white ${disabled? 'bg-[#D1A054]' : 'bg-green-600'}  rounded-lg`}>validate </button>
                        <p  className="mb-2 text-sm font-semibold hover:cursor-pointer text-red-600">Forgot password ?</p>
                        <button name='submit' disabled={disabled} className={`w-full   py-2 rounded-lg ${disabled ? ' text-gray-400 bg-gray-200' :'text-white bg-[#D1A054]'}`}>Login</button>
                    </form>  
                    
                    <p className="font-ubuntu font-medium mt-4">Don't have an account? Please, <Link className="text-[#D1A054]" to='/register'>Register</Link></p>
                    
                    <p className="text-center mt-2 font-semibold">Or sign up with</p>
                    <SocialLogin></SocialLogin>
                </section>
            </section>
            
        </section>
    );
};

export default Login;