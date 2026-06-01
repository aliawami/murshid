import { Card, Grid, Heading, Highlight, Text } from "@chakra-ui/react";

import type { RootData } from "../../../models/RootData";

interface Props {
  data: RootData;
}

const gridValues = (data: RootData) => [
  data.first_letter,
  data.num_occurrences,
  data.root_spelling,
  data.num_occurrences_spelling,
  data.root_quran_style,
  data.place_in_ayah,
  data.sorah_text_num,
  data.page_num,
  data.num_of_ayah,
];

const ResultCard = ({ data }: Props) => {
  return (
    <Card.Root size="md" w="full">
      <Card.Header>
        <Heading size="md">{data.word_root.word_root}</Heading>
      </Card.Header>
      <Card.Body gap={4}>
        <Text fontSize="lg" lineHeight="tall" textAlign="center">
          <Highlight
            query={data.root_quran_style}
            styles={{
              px: "0.5",
              color: "fg.error",
            }}
          >
            {data.ayah_text_madinah}
          </Highlight>
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {gridValues(data).map((value, index) => (
            <Text key={index} textStyle="sm" textAlign="center">
              {value}
            </Text>
          ))}
        </Grid>
      </Card.Body>
    </Card.Root>
  );
};

export default ResultCard;
