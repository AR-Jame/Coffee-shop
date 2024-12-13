import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const { name, chef, supplier, taste, category, photo, } = data;

    return (
        <div className="h-[90vh]">
            <div className="text-xl flex justify-center my-24">
                <Link className="bg-[#b99173] px-4 py-3 rounded-full text-white" to='/'>Back to home</Link>
            </div>
            <div className="flex justify-center items-center ">
                <div className="bg-[#F4F3F0] flex justify-around py-14 items-center px-24 w-[830px] rounded-xl">
                    <img src={photo} className="h-72" />
                    <div>
                        <h3 className="text-3xl font-bold font-[cursive] mb-5">{name}</h3>
                        <div className="flex flex-col items-start text-lg">
                            <p><span className="font-semibold">Name: </span>{name}</p>
                            <p><span className="font-semibold">chef: </span>{chef}</p>
                            <p><span className="font-semibold">taste: </span>{taste}</p>
                            <p><span className="font-semibold">supplier: </span>{supplier}</p>
                            <p><span className="font-semibold">category: </span>{category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default CardDetails;