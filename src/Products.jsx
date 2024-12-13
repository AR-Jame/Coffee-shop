import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const Products = () => {
    const loadedCoffee = useLoaderData()
    const [product, setProduct] = useState(loadedCoffee)
    console.log(product);

    return (
        <div>
            <div className="text-center text-[#331A15]">
                <p>---Sip & Savor ---</p>
                <h5 className="text-3xl font-bold">Our Popular Products</h5>
                <Link to='/addcoffees'>
                    <button className='bg-[#E3B577] mt-5 px-4 py-2 font-semibold hover:bg-transparent hover:border-2 hover:border-black'>Add Coffee</button>
                </Link>
                <div className="grid grid-cols-2 gap-4 mx-[15%] mt-10">
                    {
                        product.map(coffee =>
                            <Card
                                product={product}
                                setProduct={setProduct}
                                key={coffee._id}
                                data={coffee}
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;