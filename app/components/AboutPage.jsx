import Image from 'next/image';
import image1 from '../assets/banner-1.jpg';

const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 p-8 rounded-lg md:mr-4 mb-4 md:mb-0">
                <Image
                    src={image1}
                    alt="Your Image"
                    className="w-full h-auto mb-4"
                />
            </div>
            <div className="md:w-1/2 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">About NovelNest</h2>
                <p className="text-gray-600 text-sm md:text-base">
                    NovelNest is your digital sanctuary for literature enthusiasts worldwide. We are dedicated to curating an extensive library of books in digital format, all available for free to readers across the globe.
                    <br />
                    With NovelNest, you can explore a diverse collection of educational, motivational, and career-oriented literature, designed to inspire and empower you in all aspects of life.
                    <br />
                    NovelNest has evolved into a platform that champions self-published authors, giving them a stage to showcase their literary creations to our vibrant community.
                    <br />
                    if you have any questions or feedback, don't hesitate to contact our editor info@novelnest.com.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;