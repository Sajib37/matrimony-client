import { Footer } from "flowbite-react";
import logo from "/logo.png";
import {
    BsDribbble,
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Foot = () => {
    return (
        <Footer container className="bg-[#111827]">
            <div className="max-w-screen-xl mx-auto w-full  md:pt-6">
                <div className="w-full ">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className="flex flex-col mb-8 md:mb-0">
                            <Link to="/">
                                <Footer.Brand
                                    // href="https://flowbite.com"
                                    src={logo}
                                    alt="Logo"
                                    className="md:mx-auto mx-0 h-16 md:h-16"
                                />
                            </Link>
                            <h1 className="text-white text-3xl lg:text-4xl text-Accent font-Lato">Matrimony</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 md:w-2/3">
                            <div>
                                <Footer.Title className="text-white" title="about" />
                                <Footer.LinkGroup col>
                                    <Link to='/contact'>Contact Us</Link>
                                    <Link to='/about'>About Us</Link>
                                    <Link to='/'>Success</Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title className="text-white" title="Follow us" />
                                <Footer.LinkGroup col> 
                                    <Footer.Link href="#">Instagram</Footer.Link>
                                    <Footer.Link href="#">Facebook</Footer.Link>
                                    <Footer.Link href="#">Twitter</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title className="text-white" title="Legal" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms &amp; Conditions
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Disclaimer
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full  sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Matrimony™ all right reserved"
                            year={2023}
                        />
                        <div className="mt-0 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" className="text-white"  icon={BsFacebook} />
                            <Footer.Icon href="#" className="text-white" icon={BsInstagram} />
                            <Footer.Icon href="#" className="text-white" icon={BsTwitter} />
                            <Footer.Icon href="#" className="text-white" icon={BsGithub} />
                            <Footer.Icon href="#" className="text-white" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Foot;