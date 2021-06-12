import Presenterlogo1 from '../img/Presenterlogo1.png'
import Presenterlogo2 from '../img/Presenterlogo2.png'
import Presenterlogo3 from '../img/Presenterlogo3.png'



const Presenters = () => {
    return (
        <div className="h-1/2 grid grid-cols-1">
            <div className="text-center">
                <h3 className="text-3xl font-extralight mt-5">Proudly Presented by</h3>
                <p className="text-sm font-thin mt-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa eius ducimus, quod tenetur unde!</p>
                <p className="text-sm font-thin text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="grid grid-cols-5 ">
                <img width="40%" src={Presenterlogo1} alt="logo1" />
                <img width="50%" src={Presenterlogo3} alt="logo2" />
                <img className="mt-10" width="70%" src={Presenterlogo2} alt="logo3" />
                <img width="50%" src={Presenterlogo3} alt="logo4" />
                <img width="40%" src={Presenterlogo1} alt="logo5" />
            </div>
            
        </div>
    )
}

export default Presenters
