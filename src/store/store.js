import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  // user comes from auth state listener in Firebase
  blacklist: ['user', 'categories'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
// React Redux chrome extenstion
const reactReduxComposeEnhancer = process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
// Redux logger middleware
const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middleWares), reactReduxComposeEnhancer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store)
