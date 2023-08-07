import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from "redux-logger"
import reducers from "../features"

const store = configureStore({
  reducer: {
    counter: reducers,
  },
  middleware: getDefaultMiddleware().concat(logger),
})

export const RootState = store.getState
export const RootDispatch = store.dispatch

export default store
