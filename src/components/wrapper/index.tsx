import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode,
  
}
 
const Wrapper = ({
  children
}: WrapperProps) => {

  return (<div className={`
    
  `}>
    {children}
  </div>)
}
 
export default Wrapper;
