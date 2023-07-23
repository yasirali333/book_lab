import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const userApiHeaders={
 
   'Request':'GET',
    'Content-Type':'application/json',
    'x-api-key':'#b0@6hX8YasCq6^unOaPw1tqR'
  
}

const baseUrl = 'https://books-list-api.vercel.app';




const  createRequest = (url:any) => ({
url , headers: userApiHeaders
})

export const userApi = createApi({
  reducerPath: "userApi",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl}),
  //   // baseUrl: "https://jsonplaceholder.typicode.com/",
  //   baseUrl: " https://books-list-api.vercel.app/books",
  // }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query:()=> createRequest('/books')

})}),
  //   
  //   }),
    // getUserByTitle: builder.query<User, { tilte: string }>({
    //   query: ({ title }) => `users/${title}`,
    // }),
  // }),
});

export const { useGetUsersQuery  } = userApi;
