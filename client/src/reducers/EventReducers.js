
const initialState={

Topics:[
    {name:"General Knowledge",color:"secondary" },
    {name:"Film", color:"primary"},
    {name:"Music", color:"info"},
    {name:"Television",color:"success"},
    {name:"Video Games" ,color:"info"},
    {name:"Animals",color:"success"},
    {name:"Celebrities",color:"white"},
    {name:"Sports", color:"success"},
    {name:"locked" ,color:"danger"},
    {name:"locked", color:"danger"},
    {name:"locked", color:"danger"},
    {name:"locked", color:"danger"},
],
selectedTopic:null,
score: null,
UserDetails:{
    name: null,
    players: null,
    difficulty: null,
    questions: 20,
    room: null,
    
}

}
export const EventReducers = (state= initialState, action)=>{
  
switch(action.type){

    case "USER_INFO":
        return{
            ...state,
            UserDetails:action.payload
        }
    case "SELECTED_TOPIC":
        return{
            ...state,
            selectedTopic:action.payload
        }
    case "UPDATE_SCORE":
        return{
            ...state,
            score:action.payload
        }

    default:
        return state

}

}
