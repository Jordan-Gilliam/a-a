import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import {Logo} from './Logo'
import {CustomLink} from './CustomLink'
import {SectionContainer} from './SectionContainer'
import {Footer} from './Footer'
import {MobileNav} from './MobileNav'
import {ThemeSwitch} from './ThemeSwitch'

function LayoutWrapper({children}) {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <CustomLink href="/" aria-label="Echerdex">
              <div className="flex items-center justify-between">
                <Logo imgSrc={siteMetadata.logo} />
                {typeof siteMetadata.logoTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.logoTitle}
                  </div>
                ) : (
                  siteMetadata.logoTitle
                )}
              </div>
            </CustomLink>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map(link => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export {LayoutWrapper}
