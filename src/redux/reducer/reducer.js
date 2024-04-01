let initialState = {
    contactList:[],
    searchName:"",
}
const reducer = (state =initialState,action) =>{
    const {type,payload} = action
    switch(type){
        case "ADD_USER_INFO":
            return {
                ...state, 
                contactList:[...state.contactList,
                    {
                        name:payload.name,
                        phoneNumber:payload.phoneNumber,
                        nickName:payload.nickName
                    },
                ],
            };
        case "SEARCH_NAME":
            
            return {...state,searchName:payload.searchName}
            
        default:
            return {...state};
        }
}



export default reducer