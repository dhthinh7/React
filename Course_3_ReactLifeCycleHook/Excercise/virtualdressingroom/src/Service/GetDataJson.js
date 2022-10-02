import data from '../assets/Data.json'
class BaseServices {
  getDataJson = () => {
    return data
  }
}

export const baseServices = new BaseServices();