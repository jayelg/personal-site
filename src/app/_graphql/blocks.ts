import { CATEGORY } from './category'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const CALL_TO_ACTION_BLOCK = `
...on CallToActionBlock {
  blockType
  invertBackground
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  invertBackground
  ${MEDIA}
}
`

export const ARCHIVE_BLOCK = `
...on ArchiveBlock {
  blockType
  introContent
  populateBy
  relationTo
  ${CATEGORY}
  limit
  showPageRange
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${CATEGORY}
        ${META}
      }
    }
  }
  populatedDocsTotal
}
`
