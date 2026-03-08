import apiClient from "./apiClient";

export const getTenantProducts = async (tenantDomain, page = 0) => {

  const response = await apiClient.get(`/tenants/${tenantDomain}/products?page=${page}&size=10`);

  return response.data;

};


export const addProduct = async (tenantDomain, productData) => {

  const response = await apiClient.post(`/tenants/${tenantDomain}/products`, productData);

  return response.data;

};


export const updateProduct = async (tenantDomain, productId, productData) => {

  const response = await apiClient.put(
    `/tenants/${tenantDomain}/products/${productId}`,
    productData
  );

  return response.data;

};


export const deleteProduct = async (tenantDomain, productId) => {

  await apiClient.delete(`/tenants/${tenantDomain}/products/${productId}`);

};