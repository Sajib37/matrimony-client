import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useReviews = () => {
    const axiosPublic = useAxiosPublic();

    const { data : reviews , refetch ,isLoading} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const result = await axiosPublic.get('/review')
            // console.log(result.data)
            return result.data;
        }
    })

    // console.log(reviews)
    return [reviews ,refetch , isLoading]
};

export default useReviews;