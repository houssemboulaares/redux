const initialState={
    count:0



}
const CountReducers=(state=initialState,action)=>{
    

    switch(action.type){
        case "INCREMENT":return {...state,count:state.count+1}
        case 'DECRIMENT':return{...state,count:state.count-1}
        default:return state
    }
}
export default CountReducers