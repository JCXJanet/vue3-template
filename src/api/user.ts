import request from "@/utils/request";

const base = import.meta.env.VITE_API_BASE_URL;

const getDict = (data?: any) => {
  // return request.get(base + '/config-saas/sysDict/tree', data);
  return request.get('/api/test')
}

export default {
  base,
  getDict
}