import siteMetdata from '@/data/siteMetadata'
import {BlogSeo} from '@/components/SEO'
import {SectionContainer} from '@/components/SectionContainer'
import {PageTitle} from '@/components/PageTitle'
import {CustomLink} from '@/components/CustomLink'

const editUrl = fileName =>
  `${siteMetdata.siteRepo}/blob/master/data/posts/${fileName}`

export default function PostLayout({children, frontMatter}) {
  const {fileName, title} = frontMatter

  return (
    <SectionContainer>
      <BlogSeo
        url={`${siteMetdata.siteUrl}/posts/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10"></dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{gridTemplateRows: 'auto 1fr'}}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <CustomLink href={editUrl(fileName)}>
                  {'View on GitHub'}
                </CustomLink>
              </div>
            </div>
            <footer>
              <div className="pt-4 xl:pt-8">
                <CustomLink
                  href="/"
                  className="text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  &larr; Back Home
                </CustomLink>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
