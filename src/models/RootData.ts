


export interface RootData{
    id: number,
    first_letter: string,
    num_occurrences: number,
    root_spelling: string,
    num_occurrences_spelling: number,
    root_quran_style: string,
    place_in_ayah: number,
    ayah_text_madinah:string,
    num_of_ayah:number,
    sorah_text_num: string,
    page_num: number,
    word_root: WordRoot,
}


interface WordRoot{
    word_root:string,
}