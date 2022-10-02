import { GET_DATA_JSON, GET_PRODUCT } from "../action/Action";

const initialState = {
  dataJson: {
    navPills: [],
    tabPanes: []
  },
  showProduct: {
    background: '../assets/images/background/background1.jpg',
    shoes: '../assets/images/shoes/shoes1.png'
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
      let { navPills } = state.dataJson;
      let { showProduct } = state;
      navPills.map((itemNav) => {
        return showProduct[itemNav.type] = action.showProduct.type === itemNav.type ? action.showProduct.imgSrc_png : showProduct[itemNav.type]
      })

    console.log("showProductTemp", showProduct);
    return { ...state, showProduct: showProduct };
    default:
      return state;
  }
};
