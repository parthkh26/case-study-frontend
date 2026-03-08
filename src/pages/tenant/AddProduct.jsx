// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import UserNavbar from "../../components/user/UserNavbar";
// import { addProduct } from "../../services/tenantService";
// import { useAuth } from "../../context/AuthContext";

// function AddProduct() {

//   const { user } = useAuth();
//   const tenantId = user?.tenant?.id;

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     price: "",
//     availableQuantity: "",
//     categoryName: "",
//     imageName: "",
//     imageType: "image/jpeg"
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleImageChange = (e) => {

//     const file = e.target.files[0];

//     if (file) {
//       setForm({
//         ...form,
//         imageName: file.name,
//         imageType: "image/jpeg"
//       });
//     }
//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     if (!form.name || !form.price || !form.categoryName) {
//       alert("Please fill required fields");
//       return;
//     }

//     const productData = {
//       ...form,
//       price: Number(form.price),
//       availableQuantity: Number(form.availableQuantity),
//       categoryName: form.categoryName
//     };

//     await addProduct(tenantId, productData);

//     alert("Product added");

//     navigate("/tenant/products");

//   };

//   return (

//     <div>

//       <UserNavbar />

//       <div style={{ padding: "30px", maxWidth: "500px" }}>

//         <h2>Add Product</h2>

//         <form onSubmit={handleSubmit}>

//           <input name="name" placeholder="Product Name" onChange={handleChange}/>
//           <br/><br/>

//           <textarea name="description" placeholder="Description" onChange={handleChange}/>
//           <br/><br/>

//           <input name="price" placeholder="Price" onChange={handleChange}/>
//           <br/><br/>

//           <input name="availableQuantity" placeholder="Stock" onChange={handleChange}/>
//           <br/><br/>

//           <input name="categoryName" placeholder="Category Name" onChange={handleChange}/>
//           <br/><br/>

//           <input type="file" accept="image/jpeg" onChange={handleImageChange}/>
//           <br/><br/>

//           <button type="submit">Add Product</button>

//         </form>

//       </div>

//     </div>

//   );
// }

// export default AddProduct;







import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";
import { addProduct } from "../../services/tenantService";
import { useAuth } from "../../context/AuthContext";

function AddProduct() {

  const { user } = useAuth();
  const tenantId = user?.tenant?.id;
      const tenantDomain = user?.tenant?.domain;


  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    availableQuantity: "",
    categoryName: "",
    imageName: "",
    imageType: "image/jpeg"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      setForm({
        ...form,
        imageName: file.name,
        imageType: "image/jpeg"
      });
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.name || !form.price || !form.categoryName) {
      alert("Please fill required fields");
      return;
    }

    const productData = {
      ...form,
      price: Number(form.price),
      availableQuantity: Number(form.availableQuantity),
      categoryName: form.categoryName
    };

    await addProduct(tenantDomain, productData);

    alert("Product added");

        navigate(`/tenant/${tenantDomain}/products`);


  };

  return (

    <div>

      <UserNavbar />

      <div className="p-8 flex justify-center">

        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Add Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="price"
              placeholder="Price"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="availableQuantity"
              placeholder="Stock"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="categoryName"
              placeholder="Category Name"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="file"
              accept="image/jpeg"
              onChange={handleImageChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 cursor-pointer"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Add Product
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AddProduct;