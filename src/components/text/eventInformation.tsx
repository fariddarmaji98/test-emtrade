import { ReactNode } from "react"
import { SubDescription } from "."

interface EventInformationProps {
  icon: string,
  text: string
}
 
const EventInformation = ({
  icon,
  text
}: EventInformationProps) => (<div className="flex flex-col xxs:flex-row xxs:items-center gap-1 xxs:gap-4">
  <div className="w-10 h-10 rounded-2xl xxs:rounded-full bg-white flex justify-center items-center text-lg">
    {icon}
  </div>
  <SubDescription>
    {text}
  </SubDescription>
</div>)
 
export default EventInformation
