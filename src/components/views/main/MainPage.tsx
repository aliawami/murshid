import {
  Button,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  Show,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

import ResultLargPage from "./ResultLargPage";

import { useRef, useState } from "react";
import apiClient, { CanceledError } from "../../../services/api-client";
import type { RootData } from "../../../models/RootData";
import ResultSmallPage from "./ResultSmallPage";

const MainPage = () => {
  const [dataQuery, setDataQuery] = useState<RootData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          console.log(ref.current);

          if (ref.current) {
            const searchText = ref.current.value;
            if (!searchText.trim()) return;
            console.log("search text is " + searchText);
            setIsLoading(true);
            setError("");
            setHasSearched(false);
            apiClient
              .get<RootData[]>("/murshidAPI/search/?rootword=" + searchText)
              .then((res) => {
                console.log(res.data);
                setDataQuery(res.data);
                setIsLoading(false);
                setHasSearched(true);
              })
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError("حدث خطأ أثناء البحث، يرجى المحاولة مرة أخرى.");
                setIsLoading(false);
              });
          }
        }}
      >
        <Center height="100vh">
          <VStack>
            <Flex
              justifyContent={"center"}
              direction={"column"}
              w="full"
              maxW="800px"
              px={4}
            >
              <VStack>
                <Text fontSize="7xl" fontWeight="bold">
                  مرشد
                </Text>
                <HStack w="full">
                  <InputGroup flex="1" startElement={<LuSearch />}>
                    <Input
                      placeholder="ادخل جذر الكلمة للبحث عنها في القرآن الكريم"
                      ref={ref}
                    />
                  </InputGroup>
                  <Button type="submit">بحث</Button>
                </HStack>
              </VStack>
            </Flex>
            {error && <Text color="red.500">{error}</Text>}
            {isLoading && <Spinner />}
            {hasSearched && !isLoading && !error && dataQuery.length === 0 && (
              <Text fontSize="xl" color="gray.500" mt={4}>
                لا توجد نتائج
              </Text>
            )}
            <Show when={dataQuery.length > 0 && !isLoading && !error}>
              <Flex hideBelow={"md"}>
                <ResultLargPage data={dataQuery} />
              </Flex>
              <Flex hideFrom={"md"}>
                <ResultSmallPage data={dataQuery} />
              </Flex>
            </Show>
          </VStack>
        </Center>
      </form>
    </>
  );
};

export default MainPage;
