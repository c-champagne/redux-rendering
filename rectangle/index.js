const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

const addWidth = function () {
    dispatch({type: 'CHANGE_WIDTH', width: 10})
}

const addHeight = function () {
    dispatch({type: "CHANGE_HEIGHT", height: 10})
}

const changeRed = function () {
    dispatch({type: "CHANGE_RED", color: 'red'})
}

const changeBlue = function () {
    dispatch({type: "CHANGE_BLUE", color: 'blue'})
}

// Write DOM event listeners here, make them dispatch actions to the Redux store 

