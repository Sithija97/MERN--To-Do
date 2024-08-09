import { apiSlice } from "./api-slice";

export const filtersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFilters: builder.query({
      query: () => `/api/filter`,
      providesTags: ["Filter"],
    }),
    getFilter: builder.query({
      query: ({ _id }) => `/api/filter/${_id}`,
      providesTags: ["Filter"],
    }),
    addNewFilter: builder.mutation({
      query: (filter) => ({
        url: `/api/filter`,
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Filter"],
    }),
    updateFilter: builder.mutation({
      query: (filter) => ({
        url: `/api/filter/${filter._id}`,
        method: "PATCH",
        body: filter,
      }),
      invalidatesTags: ["Filter"],
    }),
    deleteFilter: builder.mutation({
      query: ({ _id }) => ({
        url: `/api/filter/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Filter"],
    }),
  }),
});

export const {
  useGetFiltersQuery,
  useGetFilterQuery,
  useAddNewFilterMutation,
  useUpdateFilterMutation,
  useDeleteFilterMutation,
} = filtersApiSlice;
