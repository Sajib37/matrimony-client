import toast, { Toaster } from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleLogin } = useAuth();
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
               toast.success('Login Successfully !')
            })
            .catch(error => {
                toast.error('Login Failed.!')
                console.log(error)
        })
    }

    return (
        <section className="mt-2">
            <Toaster></Toaster>
            <button onClick={handleGoogleLogin} className="w-full text-center text-lg gap-3 font-semibold text-white py-1 rounded-lg bg-green-600 flex items-center justify-center"><BsGoogle className="text-xl"></BsGoogle> Sign Up with Google</button>
        </section>
    );
};

export default SocialLogin;