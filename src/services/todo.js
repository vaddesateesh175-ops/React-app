// import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const todoApi=createApi({
//   reducerPath:'todoApi',
//   baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/todos"}),
//   endpoints:(builder)=>({
//     getAllTodos: builder.query({
//       query: () => `/`,
//     }),
//     deleteTodo:builder.mutation({
//     query:(id)=>{
//       return{
//          url:`/${id}`,
//          method:"DELETE",
//      }
//     }
   
//    }),

//    addTodo:builder.mutation({
//     query:(ntd)=>{
//       return{
//         url:"/",
//         method:"POST",
//         body:{
//           title: ntd,
//           status:"not completed",
//         },
//       }  
//      }
//    })
//   }),
  
  
// })
// export const { useGetAllTodosQuery ,useDeleteTodoMutation , useLazyGetAllTodosQuery,useAddTodoMutation} = todoApi