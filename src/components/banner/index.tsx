import Image from "next/image";

interface BannerProps {
  src: string,
  alt?: string,
  costumeClass?: string
}
 
const Banner = ({
  src,
  alt = 'Banner Image',
  costumeClass
}: BannerProps) => {
  return (<div className={`w-full ${costumeClass}`}>
    <Image
      loader={() => src}
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="w-full"
    />
  </div>);
}
 
export default Banner;
