import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const Card = ({ data, product, setProduct }) => {
    const { name, chef, taste, photo, _id } = data;
    const handleDetails = () => {
        fetch(`http://localhost:5000/coffees/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(lastData => {
                        if (lastData.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remain = product.filter(sing => sing._id !== _id);
                            setProduct(remain)
                        }
                    })
            }
        });

    }
    // const handleUpdate = () => {
    //     fetch(`http://localhost:5000/coffees/${_id}`, {
    //         method:"PUT",
            
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
            
    //     })
    // }
    return (
        <div>
            <div className="bg-[#F5F4F1] rounded-lg">
                <div className="flex justify-evenly items-center">
                    <img src={photo} className="w-[180px] h-[250px] object-contain" />
                    <div className="flex flex-col items-start">
                        <p><span className="font-semibold">Name: </span>{name}</p>
                        <p><span className="font-semibold">chef: </span>{chef}</p>
                        <p><span className="font-semibold">taste: </span>{taste}</p>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <Link onClick={handleDetails} to={`/coffees/${_id}`}><p className="p-3 bg-[#D2B48C] rounded-md text-white"><IoEye /></p></Link>
                        <Link to={`/update/${_id}`}><p className="p-3 bg-[#3C393B] rounded-md text-white"><FaPen /></p></Link>
                        <Link onClick={handleDelete}><p className="p-3 bg-red-400 rounded-md text-white"><RiDeleteBin4Fill /></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;