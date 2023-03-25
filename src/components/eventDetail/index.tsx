import { EventInformation } from "../text";

interface EventDetailProps {
  time: string,
  date: string,
  location: string,
  costumeClass?: string
}
 
const EventDetail = ({
  time,
  date,
  location,
  costumeClass
}: EventDetailProps) => {
  return (<div className={`
    flex flex-col gap-3 p-4 rounded-2xl bg-neutral-100
    ${costumeClass}
  `}>
    <EventInformation icon="📅" text={time} />
    <EventInformation icon="⏰" text={date} />
    <EventInformation icon="📍" text={location} />
  </div>);
}
 
export default EventDetail;

// interface DescriptionProps {
//   children: ReactNode
// }
 
// const Description = ({
//   children
// }: DescriptionProps) => (<span className={`
//     text-base text-cs-black font-inter
//   `}>
//     {children}
//   </span>)
