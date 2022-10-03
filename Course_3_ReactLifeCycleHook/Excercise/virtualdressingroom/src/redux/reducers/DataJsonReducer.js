import { GET_DATA_JSON, GET_PRODUCT } from "../action/Action";

const initialState = {
  dataJson: {
    navPills: [],
    tabPanes: []
  },
  showProduct: {
    background: {
      id: 'background_1',
      type: 'background',
      img: '../assets/images/background/background1.jpg'
    },
    shoes: {
      id: 'shoes_1',
      type: 'shoes',
      imgSrc_png: '../assets/images/shoes/shoes1.png'
    },
    background: {
      imgSrc_png: '../assets/images/background/background1.jpg'
    }
    // topclothes: '',
    // botclothes: '',
    // shoes: '',
    // handbags: ''
  }
};
 
export const DataJsonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_JSON:
      let dataTemp = state.dataJson;
      dataTemp = { ...action.dataJson };
      state.dataJson = dataTemp;
      return { ...state, dataJson: dataTemp };
    case GET_PRODUCT:
      // console.log("action.showProduct", action.showProduct);
      let { navPills } = state.dataJson;
      let { showProduct } = state;
      navPills.map((itemNav) => {
        showProduct[itemNav.type] = action.showProduct.type === itemNav.type ? action.showProduct: showProduct[itemNav.type];
        return {...showProduct};
      })

      // console.log("showProductTemp", showProduct.topclothes.id);
      return { ...state, showProduct: showProduct };
    default:
      return state;
  }
};
