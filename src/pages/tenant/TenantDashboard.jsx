// import { useNavigate } from "react-router-dom";
// import UserNavbar from "../../components/user/UserNavbar";

// function TenantDashboard() {

//   const navigate = useNavigate();

//   return (
//     <div>

//       <UserNavbar />

//       <div
//         style={{
//           padding: "40px",
//           textAlign: "center"
//         }}
//       >

//         <h2>Tenant Dashboard</h2>

//         <p style={{ color: "gray" }}>
//           Manage your products from here
//         </p>

//         <div
//           style={{
//             marginTop: "30px",
//             display: "flex",
//             justifyContent: "center",
//             gap: "20px"
//           }}
//         >

//           <button
//             onClick={() => navigate("/tenant/products")}
//             style={{
//               padding: "12px 20px",
//               fontSize: "16px",
//               cursor: "pointer"
//             }}
//           >
//             My Products
//           </button>

//           <button
//             onClick={() => navigate("/tenant/add-product")}
//             style={{
//               padding: "12px 20px",
//               fontSize: "16px",
//               cursor: "pointer"
//             }}
//           >
//             Add Product
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default TenantDashboard;





import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import { useAuth } from "../../context/AuthContext";

function TenantDashboard() {

  const navigate = useNavigate();
  const {user} = useAuth();

  const tenantDomain = user?.tenant?.domain;

  return (
    <div>

      <UserNavbar />

      <div className="p-10 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Tenant Dashboard
        </h2>

        <p className="text-gray-500">
          Manage your products from here
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <button
            onClick={() => navigate(`/tenant/${tenantDomain}/products`)}
            className="h-40 w-60 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center justify-center"
          >
            My Products
          </button>

          <button
            onClick={() => navigate(`/tenant/${tenantDomain}/add-product`)}
            className="h-40 w-60 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-xl flex items-center justify-center"
          >
            Add Product
          </button>

        </div>

      </div>

    </div>
  );
}

export default TenantDashboard;