
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
UserDetails:{
    name: null,
    players: null,
    difficulty: null,
    questions: null,
    room: null,
    score: null
}

}
export const EventReducers = (state= initialState, action)=>{
  
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

    default:
        return state

}

}
