const initState = {
    themeId: 1,
}

export const themeReducer = (state : StateType = initState , action: ActionsTypes): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID' :
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any

//types
export type StateType = typeof initState
export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
type ActionsTypes = ChangeThemeIdType
