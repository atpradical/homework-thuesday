import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

// export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = state.map(el => el)
            if (action.payload === 'up') {
                stateCopy.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    } else if (a.name === b.name) {
                        return 0
                    } else {
                        return -1
                    }
                })
            }
            if (action.payload === 'down') {
                stateCopy.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1
                    } else if (a.name === b.name) {
                        return 0
                    } else {
                        return -1
                    }
                })
            }

            return stateCopy
            // return state // need to fix
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
            // return state // need to fix
        }
        default:
            return state
    }
}
