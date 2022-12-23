import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import counterReducer from "./reducers/counterReducer";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;