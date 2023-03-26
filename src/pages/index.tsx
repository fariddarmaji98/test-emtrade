import { AppContext } from 'next/app'
import axios from 'axios'
import { 
  Title, 
  Description,
  Banner,
  EventDetail,
  Checkout,
  Template
} from '@/components/index.d'

interface HomeProps {
  ress: string,
  status: boolean,
  message?: string
}

function Home({
  ress,
  status,
  message
}: HomeProps) {
  console.log('===> ress', ress)

  return (
    <>
      <Template>
          <div className='pt-6 xs:px-6 bg-cs-black xs:bg-white mb-6'>
            <Banner 
              src="https://staging-emtrade.s3.ap-southeast-1.amazonaws.com/event/Event_Mock.png" 
            />
          </div>
          <div className='w-full flex flex-col px-6'>
            <Title costumeClass="mb-6">
              Bedah Emiten TOWR PT Sarana Menara Nusantara TBK.
            </Title>
            <EventDetail 
              date="Jumat, 16 Juli 2021" 
              time="16:00 - 17:00 WIB" 
              location="Webinar via Zoom"
              costumeClass="mb-6"
            />
            <Description costumeClass="mb-4">
              EMITALK merupakan special webinar yang menghadirkan pembicara dari emiten saham untuk memberikan pemahaman secara lebih mendalam kepada oara investor saham tentang kinerja dan kondisi terkini perusahaan.
            </Description>
            <Description costumeClass="mb-4">
              Pada kesempatan ini Emitalk berkolaborasi dengan PT Kalbe Farma TBK yang akan membahas kondisi dan kinerja terkini KLBF.
            </Description>
            <Description costumeClass="mb-4">
              Rincian acara Emitalk: Menuju Indonesia Sehat adalah sebagai berikut:
            </Description>
            <Description costumeClass="mb-4">
              Hari, Tanggal : Jumat, 16 Juli 2021
              Waktu : 16:00 - 17:00
              Tema :KLBF menju indonesia sehat
            </Description>
            <Description costumeClass="mb-4">
              Narasumber : Bernadus K. Winata, Direktur PT Kalbe Farma, TBK
            </Description>
            <Description costumeClass="mb-4">
              Platform : Webinar via Zoom
            </Description>
            <Description costumeClass="mb-4">
              Happy Learning, Happy Investing!
            </Description>
          </div>
          
          <Checkout discount={10} price={150000} total_price={110000} />
      </Template>
    </>
  )
}

Home.getInitialProps = async (ctx: AppContext) => {
  const ressData = await axios.get('https://demo1563682.mockable.io/event')

  if (ressData.status !== 200) {
    return {
      status: false,
      message: 'Terdapat kesalahan dalam mengambil data, harap hubungi admin 🙏'
    }
  }

  console.log('===> ressData', ressData)
  
  return {
    status: true,
    ress: 'hallo'
  }
}

export default Home
