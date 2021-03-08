import siteMetadata from '@/data/siteMetadata'
import {CustomLink} from './CustomLink'
import {SocialIcon} from '@/components/social-icons'

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <CustomLink href="/">{siteMetadata.title}</CustomLink>
        </div>
      </div>
    </footer>
  )
}

export {Footer}
