import { apiSlice } from "./api-slice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/api/category`,
      providesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: ({ _id }) => `/api/category/${_id}`,
      providesTags: ["Category"],
    }),
    addNewCategory: builder.mutation({
      query: (category) => ({
        url: `/api/category`,
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: `/api/category/${category._id}`,
        method: "PATCH",
        body: category,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: ({ _id }) => ({
        url: `/api/category/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApiSlice;
