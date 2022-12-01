import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;
const ADD = "ADD";
const MINUS = "MINUS"; 

// A Function that a modifing our data;
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return (count + 1);
    case MINUS:
      return (count - 1);
    default: 
      return (count); // return data;
  }
};

// A Function that a store our data;
const countStore = createStore(countModifier);
/*
1. dispatch()
2. subscribe()
3. getState()
4. replaceReducer()
*/

countStore.dispatch({ // dispatch: sending message to modifier;
  type: ADD
});
countStore.dispatch({
  type: MINUS
});

const checkIsChange = () => {
  number.innerText = countStore.getState(); // getState: get data from store;;
}

countStore.subscribe(checkIsChange) // subscribe: tracking data that we are changing;

const handleAdd = () => {
  countStore.dispatch({
    type: ADD
  });
};

const handleMinus = () => {
  countStore.dispatch({
    type: MINUS
  });
};



add.addEventListener("click", handleAdd);

minus.addEventListener("click", handleMinus);