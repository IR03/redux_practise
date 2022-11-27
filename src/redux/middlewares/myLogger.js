import rootReducer from "../rootReducer";

// middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action : ${JSON.stringify(action)}`);
    console.log(`Before : ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());
    
    console.log(`UpComing State : ${JSON.stringify(upcomingState)}`);

     // pass action
     return next(action);
}

export default myLogger;