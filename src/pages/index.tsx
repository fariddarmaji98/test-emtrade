import { NextPage } from 'next'
import { API } from '@/utils'
import { 
  Title, 
  Description,
  Banner,
  EventDetail,
  Checkout,
  Template,
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

const Home: NextPage<HomeProps> = ({ ress, data }) => {
  const { 
    name, date, time, location,
    image, short_description, description,
    price, discount, total_price
  } = data
  
  const { status, statusCode, message } = ress

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
          <div className='w-full flex flex-col p-2 xxs:px-6'>
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

Home.getInitialProps = async (ctx) => {
  const isErrorApiTest = ctx.query.test === 'error'
  const ress = await API.GET(isErrorApiTest ? 'example' : 'event')
  
  return {
    ...ress
  }
}

export default Home
