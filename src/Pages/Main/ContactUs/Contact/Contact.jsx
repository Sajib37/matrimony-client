import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { BsFillSendFill } from 'react-icons/bs';
import Swal from 'sweetalert2';

const Contact = () => {
    
    const handleConatct = (event) => {
        event.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message send to our team",
            showConfirmButton: false,
            timer: 1500
        });
        event.target.reset();
    }
    return (
        <section className="max-w-screen-xl mx-auto px-2 md:px-4 mb-8 md:mb-12 lg:mb-16">
            <SectionTitle subHeading={'Send us a Message'} heading={'Contact Form'}></SectionTitle>

            <section className="bg-regular md:p-12 lg:py-16 px-2 py-8  lg:w-[90%] mx-auto">
                <form onSubmit={handleConatct}>
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="mb-3 w-full">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="Name:" />
                            </div>
                            <TextInput  name='name'  id="input-gray" placeholder="Enter your Nmae" type='text' required color="gray"/>
                        </div>
                        <div className="mb-3 w-full">
                            <div className="mb-1 block">
                                <Label htmlFor="input-gray" color="gray" value="Email:" />
                            </div>
                            <TextInput name='email' id="input-gray" type='email' placeholder="Enter your email" required color="gray"/>
                        </div>
                    </div>

                    <div className="mb-3 w-full">
                        <div className="mb-1 block">
                            <Label htmlFor="input-gray" color="gray" value="Phone Number:" />
                        </div>
                        <TextInput name='phone' id="input-gray" type='text' placeholder="Enter your phone Number" required color="gray"/>
                    </div>

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your message" />
                        </div>
                        <Textarea id="comment" placeholder="Leave a comment..." required rows={6} />
                    </div>

                    <button className="uppercase text-white  flex gap-2 items-center p-2 rounded-md mt-6 mx-auto" style={{background: 'linear-gradient(to right, #ff4a51, #f7a6a9)'}}> send message <BsFillSendFill /></button>
                </form>
            </section>
        </section>
    );
};

export default Contact;