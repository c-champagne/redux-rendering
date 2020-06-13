const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

const addRandomCircle = function () {
    dispatch({type: 'ADD_RANDOM_CIRCLE'});
}

// Write DOM event listeners here, make them dispatch actions to the Redux store 

