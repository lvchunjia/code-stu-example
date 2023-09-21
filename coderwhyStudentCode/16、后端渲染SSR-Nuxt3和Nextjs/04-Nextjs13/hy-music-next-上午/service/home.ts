import hyRequest from "./index";
import type { IResultData } from "./index";

export interface ISearchSuggest {
  id: string;
  defaultKey: string;
  configKey: any[];
}
// 01-获取搜索建议的接口
export const getSearchSuggest = () => {
  return hyRequest.get<IResultData<ISearchSuggest>>("/searchSuggest/get");
};
