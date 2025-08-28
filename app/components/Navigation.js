export function Navigation({products}){

const totalCategory=[...new  Set(products.map(p=>p.category)) ].length;
    return(
        <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 flex justify-between rounded-xl md:p-6 p-1 items-center font-sans text-white">
            <div className="flex items-center gap-4 ">
                <span className="bg-gray-300 text-center pt-2 md:px-2 px-1 text-white md:text-3xl text-xl rounded-lg" ><i className='bxr  bx-package '  ></i> </span>
            <p className="md:text-3xl text-sm font-bold text-white font-sans ">Product Manager</p>
            </div>

            <div className="flex md:gap-2 gap-1 ">
                <div className="flex-column md:p-4 py-4 text-sm p-1 items-center justify-center  rounded">
                    <p> <i className='bx  bx-cart'  ></i> Total Products</p>
                    <p className="md:text-xl font-bold">{products.length}</p>

                </div>
                <div className="flex-column md:p-4 p-1 py-4 border-lg text-sm ">
                    <p><i className='bx  bx-trending-up'  ></i> Categories</p>
                    <p className="md:text-xl text-sm font-bold">{totalCategory}</p>

                </div>
            </div>
            
        </nav>
    )
}