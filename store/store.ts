import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import counterReducer from "./reducers/counterReducer";
import bookReducer from "./slices/bookSlice";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    counter: counterReducer,
    book: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;