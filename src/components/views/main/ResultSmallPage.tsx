import { VStack } from "@chakra-ui/react";
import type { RootData } from "../../../models/RootData";
import ResultCard from "./ResultCard";

interface Props {
  data: RootData[];
}

function ResultSmallPage({ data }: Props) {
  return (
    <>
      <VStack>
        {data.map((rootData) => (
          <ResultCard key={rootData.id} data={rootData} />
        ))}
      </VStack>
    </>
  );
}

export default ResultSmallPage;
