import { fetchLocl } from "./request";

interface ApiRes<T = any> {
  data: T;
  status: number;
}

export const httpGetMap = (url: string, params: any): Promise<ApiRes> => { 
  return fetchLocl("get", url + params); 
};
