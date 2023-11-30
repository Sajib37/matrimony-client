import SectionTitle from "../../../../Components/SectionTitle";
import useReviews from "../../../../Hooks/useReviews";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Review = () => {
    const [reviews, refetch, isLoading] = useReviews();

    if (isLoading) {
        return <h1>loading....</h1>;
    }
    const sortedReviews = reviews.sort((a, b) => new Date(b.marriageDate) - new Date(a.marriageDate));

    console.log(reviews)
    return (
        <section className="my-20">
            <SectionTitle
                heading={"Success Stories"}
                subHeading={"Real Couples, Real Love"}
            ></SectionTitle>

            <div className="max-w-screen-xl mx-auto h-fit">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {sortedReviews.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            <div className=" flex flex-col items-center gap-4   max-w-5xl mx-auto px-10"> 
                                <img
                                    className="lg:w-32 lg:h-32 w-28 h-28 rounded-full "
                                    src={review.image}
                                    alt=""
                                />
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.review}
                                    readOnly
                                />
                                <p className="text-center text-Secondary"> {review.story}</p>
                                <h1 className="text-xl text-Primary font-semibold">
                                    Marriage Date: <span className="text-Accent text-base">{review.marriageDate}</span>
                                </h1>
                                {/* <p>{ review.gender}</p> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;
