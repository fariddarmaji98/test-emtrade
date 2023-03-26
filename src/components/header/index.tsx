import Head from "next/head";

interface HeaderProps {
  
}
 
const Header: FunctionComponent<HeaderProps> = () => {
  return (<Head>
    <title>Farid Darmaji ~ Test Emtrade</title>
    <meta name="description" content="Test Farid Darmaji" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>);
}
 
export default Header;