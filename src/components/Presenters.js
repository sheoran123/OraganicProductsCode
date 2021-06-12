import Presenterlogo1 from '../img/Presenterlogo1.png'
import Presenterlogo2 from '../img/Presenterlogo2.png'
import Presenterlogo3 from '../img/Presenterlogo3.png'



const Presenters = () => {
    return (
        <div className="md:h-1/2 xs:h-1/3 grid grid-cols-1">
            <div className="text-center">
                <h3 className="text-3xl font-extralight md:mt-5 xs:mb-5">Proudly Presented by</h3>
                <p className="text-sm font-thin mt-3 text-gray-500 md:block xs:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa eius ducimus, quod tenetur unde!</p>
                <p className="text-sm md:block xs:hidden font-thin text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="grid md:grid-cols-5 xs:grid-cols-3">
                <img className="xs:h-10 md:h-full " width="40%" src={Presenterlogo1} alt="logo1" />
                <img className="xs:h-10 md:h-full" width="50%" src={Presenterlogo3} alt="logo2" />
                <img className=" xs:h-8 md:h-full" width="70%" src={Presenterlogo2} alt="logo3" />
                <img className="h-full xs:hidden md:block" width="50%" src={Presenterlogo3} alt="logo4" />
                <img className="h-full xs:hidden md:block" width="40%" src={Presenterlogo1} alt="logo5" />
            </div>
            
        </div>
    )
}

export default Presenters
