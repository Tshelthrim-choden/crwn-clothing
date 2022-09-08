import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

 import rootReducer from './root-reducer';

 const middleware=[logger];

 export const persistor= persistStore(store);

 export const store = configureStore({reducer: rootReducer},applyMiddleware(...middleware))

 export default store;