import type { RootData } from "../models/RootData";


export interface DataQuery { 
  roots: RootData | null;
  searchText: string;
}