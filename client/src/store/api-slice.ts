import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).baseState.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Note", "Category"],
  endpoints: (builder) => ({}),
});
