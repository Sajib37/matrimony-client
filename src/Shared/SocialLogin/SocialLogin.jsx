import toast, { Toaster } from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleLogin } = useAuth();
    const navigate = useNavigate()
    const location =useLocation()
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user)
                const newUser = {
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                    email: result.user?.email,
                    password: 'Login with Google',
                    role: 'user',
                    member: 'normal'
                }

                axiosPublic.post('/post/user', newUser)
                    .then(async res => {
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                        // console.log(location.state)
                        navigate(location?.state ? location.state : '/');
                        toast.success('Login Successfully !')
                    })
                    .catch(error => {
                        toast.error('Login Failed.!')
                        console.log(error)
                })
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