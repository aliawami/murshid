import { Card, Heading, HStack, Text } from "@chakra-ui/react";

import headers_text from "../headers_text";
import type { RootData } from "../../../models/RootData";

interface Props {
  data: RootData;
}
const ResultCard = ({ data }: Props) => {
  return (
    <div>
      <Card.Root size={"md"}>
        <Card.Header>
          <Heading>{data.word_root.word_root}</Heading>
        </Card.Header>
        <Card.Body>
          {
            <HStack>
              <Text key={headers_text[1]} textStyle={"sm"} fontWeight="bold">
                {headers_text[1]}
              </Text>
              <Text>{data.first_letter}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[2]} textStyle={"sm"} fontWeight="bold">
                {headers_text[2]}
              </Text>
              <Text>{data.num_occurrences}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[3]} textStyle={"sm"} fontWeight="bold">
                {headers_text[3]}
              </Text>
              <Text>{data.root_spelling}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[4]} textStyle={"sm"} fontWeight="bold">
                {headers_text[4]}
              </Text>
              <Text>{data.num_occurrences_spelling}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[5]} textStyle={"sm"} fontWeight="bold">
                {headers_text[5]}
              </Text>
              <Text>{data.root_quran_style}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[6]} textStyle={"sm"} fontWeight="bold">
                {headers_text[6]}
              </Text>
              <Text>{data.place_in_ayah}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[7]} textStyle={"sm"} fontWeight="bold">
                {headers_text[7]}
              </Text>
              <Text>{data.sorah_text_num}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[8]} textStyle={"sm"} fontWeight="bold">
                {headers_text[8]}
              </Text>
              <Text>{data.page_num}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[9]} textStyle={"sm"} fontWeight="bold">
                {headers_text[9]}
              </Text>
              <Text>{data.num_of_ayah}</Text>
            </HStack>
          }
          {
            <HStack>
              <Text key={headers_text[10]} textStyle={"sm"} fontWeight="bold">
                {headers_text[10]}
              </Text>
              <Text>{data.ayah_text_madinah}</Text>
            </HStack>
          }
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default ResultCard;
