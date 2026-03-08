import apiClient from "./apiClient";

export const getProducts = async (
  search,
  category,
  page = 0,
  size = 12
) => {

  const params = {};

  if (search) {
    params.search = search;
  }

  if (category) {
    params.category = category;
  }

  params.page = page;
  params.size = size;

  const response = await apiClient.get("/products", {
    params: params
  });

  return response.data;

};


export const getProductById = async (id) => {

  const response = await apiClient.get(`/products/${id}`);

  return response.data;

};

export const filterProductsByPrice = async (minPrice, maxPrice, page, size) => {

  const response = await apiClient.get("/products/filter", {
    params: {
      minPrice:minPrice,
      maxPrice:maxPrice,
      page: page,
      size: size
    }
  });
  return response.data;
};  
   