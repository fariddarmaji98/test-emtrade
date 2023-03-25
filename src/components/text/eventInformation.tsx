import { ReactNode } from "react";
import { SubDescription } from ".";

interface EventInformationProps {
  icon: string,
  text: string
}
 
const EventInformation = ({
  icon,
  text
}: EventInformationProps) => (<div className="flex items-center gap-4">
  <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
    <span className="text-lg">
      {icon}
    </span>
  </div>
  <SubDescription>
    {text}
  </SubDescription>
</div>)
 
export default EventInformation;
