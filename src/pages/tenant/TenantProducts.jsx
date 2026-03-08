// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import UserNavbar from "../../components/user/UserNavbar";

// import { getTenantProducts, deleteProduct } from "../../services/tenantService";

// import { useAuth } from "../../context/AuthContext";

// function TenantProducts() {

//   const { user } = useAuth();

//   const tenantId = user?.tenant?.id;

//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);

//   const loadProducts = async () => {

//     const data = await getTenantProducts(tenantId);

//     setProducts(data.content);

//   };

//   useEffect(() => {

//     if (tenantId) {
//       loadProducts();
//     }

//   }, [tenantId]);

//   const handleDelete = async (productId) => {

//     await deleteProduct(tenantId, productId);

//     loadProducts();

//   };

//   return (

//     <div>

//       <UserNavbar />

//       <div style={{ padding: "30px" }}>

//         <h2>My Products</h2>

//         <table border="1" cellPadding="10">

//           <thead>

//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Actions</th>
//             </tr>

//           </thead>

//           <tbody>

//             {products.map((product) => (

//               <tr key={product.id}>

//                 <td>{product.id}</td>
//                 <td>{product.name}</td>
//                 <td>₹{product.price}</td>

//                 <td>

//                   <button
//                     onClick={() => navigate(`/tenant/edit-product/${product.id}`,{state:product})}
//                   >
//                     Edit
//                   </button>

//                   <button
//                     style={{ marginLeft: "10px" }}
//                     onClick={() => handleDelete(product.id)}
//                   >
//                     Delete
//                   </button>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>

//   );

// }

// export default TenantProducts;





import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../../components/user/UserNavbar";

import { getTenantProducts, deleteProduct } from "../../services/tenantService";

import { useAuth } from "../../context/AuthContext";

function TenantProducts() {

  const { user } = useAuth();

  const tenantId = user?.tenant?.id;
  const tenantDomain = user?.tenant?.domain;

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {

    const data = await getTenantProducts(tenantDomain);

    setProducts(data.content);

  };

  useEffect(() => {

    if (tenantId) {
      loadProducts();
    }

  }, [tenantId]);

  const handleDelete = async (productId) => {

    await deleteProduct(tenantDomain, productId);

    loadProducts();

  };

  return (

    <div>

      <UserNavbar />

      <div className="p-8">

        <h2 className="text-3xl font-bold mb-6">My Products</h2>

        <div className="overflow-x-auto rounded-lg shadow-md border">

          <table className="min-w-full bg-white">

            <thead className="bg-gray-100">

              <tr>

                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>

              </tr>

            </thead>

            <tbody className="divide-y">

              {products.map((product) => (

                <tr key={product.id} className="hover:bg-gray-50 transition-colors">

                  <td className="px-6 py-4 text-gray-700">{product.id}</td>

                  <td className="px-6 py-4 font-medium text-gray-800">
                    {product.name}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-semibold">
                    ₹{product.price}
                  </td>

                  <td className="px-6 py-4 flex gap-3">

                    <button
                      onClick={() => navigate(`/tenant/${tenantDomain}/edit-product/${product.id}`, { state: product })}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default TenantProducts;