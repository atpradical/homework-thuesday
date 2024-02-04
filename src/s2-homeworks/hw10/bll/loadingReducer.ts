const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): any => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

export type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export type LoadingStateType = {
    isLoading: boolean
}


