import hydrate from 'next-mdx-remote/hydrate'
import {
  getFiles,
  getFileBySlug,
  getAllFilesFrontMatter,
  formatSlug,
} from '@/lib/mdx'

import PostLayout from '@/layouts/PostLayout'
import {MDXComponents} from '@/components/MDXComponents'
import {PageTitle} from '@/components/PageTitle'

export async function getStaticPaths() {
  const posts = await getFiles('posts')

  return {
    paths: posts.map(p => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const allPosts = await getAllFilesFrontMatter('posts')
  const postIndex = allPosts.findIndex(post => post.slug === params.slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('posts', params.slug)

  return {props: {post, prev, next}}
}

export default function Repository({post, prev, next}) {
  const {mdxSource, frontMatter} = post
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      {frontMatter.draft !== true ? (
        <PostLayout frontMatter={frontMatter} prev={prev} next={next}>
          {content}
        </PostLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
