import productsLeaf from '../img/productsLeaf.png'
import productsBowl from '../img/productsBowl.png'


const Products = () => {
    return (
        <div className="h-2/3 grid grid-cols-1 mt-10 sm:mb-10" id="Products">
            <div className="grid justify-items-center text-center mt-5 px-20 overflow-hidden">
                <img src={productsLeaf} className="" alt="Products Leaf" />
                <h3 className="md:text-2xl md:font-extralight md:mt-2 xs:text-md xs:font-thin xs:mt-0.5">Welcome to Nature</h3>
                <p className="md:text-sm md:block xs:hidden font-thin md:mt-2 text-gray-500 xs:text-xs xs:mt-0.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aperiam cum dignissimos suscipit exercitationem nemo excepturi facere soluta porro assumenda.</p>
            </div>
            <div className="grid md:grid-cols-4 xs:grid-cols-2 xs:justify-items-center xs:gap-1  py-10 px-10 overflow-hidden">
                <div className="md:w-40 sm:w-40 xs:w-17 text-center">
                    <img className="hover:bg-green-500" src={productsBowl} alt="products bowl" />
                </div>
                <div className="md:w-40 sm:w-40 xs:w-17 text-center">
                    <img className="hover:bg-green-500" src={productsBowl} alt="products bowl" />
                </div>
                <div className="md:w-40 sm:w-40 xs:w-17 text-center">
                    <img className="hover:bg-green-500" src={productsBowl} alt="products bowl" />
                </div>
                <div className="md:w-40 sm:w-40 xs:w-17 text-center">
                    <img className="hover:bg-green-500" src={productsBowl} alt="products bowl" />
                </div>
            </div>
        </div>
    )
}

export default Products
