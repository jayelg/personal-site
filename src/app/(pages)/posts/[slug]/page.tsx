import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Keyword, Post as PostType } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { Layouts } from '../../../_components/Layouts'
import { PageMargin } from '../../../_components/PageMargin'
import { RelatedPosts } from '../../../_components/RelatedPosts'
import { PageState } from '../../../_providers/Context/pageContext'
import { generateMeta } from '../../../_utilities/generateMeta'

export default async function Post({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let post: PostType | null = null

  try {
    post = await fetchDoc<PostType>({
      collection: 'posts',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }

  if (!post) {
    notFound()
  }

  const { layout, title, publishedAt, description, category } = post
  // Todo: implement a populate function and type guard instead for the below type assertions
  const filteredKeywords = (post.keywords || []).filter(
    keyword => typeof keyword !== 'number',
  ) as Keyword[]
  const relatedPosts = (post.relatedPosts || []).filter(
    relatedPost => typeof relatedPost !== 'number',
  ) as PostType[]

  return (
    <PageMargin className="grow">
      <main className="flex flex-col">
        <PageState
          title={title}
          description={description}
          category={typeof category !== 'number' && category}
          keywords={filteredKeywords}
          publishedAt={publishedAt}
        />
        <Layouts layouts={layout} relatedPosts={relatedPosts} />
      </main>
    </PageMargin>
  )
}

export async function generateStaticParams() {
  try {
    const posts = await fetchDocs<PostType>('posts')
    return posts?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let post: PostType | null = null

  try {
    post = await fetchDoc<PostType>({
      collection: 'posts',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateMeta({ doc: post })
}
