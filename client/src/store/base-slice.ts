import { createSlice } from "@reduxjs/toolkit";
import { InitialBaseState } from "../types";
import { RootState } from "./store";

const initialState: InitialBaseState = {
  token: null,
  selectedNote: {
    _id: "",
    title: "",
    content: "",
    categoryId: "",
    userId: "",
    userName: "",
    filters: [],
    createdAt: "",
    updatedAt: "",
  },
};

const baseSlice = createSlice({
  name: "baseState",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    clearToken: (state) => {
      state.token = initialState.token;
    },
    setNote: (state, { payload }) => {
      state.selectedNote = payload;
    },
    clearNote: (state) => {
      state.selectedNote = initialState.selectedNote;
    },
  },
});

export const selectedNote = (state: RootState) => state.baseState.selectedNote;

export const { setToken, clearToken, setNote, clearNote } = baseSlice.actions;
export default baseSlice.reducer;
