// import { useState } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";

// import UserNavbar from "../../components/user/UserNavbar";
// import { updateProduct } from "../../services/tenantService";
// import { useAuth } from "../../context/AuthContext";

// function EditProduct() {

//   const { productId } = useParams();
//   const { user } = useAuth();
//   const tenantId = user?.tenant?.id;

//   const navigate = useNavigate();
//   const location = useLocation();

//   const product = location.state;

//   const [form, setForm] = useState({
//     name: product.name || "",
//     description: product.description || "",
//     price: product.price || "",
//     availableQuantity: product.availableQuantity || "",
//     categoryId: product.categoryId,
//     imageName: product.imageName,
//     imageType: "image/jpeg"
//   });

//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });

//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     if (!form.name || !form.price) {
//       alert("Please fill required fields");
//       return;
//     }

//     const productData = {
//       name: form.name,
//       description: form.description,
//       price: Number(form.price),
//       availableQuantity: Number(form.availableQuantity),
//       categoryId: form.categoryId,
//       imageName: form.imageName,
//       imageType: form.imageType
//     };

//     await updateProduct(tenantId, productId, productData);

//     alert("Product updated");

//     navigate("/tenant/products");

//   };

//   return (

//     <div>

//       <UserNavbar />

//       <div style={{ padding: "30px", maxWidth: "500px" }}>

//         <h2>Edit Product</h2>

//         <form onSubmit={handleSubmit}>

//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//           />
//           <br /><br />

//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//           />
//           <br /><br />

//           <input
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//           />
//           <br /><br />

//           <input
//             name="availableQuantity"
//             value={form.availableQuantity}
//             onChange={handleChange}
//           />
//           <br /><br />

//           <button type="submit">
//             Update Product
//           </button>

//         </form>

//       </div>

//     </div>

//   );
// }

// export default EditProduct;





import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";
import { updateProduct } from "../../services/tenantService";
import { useAuth } from "../../context/AuthContext";

function EditProduct() {

  const { productId } = useParams();
  const { user } = useAuth();
  const tenantId = user?.tenant?.id;
    const tenantDomain = user?.tenant?.domain;


  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state;

  const [form, setForm] = useState({
    name: product.name || "",
    description: product.description || "",
    price: product.price || "",
    availableQuantity: product.availableQuantity || "",
    categoryId: product.categoryId,
    imageName: product.imageName,
    imageType: "image/jpeg"
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.name || !form.price) {
      alert("Please fill required fields");
      return;
    }

    const productData = {
      name: form.name,
      description: form.description,
      price: Number(form.price),
      availableQuantity: Number(form.availableQuantity),
      categoryId: form.categoryId,
      imageName: form.imageName,
      imageType: form.imageType
    };

    await updateProduct(tenantDomain, productId, productData);

    alert("Product updated");

    navigate(`/tenant/${tenantDomain}/products`);

  };

  return (

    <div>

      <UserNavbar />

      <div className="p-8 flex justify-center">

        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Edit Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full border rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="availableQuantity"
              value={form.availableQuantity}
              onChange={handleChange}
              placeholder="Available Quantity"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Update Product
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default EditProduct;