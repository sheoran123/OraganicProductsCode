import logo from '../img/headerLogo.png'
import footerBg from '../img/FooterBg.png'

const Footer = () => {
    return (
        <footer className="h-1/3 grid grid-cols-3 bg-black bg-cover bg-center" styles={{ backgroundImage:`url(${footerBg})` }}>
            <div>
                <div className="col-span-5 overflow-hidden">
                    <img src={logo} alt="header Logo" width="10%" className="inline "/>
                    <h3 className="inline text-3xl font-bold text-white ml-3">organic</h3>
                </div>
                <p className="text-xs font-thin text-gray-300 mt-4 ">Lorem ipsum dolor sit amet consectetur adip.</p>
                <p className="text-xs text-gray-300 font-thin">Lorem, ipsum dolor.</p>
                <p className="text-sm font-bold text-white mt-6"> &copy; Copyright 2020 Nature </p>
            </div>
            <div>
                <h3 className="text-sm font-bold text-white">Information</h3>
                <p className="text-sm font-thin text-gray-300 mt-4">About us</p>
                <p className="text-sm font-thin text-gray-300 mt-1">Products</p>
                <p className="text-sm font-thin text-gray-300 mt-1">Contacts</p>
                <p className="text-sm font-thin text-gray-300 mt-1">Term of services</p>
            </div>
            <div>
                <h3 className="text-sm font-bold text-white">Follow us</h3>
                <p className="mt-4 text-gray-300">icons</p>
            </div>
        </footer>
    )
}

export default Footer
