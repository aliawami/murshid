import type { RootData } from "../models/RootData";
import type { DataQuery } from "./DataQuery";
import useData from "./usedata";



const useRoot = (dataQuery: DataQuery) =>
  useData<RootData>(
    "search",
    {
      params: {
        rootword: dataQuery.searchText
      },
    },
    [dataQuery]
  );

export default useRoot;