import AbuotusComma from '../img/AboutusComma.png'
import profilePic from '../img/profilePic.png'
import sideimage from '../img/sideimage.png'
import {FaStar} from 'react-icons/fa'

const Aboutus = () => {
    return (
        <div className="xs:hidden md:block h-2/3 static overflow-hidden md:mt-5" id="Aboutus">
            <img width="45%" src={sideimage} alt="" className="overflow-hidden -translate-x-96 absolute transform -rotate-45" />
            <div className="grid  grid-cols-1 ml-60">
                <div className="grid justify-items-center text-center mb-10">
                    <img src={AbuotusComma}  width="5%" alt="Comma" />
                    <img className="rounded-full mt-4" width="5%" src={profilePic} alt="Profile" />
                    <h1 className="text-lg mt-3 text-gray-800 font-extralight">Jane Doe</h1>
                    <div className="mb-2" ><FaStar className="inline"/><FaStar className="inline"/><FaStar className="inline"/><FaStar className="inline"/><FaStar className="inline"/></div>
                    <p className="text-xs text-gray-500 font-thin mt-1">Thank you for all the amazing produce and products you deliver every week</p>
                    <p className="text-xs text-gray-500 font-thin">you make my life so easy and you bring goodness in my family eating</p>
                    <p className="text-xs text-gray-500 font-thin">I have been roasting a lot of brussels sproutes and</p>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-light">Subscribe to our newsletter</h2>
                    <p className="text-xs text-gray-500 font-thin mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, exercitationem.</p>
                    <p className="text-xs text-gray-500 font-thin">Lorem ipsum dolor sit amet.</p>
                    <form className="mt-9">
                        <input type="text" className="rounded bg-gray-300 lg:w-80 focus:outline-none" placeholder="Enter your email.."/>
                        <button className="text-sm font-light hover:bg-green-800 focus:outline-none bg-green-500 px-3 py-1 rounded-full text-white ml-4">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
