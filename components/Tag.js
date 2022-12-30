import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm bg-blue-500 px-1 py-0.5 rounded-sm font-medium uppercase text-white transition-all duration-100 ease-in-out hover:bg-blue-600 dark:text-blue-600 dark:bg-blue-200 dark:hover:bg-blue-300"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
