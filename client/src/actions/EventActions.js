// import axios from 'axios'
// import {useSelector} from 'react-redux'

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
export const getTopicId = (topic) => {
    switch(topic){
        case 'General Knowledge':
            return 9
        case 'Film':
            return 11
        case 'Music':
            return 12
        case 'Television':
            return 14
        case 'Video Games':
            return 15
        case 'Sports':
            return 21
        case 'Celebrities':
            return 26
        case 'Animals':
            return 27
        default:
            return ''
    }
}

//  export const GetQuestions = async() => {
//     const UserDetails = useSelector(state=>state.UserDetails)
//     const selectedTopic = useSelector(state => state.selectedTopic)
//     const {difficulty}= UserDetails
//     const {questions} = UserDetails 
//     return async dispatch => {
//     const topicId = getTopicId(selectedTopic)
//     const { data } = await axios.get(`https://opentdb.com/api.php?amount=${questions}&category=${topicId}&difficulty=${difficulty}&type=multiple`)
//     console.log(data)
//     dispatch(data)
//     }
//  }
