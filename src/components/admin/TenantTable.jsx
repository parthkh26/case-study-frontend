import { updateTenantStatus } from "../../services/adminService";

function TenantTable({ tenants, refreshTenants }) {

  const handleStatusChange = async (tenant) => {

    try {

      const newStatus = !tenant.active;

      await updateTenantStatus(tenant.id, newStatus);

      // reload tenants after update
      refreshTenants();

    } catch (error) {

      console.error("Error updating tenant status", error);

    }

  };

  return (
    <div className="space-y-6">
      {tenants?.map((tenant) => (
        <div key={tenant.id} className={`w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border ${tenant.active ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${tenant.active ? 'text-green-800' : 'text-red-800'}`}>{tenant.name}</h3>
              <p className={`text-gray-600 mb-1 ${tenant.active ? 'text-green-700' : 'text-red-700'}`}><strong>ID:</strong> {tenant.id}</p>
              <p className={`text-gray-600 mb-1 ${tenant.active ? 'text-green-700' : 'text-red-700'}`}><strong>Domain:</strong> {tenant.domain}</p>
            </div>
            <button
              onClick={() => handleStatusChange(tenant)}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300 ${
                tenant.active ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {tenant.active ? "Active" : "Inactive"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TenantTable;