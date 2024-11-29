import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('author').title('Authors'),  // Use documentTypeListItem
      S.documentTypeListItem('startup').title('Startup'),  // Use documentTypeListItem
    ]);