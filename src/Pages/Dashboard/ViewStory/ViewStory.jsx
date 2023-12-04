import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useReviews from "../../../Hooks/useReviews";
import Loader from "../../../Components/Loader";
import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle";

const ViewStory = () => {
    const { id } = useParams()

    const[story , setStory]=useState({})
    
    const [reviews, refetch, isLoading] = useReviews()

    if (isLoading) {
        return <Loader></Loader>
    }
    useEffect(() => {
        if (reviews && id) {
            const data = reviews.find(review => review._id === id)
            setStory(data)
        }
    }, [id, reviews])
    
    
    return (
        <section className="w-full py-10 px-2">
            <Helmet>
                <title>Matrimony || view single story</title>
            </Helmet>
            <SectionTitle heading={'Success Story'} subHeading={`Real Stories of Triumph, Finding Love Amidst Life's Adventures`}></SectionTitle>

            <section>
                <div>
                    <img className="w-full h-[50vh] md:h-[60vh] lg:h-[75vh]" src={story.image} alt="" />
                </div>
                <div className="mt-2">
                    <h1 className="text-lg text-Accent font-semibold text-center">Male Biodata Id : { story.maleBiodataId}</h1>
                    <h1 className="text-lg text-Accent font-semibold text-center">Female Biodata Id : {story.femaleBiodataId}</h1>
                    <h1 className="text-lg text-Accent font-semibold text-center">Marriage Date: { story.marriageDate}</h1>
                    <h1 className="text-lg text-yellow-600 font-semibold text-center">Rating: { story.review}</h1>
                </div>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-justify text-Secondary">
                        <span className="text-green-500 font-bold">Story:</span> {story.story}
                    </h1>
                </div>
            </section>
        </section>
    );
};

export default ViewStory;