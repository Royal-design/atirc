import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./slices/blogSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from "react-redux";

export const store = configureStore({
  reducer: {
    blogs: blogSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
