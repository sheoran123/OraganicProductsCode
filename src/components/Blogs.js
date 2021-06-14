import productsLeaf from '../img/productsLeaf.png'
import post1 from '../img/post1.png'
import post2 from '../img/post2.png'
import post3 from '../img/post3.png'

const Blogs = () => {
    return (
        <div className="md:h-2/3 grid grid-cols-1 overflow-hidden md:mb-10 xs:mb-5" id="Blogs">
            <div className="grid justify-items-center mb-9">
                <img src={productsLeaf} alt="Products Leaf" />
                <h3 className="text-2xl font-light mt-2 mb-2">Read our Blog</h3>
                <p className="text-xs text-gray-500 font-thin mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit magni hic adipisci.</p>
                <p className="text-xs text-gray-500 font-thin">Lorem ipsum dolor sit amet.</p>
            </div> 
            <div className="grid grid-cols-3 text-center">
                <div className="grid justify-items-center">
                    <img className="rounded-xl hover:opacity-70" width="70%" src={post1} alt="post1" />
                    <h4 className="xs:text-sm md:text-xl font-normal text-green-500 mt-5">Blog Post one</h4>
                    <p className="xs:hidden md:block text-xs text-gray-500 font-thin">Lorem ipsum dolor sit. Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet....</p>
                    <a href="/" className="md:text-sm xs:text-xs text-gray-500 font-bold hover:text-gray-800">Read More</a>
                </div>
                <div className="grid justify-items-center">
                    <img className="rounded-xl hover:opacity-70" width="70%" src={post2} alt="post2" />
                    <h4 className="xs:text-sm md:text-xl font-normal text-green-500 mt-5">Blog Post one</h4>
                    <p className="xs:hidden md:block text-xs text-gray-500 font-thin">Lorem ipsum dolor sit. Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet....</p>
                    <a href="/" className="md:text-sm xs:text-xs text-gray-500 font-bold hover:text-gray-800">Read More</a>
                </div>
                <div className="grid justify-items-center">
                    <img className="rounded-xl hover:opacity-70" width="70%" src={post3} alt="post3" />
                    <h4 className="xs:text-sm md:text-xl font-normal text-green-500 mt-5">Blog Post one</h4>
                    <p className="xs:hidden md:block text-xs text-gray-500 font-thin">Lorem ipsum dolor sit. Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet....</p>
                    <a href="/" className="md:text-sm xs:text-xs text-gray-500 font-bold hover:text-gray-800">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Blogs
