import { apiSlice } from "./api-slice";

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => `/api/note`,
      providesTags: ["Note"],
    }),
    getNote: builder.query({
      query: ({ _id }) => `/api/note/${_id}`,
      providesTags: ["Note"],
    }),
    addNewNote: builder.mutation({
      query: (note) => ({
        url: `/api/note`,
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Note"],
    }),
    updateNote: builder.mutation({
      query: (note) => ({
        url: `/api/note/${note._id}`,
        method: "PATCH",
        body: note,
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: builder.mutation({
      query: ({ _id }) => ({
        url: `/api/note/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useGetNoteQuery,
  useAddNewNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApiSlice;
