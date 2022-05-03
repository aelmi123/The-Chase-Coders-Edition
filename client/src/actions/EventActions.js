// import axios from 'axios'
// // import { EVENT_DETAILS_SAVE, EVENT_RECOMMENDATION_REQUEST, EVENT_RECOMMENDATION_SUCCESS, EVENT_RECOMMENDATION_FAIL } from '../Constants';



export const userInfo=(obj=>async(dispatch)=>{

    dispatch({
        type:"UserInfo",
        payload:obj

    })

})
export const selectedTopic=(obj=>async(dispatch)=>{
console.log("here is", obj)
    dispatch({
        type:"selectedTopic",
        payload:obj

    })

})

 
// export const Inc=(obj=>async(dispatch)=>{
//     console.log("chala",obj)

//     dispatch({

// type:"Inc",
// payload:obj

//     })

// })
// export const Total =(obj=>async(dispatch)=>{
//     {
//         dispatch({
//             type:"totalprice"
//         })
//     }
// })

// export const Dec=(obj)=>async(dispatch)=>{
//     console.log("chala",obj)
//     dispatch({
//         type:"Dec"
//         ,payload:obj
//     })
// }

// export const AC = (obj) => async (dispatch) => {


// dispatch({

//  type:"Addtocart",
//  payload:obj
    
//     })



// }
// export const RC = (obj) => async (dispatch) => {


//     dispatch({
    
//      type:"RemoveCart",
//      payload:obj
        
//         })
    
    
    
//     }

//     export const Increment=(obj)=>async(dispatch)=>{
        
//     }





// //     axios.get('https://jsonplaceholder.typicode.com/posts')
// //     .then(function (response) {
// //         console.log(response.data,"data")



// //         dispatch({

// //             type:"Loadingsuccess"

// //         })
// //         dispatch({
// //             type:"Data",
// //             payload:response.data
            
// //         });
// //     })
// //     .catch(function (error) {
// //       // handle error
// //       console.log(error);
// //       dispatch({

// //         type:"Loadingfailed"

// //     })
// //     })
   
   
    
  
// // }

// // export const vendorRecommendationAction = (obj) => async (dispatch) => {
// //     // console.log("i am action")
// //     dispatch({
// //         type: EVENT_RECOMMENDATION_REQUEST
// //     });
// //     try {
// //         const { data } = await Axios.post('https://recommendation-muntazim.herokuapp.com/recommendation', obj );
// //         // console.log('recommendations==>',data.a)
// //         dispatch({
// //             type: EVENT_RECOMMENDATION_SUCCESS,
// //             payload: data.a,
// //         })
// //     } catch (err) {
// //         // dispatch({
// //         //     type: EVENT_RECOMMENDATION_FAIL,
// //         //     payload: err.message,
// //         // })
// //     }
// // //     try {
// // //         const { data } = await Axios.post(`http://localhost:5000/event-info`, obj)  
// // //         dispatch({
// // //             type: SEARCH_EVENTS_SUCCESS,
// // //             payload: data,
// // //         });
// // //      } catch (err) {
// // //          console.log("error==>", err )
// // //      }
// // // }
