import { useEffect } from 'react'
import { NextPage } from 'next'
import { AppContext } from 'next/app'
import axios from 'axios'
import { 
  Title, 
  Description,
  Banner,
  EventDetail,
  Checkout,
  Template,
  ServerError
} from '@/components/index.d'

interface HomeProps {
  ress: {
    status: boolean,
    statusCode: number,
    message?: string
  }
  data: {
    name: string,
    date: string,
    time: string,
    location: string,
    image: string,
    short_description: string,
    description: string,
    price: number,
    discount: number,
    total_price: number
  },
}

const Home: NextPage<HomeProps> = ({
  ress,
  data
}) => {
  const { 
    name,
    date,
    time,
    location,
    image,
    short_description,
    description,
    price,
    discount,
    total_price
  } = data
  
  const {
    status,
    statusCode,
    message
  } = ress

  return (
    <>
      <Template 
        pageName={name} 
        status={status} 
        statusCode={statusCode} 
        errorMessage={message}
      >
          <div className='pt-6 xs:px-6 bg-cs-black xs:bg-white mb-6'>
            <Banner 
              src={image} 
            />
          </div>
          <div className='w-full flex flex-col px-6'>
            <Title costumeClass="mb-6">
              {short_description}
            </Title>
            <EventDetail 
              date={date} 
              time={time} 
              location={location}
              costumeClass="mb-6"
            />
            <Description 
              text={description} 
              costumeClass="flex flex-col gap-4 mb-9" 
            />
          </div>
          
          <Checkout 
            eventName={short_description}
            discount={discount} 
            price={price} 
            total_price={total_price}
          />
      </Template>
    </>
  )
}

Home.getInitialProps = async () => {
  const ressData = await axios
    .get('https://demo1563682.mockable.io/event')
    .catch(error => ({ status: error.response.status, data: {} }))

  console.log('===> ressData', ressData)

  const successGetApi = ressData.status === 200
  
  return {
    ress: {
      status: successGetApi,
      statusCode: ressData.status,
      ...!successGetApi && {
        message: 'Terdapat kesalahan dalam mengambil data, harap hubungi admin 🙏'
      }
    },
    data: ressData.data,
  }
}

export default Home
