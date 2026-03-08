import { useEffect, useState } from "react";


import { CanceledError } from "../services/api-client";
import type { RootData } from "../models/RootData";
import RootDataService from "../services/RootDataService";

const useRootData = (searchWord: string) =>{
    const [rootData, setrootData] = useState<RootData[]>();
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

      const { request, cancel } = RootDataService.search<RootData>(searchWord);
      setIsLoading(true);
  
      request
        .then((response) => {
          setrootData(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      //   .finally(()=>{
      //     setIsLoading(false)
      //   })
  
      return () => cancel();
    }, [searchWord]);

    return {rootData, error, isLoading}
  
}

export default  useRootData