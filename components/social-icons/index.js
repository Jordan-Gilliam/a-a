import Mail from './mail.svg'
import Github from './github.svg'

// Icons taken from: https://simpleicons.org/
const components = {
  mail: Mail,
  github: Github,
}

function SocialIcon({kind, href, size = 8}) {
  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-violet-500 dark:hover:text-violet-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export {SocialIcon}
