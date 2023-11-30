import SectionTitle from "../../../../Components/SectionTitle";
import icon1 from "../../../../assets/icons/create.png"
import icon2 from "../../../../assets/icons/search.png"
import icon3 from "../../../../assets/icons/premium.png"
import icon4 from "../../../../assets/icons/collaboration.png"

const HowItWork = () => {
    return (
        <section className="bg-regular py-8 md:py-12 lg:py-16 ">
            <section className="max-w-screen-xl mx-auto px-4">
                <SectionTitle
                    heading={"Explore. Connect. Thrive"}
                    subHeading={
                        "Unlocking the Essence of Our Platform in a Few Simple Steps"
                    }
                ></SectionTitle>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    
                    <div className="max-w-sm mx-auto">
                        <img className="w-24 mx-auto" src={icon1} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] mb-2">Create An Account</h1>
                            <p className="text-center">Begin by creating your personalized profile. Fill in key details to get started.</p>
                        </div>
                    </div>
                    
                    <div className="max-w-md">
                        <img className="w-24 mx-auto" src={icon2} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] mb-2">Search your Partner</h1>
                            <p className="text-center">Utilize advanced filters and search options to find members based on specific criteria..</p>
                        </div>
                    </div>
                    
                    <div className="max-w-md">
                        <img className="w-24 mx-auto" src={icon3} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] mb-2">Be a premium user</h1>
                            <p className="text-center">Access a curated list of premium members with diverse backgrounds and interests and get the contact number of your choosen biodata.</p>
                        </div>
                    </div>
                    
                    <div className="max-w-md">
                        <img className="w-24 mx-auto" src={icon4} alt="" />
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold font-Lato text-[#1360A4] mb-2"> Connect and Collaborate</h1>
                            <p className="text-center">Connect with like-minded individuals, fostering collaborations, partnerships, or meaningful connections.</p>
                        </div>
                    </div>

                </section>
            </section>
        </section>
    );
};

export default HowItWork;
