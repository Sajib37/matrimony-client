import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data : users , refetch ,isLoading: loadUsers} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/get/users')
            return result.data;
        }
    })

    return [users , loadUsers , refetch]
};

export default useUser;