import productsLeaf from '../img/productsLeaf.png'
import productsBowl from '../img/productsBowl.png'


const Products = () => {
    return (
        <div className="h-2/3 grid grid-cols-1 mt-10">
            <div className="grid justify-items-center text-center mt-5 px-20 overflow-hidden">
                <img src={productsLeaf} className="" alt="Products Leaf" />
                <h3 className="text-2xl font-extralight mt-2">Welcome to Nature</h3>
                <p className="text-sm font-thin mt-2 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aperiam cum dignissimos suscipit exercitationem nemo excepturi facere soluta porro assumenda.</p>
            </div>
            <div className="grid grid-cols-4  py-10 px-10 overflow-hidden">
                <div className="w-40 text-center">
                    <img src={productsBowl} alt="products bowl" />
                </div>
                <div className="w-40 text-center">
                    <img src={productsBowl} alt="products bowl" />
                </div>
                <div className="w-40 text-center">
                    <img src={productsBowl} alt="products bowl" />
                </div>
                <div className="w-40 text-center">
                    <img src={productsBowl} alt="products bowl" />
                </div>
            </div>
        </div>
    )
}

export default Products
