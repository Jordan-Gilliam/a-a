import Image from 'next/image'
import {CustomLink} from './CustomLink'

function Logo({imgSrc}) {
  return (
    <div className="mr-3">
      <CustomLink href={'/'} aria-label="Link to home">
        <Image alt="home" src={imgSrc} width={62} height={98} />
      </CustomLink>
    </div>
  )
}

export {Logo}
