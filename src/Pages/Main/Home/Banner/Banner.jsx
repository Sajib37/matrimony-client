import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'

const Banner = () => {
    return (
        <div className='mt-14 font-Lato'>
            <Carousel className='text-center'>
                <div className="lg:h-[80vh] md:h-[60vh] h-[45vh]">
                    <img className="h-full" src={slide1} />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute z-20 bottom-12 md:bottom-20 lg:bottom-24 w-full h-fit">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">Welcome to <span className="text-orange-600 text-3xl md:text-5xl lg:text-6xl ">Matri<span className="text-lime-400">mony</span></span> <br /> <span className="text-lg md:text-xl lg:text-2xl">Where Love Finds You.</span></h1>
                    </div>
                </div>
                <div className="lg:h-[80vh] md:h-[60vh] h-[45vh]">
                    <img className="h-full" src={slide2} />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute z-20 bottom-12 md:bottom-20 lg:bottom-24 w-full h-fit">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">Welcome to <span className="text-orange-600 text-3xl md:text-5xl lg:text-6xl ">Matri<span className="text-lime-400">mony</span></span> <br /> <span className="text-lg md:text-xl lg:text-2xl">Where Love Finds You.</span></h1>
                    </div>
                </div>
                <div className="lg:h-[80vh] md:h-[60vh] h-[45vh]">
                    <img className="h-full" src={slide3} />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute z-20 bottom-12 md:bottom-20 lg:bottom-24 w-full h-fit">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">Welcome to <span className="text-orange-600 text-3xl md:text-5xl lg:text-6xl ">Matri<span className="text-lime-400">mony</span></span> <br /> <span className="text-lg md:text-xl lg:text-2xl">Where Love Finds You.</span></h1>
                    </div>
                </div>
                <div className="lg:h-[80vh] md:h-[60vh] h-[45vh]">
                    <img className="h-full" src={slide4} />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute z-20 bottom-12 md:bottom-20 lg:bottom-24 w-full h-fit">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">Welcome to <span className="text-orange-600 text-3xl md:text-5xl lg:text-6xl ">Matri<span className="text-lime-400">mony</span></span> <br /> <span className="text-lg md:text-xl lg:text-2xl">Where Love Finds You.</span></h1>
                    </div>
                </div>
                <div className="lg:h-[80vh] md:h-[60vh] h-[45vh]">
                    <img className="h-full" src={slide5} />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute z-20 bottom-12 md:bottom-20 lg:bottom-24 w-full h-fit">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">Welcome to <span className="text-orange-600 text-3xl md:text-5xl lg:text-6xl ">Matri<span className="text-lime-400">mony</span></span> <br /> <span className="text-lg md:text-xl lg:text-2xl">Where Love Finds You.</span></h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;