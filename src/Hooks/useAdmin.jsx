import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const [isAdmin, setIsAdmin] = useState(null);
    const [loadAdmin , setLoadAmin]=useState(true)

    useEffect(() => {
        axiosSecure.get(`/user/admin/${user?.email}`)
            .then(res => {
                console.log(res.data)
                setIsAdmin(res.data)
                setLoadAmin(false)
            })
            .catch(err => console.log(err))
        
    },[])
    

    return [isAdmin , loadAdmin]
};

export default useAdmin;
