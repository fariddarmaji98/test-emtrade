import Head from "next/head"

interface HeaderProps {
  pageName: string
}
 
const Header = ({
  pageName
}: HeaderProps) => {
  return (<Head>
    <title>{`${pageName} ~ Test Emtrade`}</title>
    <meta name="description" content={pageName} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>)
}
 
export default Header