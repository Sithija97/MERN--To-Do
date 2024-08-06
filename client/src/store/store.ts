import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api-slice";
import baseReducer from "./base-slice";

export const store = configureStore({
  reducer: {
    baseState: baseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
