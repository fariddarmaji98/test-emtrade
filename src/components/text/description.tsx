import { ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode,
  costumeClass?: string
}
 
const Description = ({
  children,
  costumeClass = ''
}: DescriptionProps) => (<p className={`
  text-base text-cs-black font-inter
  ${costumeClass}
`}>
    {children}
  </p>)
 
export default Description;
