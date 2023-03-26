import Navbar from "../navbar";
import Header from "../header";

import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode,
}
 
const Template = ({
  children
}: TemplateProps) => {

  return (<>
    <Header />
    <div className='w-full flex justify-center bg-neutral-100'>
      <div className='w-full max-w-[720px] flex flex-col bg-white'>
        <Navbar name="Bedah Emiten TOWR" />
        {children}
      </div>
    </div>
  </>)
}
 
export default Template;
