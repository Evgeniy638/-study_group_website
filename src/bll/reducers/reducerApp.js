const TOGGLE_INTERNET_ERROR = "TOGGLE_INTERNET_ERROR"

const initialState = {
     hasInternetError: false,
     textError: undefined
}

const reducerApp = (state = initialState, action) => {
     switch (action.type) {
          case TOGGLE_INTERNET_ERROR:
               return {
                    ...state,
                    hasInternetError: action.hasInternetError,
                    textError: action.textError
               }
          default:
               return state
     }
}

export default reducerApp

export const toggleInternetErrorActionCreator = (hasInternetError, textError) => ({
     type: TOGGLE_INTERNET_ERROR,
     hasInternetError,
     textError
})
