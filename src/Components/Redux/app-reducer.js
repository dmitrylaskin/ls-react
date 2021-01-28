let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {currentPage: 'home'}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state


    }
}

export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})

export default appReducer;
