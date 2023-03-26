import axios from "axios";

const baseUrl = 'https://demo1563682.mockable.io'

const GET = async (target: string) => {
  
  const ress = await axios.get(`${baseUrl}/${target}`).catch(error => ({ 
      status: error.response.status, 
      data: {} 
    }))

  const isSuccess = ress.status === 200

  return {
    ress: {
      status: isSuccess,
      statusCode: ress.status,
      ...!isSuccess && {
        message: 'Terdapat kesalahan dalam mengambil data, harap hubungi admin 🙏'
      }
    },
    data: ress.data,
  }
}

// eslint-disable-next-line
export default {
  GET
}
