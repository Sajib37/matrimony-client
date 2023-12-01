import { Helmet } from "react-helmet-async";
import BannerCover from "../../../Shared/BannerCover/BannerCover";
import cover2 from "../../../assets/cover2.jpg"
import Location from "./Location/Location";
import Contact from "./Contact/Contact";

const ContactUs = () => {
    return (
        <section>
            <Helmet>
                <title>Matrimony || Contact Us</title>
            </Helmet>
            
            <BannerCover image={cover2} heading={"Connect With Us"} subHeading={"Feel free to reach out for any inquiries, feedback"}></BannerCover>
            <Location></Location>
            <Contact></Contact>
        </section>
    );
};

export default ContactUs;