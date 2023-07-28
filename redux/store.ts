// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import { userApi } from "./services/userApi";
import { Book } from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(userApi.middleware),
});

export type RootState = {
  counter: {
    books: Book[],
    loading: boolean;
    error: any;
    data: Book[] | null;
    searchedBook: Book[];
  };
  // Other slices if you have more in your application
};
export type AppDispatch = typeof store.dispatch;
