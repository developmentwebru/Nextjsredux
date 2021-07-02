import { HYDRATE } from 'next-redux-wrapper';
import { rootReducer } from '.';

export const dataReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        // compare server state and current state ...
        return nextState;
    }
    return rootReducer(state, action);
};