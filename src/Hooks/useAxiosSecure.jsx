import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "https://matrimony-server-tawny.vercel.app",
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("access-token");
            // console.log("request stopped by interceptor", token);
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        },
        async (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            const status = error.response.status;
            console.log("Status error in the interceptor ", status);

            // for 401 and 403 logout the user
            // if (status === 401 || status === 403) {
            //     logOut()
            //         .then((result) => {
            //             console.log("log out invalid user");
            //             navigate("/login");
            //         })
            //         .catch((error) => {
            //             console.log(error);
            //         });
            // }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
