import headerlogo from '../img/headerLogo.png'
const Header = () => {
    return (
        <header className="pt-8 h-20 mb-10 ">
            <div className="grid grid-cols-10">
                <div className="col-span-5 overflow-hidden">
                    <img src={headerlogo} alt="header Logo" width="10%" className="inline"/>
                    <h3 className="inline text-3xl font-bold ml-3">organic</h3>
                </div>
                <a class="text-gray-500" href="/">Home</a>
                <a class="text-gray-500" href="/">Products</a>
                <a class="text-gray-500" href="/">Blog</a>
                <a class="text-gray-500" href="/">About us</a>
                <a  class="text-gray-500" href="/">Contact</a>
            </div>
        </header>
    )
}

export default Header
