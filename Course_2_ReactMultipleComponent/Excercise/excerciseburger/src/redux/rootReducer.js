const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}] 
  menu: { salad: 10, cheese: 20, beef: 55 },
  total: 85
}

const ExcerciseBurger = (state = burgerState, action) => {
  switch (action.type) {
    case 'UPDATE_NUMBER':
      let {burgerItem, number} = action;
      let stateUpdate = {...state.burger};
      if ((stateUpdate[burgerItem] === 0) && (number === -1)) {
        alert("Không thể chọn nhỏ hơn 0");
      } else {
        stateUpdate[burgerItem] += number;
        state.total += state.menu[burgerItem] * number;
      }
      state.burger = {...stateUpdate};
      return {...state};
    default:
      return { ...state };
  }

}

export default ExcerciseBurger;