import Image from "next/image"

interface BannerProps {
  src: string,
  alt?: string,
  costumeClass?: string
}
 
const Banner = ({
  src,
  alt = 'Banner Image',
  costumeClass
}: BannerProps) => (<div className={`w-full ${costumeClass}`}>
  <Image
    src={src}
    alt={alt}
    width={100}
    height={100}
    unoptimized={true}
    className="w-full"
    priority
  />
</div>)
 
export default Banner
