import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
console.log(window.location.href)
export const apiSlice = createApi({
    // where we're keeping the data
    reducerPath: 'api',

    // how we're fetch
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1'
    }),
    endpoints(builder){
        return {
        fetchNavItems:builder.query({
            query(){
                return '/navItems'
            }
        }),
        fetchCarouselData:builder.query({
            query(){
                return "/sliderImages"
            }
        }),
        fetchProductsByCategory:builder.query({
            query(category){
                return `/products/${category}`
            }
        }),
        fetchProductById:builder.query({
            query(id){
                return `/product/${id}`
            }
        })
    }
    }
});
export const { useFetchNavItemsQuery,useFetchCarouselDataQuery,useFetchProductsByCategoryQuery,useFetchProductByIdQuery} = apiSlice;