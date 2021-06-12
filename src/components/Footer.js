import logo from '../img/headerLogo.png'
import footerBg from '../img/FooterBg.png'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="static xs:h-1/2 md:h-10 ">
            <img src={footerBg} width="85%" className="md:absolute md:left-24 z-10 h-60 hidden lg:block " alt="footer"/>
            <div className="grid relative justify-items-center pt-20 z-30 md:grid-cols-3 xs:grid-cols-1">
                <div>
                    <div className="col-span-5 overflow-hidden">
                        <img src={logo} alt="header Logo" width="10%" className="inline "/>
                        <h3 className="inline text-3xl font-bold lg:text-white ml-3 xs:black">organic</h3>
                    </div>
                    <p className="text-xs font-thin lg:text-gray-300 mt-4 xs:black">Lorem ipsum dolor sit amet consectetur adip.</p>
                    <p className="text-xs lg:text-gray-300 font-thin xs:black">Lorem, ipsum dolor.</p>
                    <p className="text-sm font-bold lg:text-white mt-6 xs:black"> &copy; Copyright 2020 Nature </p>
                </div>
                <div className="xs:hidden md:block">
                    <h3 className="text-sm font-bold lg:text-white xs:black">Information</h3>
                    <p className="text-sm font-thin lg:text-gray-300 mt-4 xs:black hover:text-gray-500">About us</p>
                    <p className="text-sm font-thin lg:text-gray-300 mt-1 xs:black hover:text-gray-500">Products</p>
                    <p className="text-sm font-thin lg:text-gray-300 mt-1 xs:black hover:text-gray-500">Contacts</p>
                    <p className="text-sm font-thin lg:text-gray-300 mt-1 xs:black hover:text-gray-500">Term of services</p>
                </div>
                <div className="xs:hidden md:block">
                    <h3 className="text-sm font-bold lg:text-white xs:black ">Follow us</h3>
                    <div className="mt-4 lg:text-gray-300 xs:black "><FaFacebook className="inline mx-1 hover:text-gray-500" /><FaInstagram className="inline hover:text-gray-500 mx-1"/><FaLinkedin className="inline hover:text-gray-500 mx-1"/><FaTwitter className="inline hover:text-gray-500 mx-1"/></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
