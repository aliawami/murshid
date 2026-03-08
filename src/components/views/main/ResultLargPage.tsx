import { Table } from "@chakra-ui/react";
import { Highlight } from "@chakra-ui/react";
import type { RootData } from "../../../models/RootData";

interface Props {
  data: RootData[];
}

function ResultLargPage({ data }: Props) {
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>SN</Table.ColumnHeader>
            <Table.ColumnHeader>جذر اللفظة</Table.ColumnHeader>
            <Table.ColumnHeader>الحرف الأول للجذر</Table.ColumnHeader>
            <Table.ColumnHeader>عدد الألفاظ لهذا الجذر</Table.ColumnHeader>
            <Table.ColumnHeader>اللفظة بالرسم الإملائي</Table.ColumnHeader>
            <Table.ColumnHeader>
              تكرار اللفظة بالتشكيل بالرسم الإملائي
            </Table.ColumnHeader>
            <Table.ColumnHeader>اللفظة بالرسم القرآني</Table.ColumnHeader>
            <Table.ColumnHeader>ترتيب اللفظة في الآية</Table.ColumnHeader>
            <Table.ColumnHeader>الآية مصحف المدينة</Table.ColumnHeader>
            <Table.ColumnHeader>رقم الآية</Table.ColumnHeader>
            <Table.ColumnHeader>السورة و رقمها</Table.ColumnHeader>
            <Table.ColumnHeader>رقم الصفحة</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.word_root.word_root}</Table.Cell>
              <Table.Cell>{item.first_letter}</Table.Cell>
              <Table.Cell>{item.num_occurrences}</Table.Cell>
              <Table.Cell>{item.root_spelling}</Table.Cell>
              <Table.Cell>{item.num_occurrences_spelling}</Table.Cell>
              <Table.Cell>{item.root_quran_style}</Table.Cell>
              <Table.Cell>{item.place_in_ayah}</Table.Cell>
              <Table.Cell>
                <Highlight
                  query={item.root_quran_style}
                  styles={{
                    px: "0.5",
                    // bg: "orange.subtle",
                    color: "fg.error",
                  }}
                >
                  {item.ayah_text_madinah}
                </Highlight>
              </Table.Cell>
              <Table.Cell>{item.num_of_ayah}</Table.Cell>
              <Table.Cell>{item.sorah_text_num}</Table.Cell>
              <Table.Cell>{item.page_num}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}

export default ResultLargPage;
