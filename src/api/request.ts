import axios, { AxiosResponse } from 'axios';

const envMode = process.env.NODE_ENV;
const baseURL = envMode === 'development' ? '/' : '/api';

const instance=axios.create({
  baseURL,
  timeout:2000
})

instance.interceptors.request.use(config=>{
  console.log("config",config);
  return config
  
},err=>{
  return Promise.reject(err)
})

instance.interceptors.response.use(res=>{
  console.log("interceptors",res);
  return res.data
},err=>{
  return Promise.reject(err)
})
export default instance

export const fetchLocl = async (method: string, url: string, params?: Record<string, any>): Promise<any> => {
  const opts: RequestInit = {method};
  if (method === 'post') {opts.body = JSON.stringify(params);}
  return await fetch(url, opts).then((res) => {
    if(res.status===200){
      return res.json();
    }else{
      return res;
    }
  });
};

// export const fetchLocl1 = async ( method: string, url: string, params?: Record<string, any> ): Promise<any> => {
//   const opts: RequestInit = {
//     method,
//   };
//   if (method === 'post') {
//     opts.body = JSON.stringify(params);
//   }
//   const response = await fetch(url, opts);
//   if (!response.ok) {
//     throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
//   }
//   const responseData = await response.json();
//   return responseData;
// };
