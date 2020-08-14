import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import gameReducer from './reducers/game';

const rootReducer = combineReducers({
  game: gameReducer,
});

const middleware = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);

export type RootState = ReturnType<typeof rootReducer>;

const enhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(rootReducer, enhancers);
