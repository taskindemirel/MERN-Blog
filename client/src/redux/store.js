import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, userReducer)

  export const store = configureStore({
    reducer: {user: persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })


// export default configureStore({
//     reducer: {
//         user: persistedReducer
//    }
// })


// export default configureStore({
//     reducer: {
//         user: userReducer
//     }
// })
