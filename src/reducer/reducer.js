

const reducer = (state, action) => {
  switch (action.type) {

    case "REMOVE_ITEM": {
        const noitems=state.data[action.payload].amount;
      const newState = state.data.filter(
        (item, index) => index !== action.payload
      );
      return { ...state, data: newState, total: state.total - noitems, totalAmnt:GET_TOTAL(newState) };
    }
    case "ADD_ALL_ITEMS": {
        const amnt=GET_TOTAL(action.payload)
      return {
        loading: false,
        data: action.payload,
        total: action.payload.length,
        totalAmnt:amnt   
      };
    }
    case "ADD_SINGLE_ITEM": {
      const newState = state.data.map((item, index) => {
        if (index === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        data: newState,
        total: state.total + 1,
        totalAmnt:GET_TOTAL(newState)
      };
    }
    case "DECREASE_SINGLE_ITEM": {
      if (state.data[action.payload].amount === 1) {
        const newState = state.data.filter(
          (item, index) => index !== action.payload
        );
        return {
          ...state,
          data: newState,
          total: state.total - 1,
          totalAmnt: GET_TOTAL(newState)
        };
      }

      const newState = state.data.map((item, index) => {
        if (index === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return {
        ...state,
        data: newState,
        total: state.total - 1,
        totalAmnt:GET_TOTAL(newState)
      };
    }
    default: {
      return state;
    }
  }
};


function GET_TOTAL(data) {
  let total = 0;
  data.map((curr)=>{
    const itemTotal = curr.price * curr.amount;
    total += itemTotal;
  });
  if(total===undefined)console.log("72")
  total = parseFloat(total.toFixed(2));
  console.log(data, total);
  return total;
}

export default reducer;