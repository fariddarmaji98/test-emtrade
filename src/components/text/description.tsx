import { ReactNode } from "react"

interface DescriptionProps {
  text: string,
  costumeClass?: string,
}
 
const Description = ({
  text,
  costumeClass = '',
}: DescriptionProps) => (
  <div 
    dangerouslySetInnerHTML={{ __html: text }}
    className={`text-base text-cs-black font-inter ${costumeClass}`}
  ></div>
)
 
export default Description
