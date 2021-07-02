import { applyMiddleware, Action, createStore } from "redux";
import reduxThunk, { ThunkAction } from 'redux-thunk';
import  {dataReducer}  from "./reducers/dataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, MakeStore, Context, } from 'next-redux-wrapper';
const middleware = [reduxThunk]

export const store = createStore(dataReducer, composeWithDevTools(applyMiddleware(...middleware)))

const makeStore: MakeStore<RootState> = (context: Context) => createStore(
    dataReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const wrapper = createWrapper(makeStore, { debug: false });

// global types
export type RootState = ReturnType<typeof dataReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
