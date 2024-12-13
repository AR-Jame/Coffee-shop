import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffeeForm = () => {
  const handleAdd = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const formData = { name, chef, supplier, taste, category, details, photo, }
    console.log(formData);

    fetch('http://localhost:5000/coffees', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Added",
            text: "Your coffee is successfully added",
            icon: "success"
          });
          form.reset();
        }
      })

  }
  return (
    <>
      <div className="text-xl flex justify-center mt-4">
        <Link className="bg-[#b99173] px-4 py-3 rounded-full text-white" to='/'>Back to home</Link>
      </div>
      <div
        className="min-h-[80vh] flex items-center justify-center"
        style={{ backgroundColor: "white" }} // Light greenish background
      >
        <div className="rounded-lg p-8 w-full max-w-4xl shadow-lg" style={{ backgroundColor: "#F4F3F0" }}>
          <h1
            className="text-3xl font-bold text-center mb-2"
            style={{
              color: "#3e3e3e", // Dark gray for the title
              fontFamily: "'Caveat', cursive", // Handwritten-style font
            }}
          >
            Add New Coffee
          </h1>
          <p className="text-center mb-6" style={{ color: "#707070" }}>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleAdd} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium"
                  style={{ color: "#3e3e3e" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#e0e0e0", // Light gray for border
                    color: "#3e3e3e", // Dark text color
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="chef"
                  className="block text-sm font-medium"
                  style={{ color: "#3e3e3e" }}
                >
                  Chef
                </label>
                <input
                  id="chef"
                  name="chef"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#e0e0e0",
                    color: "#3e3e3e",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="supplier"
                  className="block text-sm font-medium"
                  style={{ color: "#3e3e3e" }}
                >
                  Supplier
                </label>
                <input
                  id="supplier"
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#e0e0e0",
                    color: "#3e3e3e",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="taste"
                  className="block text-sm font-medium"
                  style={{ color: "#3e3e3e" }}
                >
                  Taste
                </label>
                <input
                  id="taste"
                  name="taste"
                  type="text"
                  placeholder="Enter coffee taste"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#e0e0e0",
                    color: "#3e3e3e",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium"
                  style={{ color: "#3e3e3e" }}
                >
                  Category
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  placeholder="Enter coffee category"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#e0e0e0",
                    color: "#3e3e3e",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium"
                  style={{ color: "#3e3e3e" }}
                >
                  Details
                </label>
                <input
                  id="details"
                  name="details"
                  type="text"
                  placeholder="Enter coffee details"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#e0e0e0",
                    color: "#3e3e3e",
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium"
                style={{ color: "#3e3e3e" }}
              >
                Photo
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#e0e0e0",
                  color: "#3e3e3e",
                }}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-2 font-bold rounded-md shadow-md focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "#b99173", // Tan for button background
                  color: "#ffffff", // White text
                }}
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default AddCoffeeForm;
