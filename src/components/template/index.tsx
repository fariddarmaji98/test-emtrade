import Navbar from "../navbar"
import Header from "../header"
import ServerError from "../error/server-error"

import { ReactNode } from "react"

interface TemplateProps {
  children: ReactNode,
  pageName: string,
  status?: boolean,
  statusCode?: number,
  errorMessage?: string
}
 
const Template = ({
  children,
  pageName = '',
  status = true,
  statusCode = 0,
  errorMessage = ''
}: TemplateProps) => (<>
  <Header pageName={pageName} />
  <div className='w-full flex justify-center bg-neutral-100'>
    <div className='w-full max-w-[720px] flex flex-col bg-white'>
      {
        status 
          ? <>
            <Navbar name={pageName} />
            {children}
          </> 
          : <ServerError statusCode={statusCode} errorMessage={errorMessage} />
      }
    </div>
  </div>
</>)
 
export default Template
