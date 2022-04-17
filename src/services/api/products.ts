import axios from 'axios'
import { baseUrl } from '../../config/config';


export const productsBaseUrl = baseUrl + '/products'
export const getAllProducts = async () => {
  const res = await axios.get(productsBaseUrl);

  return res.data
}


export const getSingleProduct = async (params:any) => {
  const {queryKey} = params;
  const [, productId] = queryKey
  const res = await axios.get(`${productsBaseUrl}/${productId}`);
  return res.data
}

