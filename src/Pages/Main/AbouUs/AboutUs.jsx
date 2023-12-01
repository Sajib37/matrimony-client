import BannerCover from "../../../Shared/BannerCover/BannerCover";
import cover3 from "../../../assets/cover3.jpg"

const AboutUs = () => {
    return (
        <section className="mt-14">
            <BannerCover image={cover3} heading={"Learn About Our Team"} subHeading={"Behind the Scenes: Our Team, Our Culture"}></BannerCover>
        </section>
    );
};

export default AboutUs;