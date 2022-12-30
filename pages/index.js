import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            🧑🏻‍💻 Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          {!posts.length && <li className="text-lg pt-8">🧐 검색 결과가 없습니다.</li>}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, thumbSrc, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-14 items-center">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
                    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                      <div className="rounded-md overflow-hidden w-full">
                        <Image
                          className="object-cover object-center transform scale-100 transition-all duration-300 ease-in-out hover:scale-110"
                          src={thumbSrc}
                          alt={thumbSrc}
                          blurDataURL={thumbSrc}
                          width={300}
                          height={300}
                          placeholder="blur"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                    <div className="space-y-5 xl:col-span-3 xl:ml-5">
                      <div className="space-y-6">
                        <div>
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
                          </Link>
                          <div className="flex flex-wrap pt-3">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          <div className="prose text-gray-500 max-w-none dark:text-gray-400 truncate">
                            {summary}
                          </div>
                        </Link>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          더 보기 &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            모든 글 보기 &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
