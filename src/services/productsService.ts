import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from './types'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<[typeof Product], void>({
      query: () => `products`,
    }),
    getProductById: builder.query<typeof Product, string>({
      query: (id) => `products/${id}`,
    }),
    getProductByCategory: builder.query<[], string>({
      query: (category) => `products/category/${category}`,
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
        invalidatesTags: ["Products"]
      }),
    })
  }),
})

export const { useGetProductByIdQuery, useGetProductsQuery, useCreateProductMutation, useDeleteProductMutation, useGetProductByCategoryQuery } = productsApi