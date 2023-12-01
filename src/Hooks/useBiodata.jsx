import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBiodata = () => {
    const axiosPublic = useAxiosPublic();
    
    
    const { data : biodata , refetch ,isLoading} = useQuery({
        queryKey: ['biodata'],
        queryFn: async () => {
            const result = await axiosPublic.get('/biodata')
            return result.data;
        }
    })

    return [biodata , isLoading , refetch]
};

export default useBiodata;