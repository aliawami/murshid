import { VStack } from "@chakra-ui/react";
import type { RootData } from "../../../models/RootData";
import ResultCard from "./ResultCard";

interface Props {
  data: RootData[];
}

function ResultSmallPage({ data }: Props) {
  return (
    <>
      <VStack w="full" gap={4} align="stretch">
        {data.map((rootData) => (
          <ResultCard key={rootData.id} data={rootData} />
        ))}
      </VStack>
    </>
  );
}

export default ResultSmallPage;
