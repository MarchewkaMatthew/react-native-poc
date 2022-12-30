import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import counterReducer from "./reducers/counterReducer";
import bookReducer from "./slices/bookSlice";
import { pokemonApi } from "../api/pokemonApi";

export const store = configureStore({
  reducer: {
    color: colorSlice,
    counter: counterReducer,
    book: bookReducer,
    // API
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  }
});

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;