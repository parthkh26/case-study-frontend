import apiClient from "./apiClient";

export const getTenants = async () => {

  const response = await apiClient.get("/admin/tenants");

  return response.data;

};


export const updateTenantStatus = async (tenantId, active) => {

  const response = await apiClient.put(
    `/admin/tenants/${tenantId}/status`,
    {
      active: active
    }
  );

  return response.data;

};


export const createTenant = async (tenantData) => {

  const response = await apiClient.post(
    "/admin/tenants",
    tenantData
  );

  return response.data;

};

export const assignUserToTenant = async (tenantId, userId) => {

  const response = await apiClient.put(
    `/admin/tenants/${tenantId}/assign-user/${userId}`
  );

  return response.data;

};