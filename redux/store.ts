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
  books: any;
  data: any;
  counter: {
    books: Book[],
    loading: boolean;
    error: any;
    data: Book[] | [];
    filteredBook: Book[];
  };
 
};
export type AppDispatch = typeof store.dispatch;


