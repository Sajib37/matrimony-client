import Banner from "./Banner/Banner";
import Counter from "./Counter/Counter";
import HowItWork from "./HowItWork/HowItWork";
import PremiumMember from "./PremiumMember/PremiumMember";
import Review from "./Review/Review";


const Home = () => {
    return (
        <div>  
            <Banner></Banner>
            <PremiumMember></PremiumMember>
            <HowItWork></HowItWork>
            <Counter></Counter>
            <Review></Review>
        </div>
    );
};

export default Home;