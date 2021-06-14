import headerlogo from '../img/headerLogo.png'
const Header = () => {
    return (
        <header className="pt-8 h-20 mb-10 ">
            <div className="grid md:grid-cols-10 xs:grid-cols-3">
                <div className="md:col-span-5 overflow-hidden xs:col-span-3  xs:mb-3">
                    <img src={headerlogo} alt="header Logo" width="10%" className="inline "/>
                    <h3 className="inline md:text-3xl font-bold ml-3 xs:text-lg">organic</h3>
                </div>
                <a className="text-gray-500 xs:text-md hover:text-green-500" href="/">Home</a>
                <a className="text-gray-500 xs:text-md hover:text-green-500" href="/">Products</a>
                <a className="text-gray-500 xs:text-md xs:ml-3 hover:text-green-500" href="/">Blog</a>
                <a className="text-gray-500 xs:text-md hover:text-green-500" href="/">About us</a>
                <a  className="text-gray-500 xs:text-md xs:ml-3 hover:text-green-500" href="/">Contact</a>
            </div>
        </header>
    )
}

export default Header
