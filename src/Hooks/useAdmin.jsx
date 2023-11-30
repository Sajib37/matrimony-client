import { useQuery } from "@tanstack/react-query";

import { useAuth } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isLoading: loadAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/user/admin/${user.email}`);
                // console.log(res.data)
                return res.data;
            }
        },
    });
    return [isAdmin, loadAdmin];
};

export default useAdmin;


