import showcaseFlower from '../img/showcaseFlower.png'
import showcaseLogo from '../img/showcaseLogo.png'

const ShowCase = () => {
    return (
        <div className="h-1/2 grid grid-cols-2 mb-20">
            <ul className=" mt-20 ">
                <li className="text-2xl font-extralight mb-2">Healthy life with</li>
                <li className="text-4xl font-bold mb-3">Nature Organic</li>
                <li className="text-sm font-thin text-gray-500">Vegetables are the edible part of a plant</li>
                <li className="text-sm font-thin mb-5 text-gray-500">that is used in cooking or can be eaten now.</li>
                <li><button className="md:text-sm md:font-medium md:py-2 md:px-4 bg-green-300 cursor-pointer rounded-xl text-white xs:text-xs xs:font-thin xs:py-1 xs:px-1">Explore Now</button></li>
            </ul>
            <div className=" static mt-20">
                <img src={showcaseFlower} width="30%" alt="ShowCase Flower" className="absolute md:right-60 md:z-10 xs:right-10 xs:top-60 xs:z-10" />
                <img src={showcaseLogo} width="15%" className="absolute md:right-40 md:top-60 md:z-0 xs:right-4 xs:top-60 xs:z-0" alt="ShowCase Logo" />
            </div>
        </div>
    )
}

export default ShowCase
