import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../feature/authSlice';
import alertReducer from "../feature/alertSlice"
import pageReducer from "../feature/pageSlice"
import serviceReducer from '../feature/serviceSlice';
import userReducer from '../feature/userSlice';
import appReducer from '../feature/appSlice';
import cpnyReducer from '../feature/cpnySlice';
import sUserReduce from '../feature/sUserSlice';
import swReduce from '../feature/selfWorkSlice';
import sdtReduce from '../feature/studentSlice';
import mailReduce from "../feature/mailSlice"
import sdtMReduce from "../feature/StudentMonoSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  

const rootReducer = combineReducers({
    auth: authReducer,
    alertR: alertReducer,
    page: pageReducer,
    srvc: serviceReducer,
    user: userReducer,
    app: appReducer,
    cpny: cpnyReducer,
    suser: sUserReduce,
    sw: swReduce,
    sdt: sdtReduce,
    mail: mailReduce,
    sdtM: sdtMReduce
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)

/* const { dispatch } = store;

export { store, dispatch, useDispatch }; */

