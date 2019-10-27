import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
    "about"
  ].includes(listItem.getId())

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("About Me")
                .child(
                    S.editor()
                        .id('about')
                        .schemaType("about")
                        .documentId("singleton-about")
                ),
            ...S.documentTypeListItems()
                .filter(hiddenDocTypes)
        ]);