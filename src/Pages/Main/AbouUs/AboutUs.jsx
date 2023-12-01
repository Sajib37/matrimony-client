import BannerCover from "../../../Shared/BannerCover/BannerCover";
import cover3 from "../../../assets/cover3.jpg"
import OurTeam from "./OurTeam/OurTeam";

const AboutUs = () => {
    return (
        <section className="mt-14">
            <BannerCover image={cover3} heading={"Learn About Our Team"} subHeading={"Behind the Scenes: Our Team, Our Culture"}></BannerCover>
            <section className="my-10 md:my-14 lg:my-16">
                <OurTeam></OurTeam>
            </section>
        </section>
    );
};

export default AboutUs;