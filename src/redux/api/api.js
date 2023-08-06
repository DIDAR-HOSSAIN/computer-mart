import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
//   tagTypes: ['Posts'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    //   providesTags: (result) =>
    //     result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],
    }),
    // addPost: build.mutation({
    //   query: (body) => ({
    //     url: `posts`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: ['Posts'],
    // }),
  }),
})

// Auto-generated hooks
export const { useGetProductsQuery } = productApi

// Possible exports

export const { endpoints, reducerPath, reducer, middleware } = productApi

// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.getPosts.initiate(), endpoints.getPosts.select(), endpoints.getPosts.useQuery()
// endpoints.addPost.initiate(), endpoints.addPost.select(), endpoints.addPost.useMutation()
// see `createApi` overview for _all exports_