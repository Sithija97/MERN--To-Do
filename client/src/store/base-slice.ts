import { createSlice } from "@reduxjs/toolkit";
import { InitialBaseState } from "../types";
import { RootState } from "./store";

const initialState: InitialBaseState = {
  selectedNote: {
    _id: "",
    title: "",
    content: "",
    categoryId: {
      _id: "",
      title: "",
    },
    userId: "",
    userName: "",
    filters: [],
    hasReminder: false,
    isTrashed: false,
    hasArchived: false,
    createdAt: "",
    updatedAt: "",
  },
};

const baseSlice = createSlice({
  name: "baseState",
  initialState,
  reducers: {
    setNote: (state, { payload }) => {
      state.selectedNote = payload;
    },
    clearNote: (state) => {
      state.selectedNote = initialState.selectedNote;
    },
  },
});

export const selectedNote = (state: RootState) => state.baseState.selectedNote;

export const { setNote, clearNote } = baseSlice.actions;
export default baseSlice.reducer;
