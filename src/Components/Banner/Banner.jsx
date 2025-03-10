import banner from '../../assets/banner2.jpg';

const Banner = () => {
    return (
        <div
            className="h-[550px] w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${banner})` }} // Ensure banner is correctly imported
        >
            {/* Overlay Layer */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                    Welcome to My Blog
                </h1>
                <p className="text-amber-400 text-2xl md:text-4xl font-semibold">
                    Get Latest News around the world
                </p>
            </div>
        </div>
    );
};

export default Banner;
