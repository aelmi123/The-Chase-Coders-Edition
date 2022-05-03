
export const UserInfo=(state={

Topics:[
    {name:"Topic 1",color:"secondary" },
    {name:"Topic 2", color:"primary"},
    {name:"Topic 3", color:"info"},
    {name:"Topic 4",color:"success"},
    {name:"Topic 5" ,color:"info"},
    {name:"Topic 6",color:"success"},
    {name:"Topic 7",color:"white"},
    {name:"Topic 8", color:"success"},
    {name:"locked" ,color:"danger"},
    {name:"locked", color:"danger"},
    {name:"locked", color:"danger"},
    {name:"locked", color:"danger"},
],
selectedTopic:null,
UserDetails:{
    name: null,
    players: null,
    difficulty: null,
    questions: null
}


},action)=>{
  

switch(action.type){

    
    case "UserInfo":


    return{


        ...state,
        UserDetails:action.payload

    }




    case "selectedTopic":


        return{
    
    
            ...state,
            selectedTopic:action.payload
    
        }
    



    



default:return state


}








// export const Data = (state = {  Data: [] , loading:true}, action) => {
// console.log(action.payload,"I am reducer")
//     switch (action.type) {
//         case 'Data':
//             return {
//                ...state,
//                Data:action.payload
//             };

//             case 'Loadingsuccess':
//             return {
//                ...state,
//                loading:false
//             };
//             case 'Loadingfailed':
//                 return {
//                    ...state,
//                    loading:true
                   
//                 };
            
           


       
//         default:
//             return state;
//     }
    




    
// };
}
