import { HEIGHT, SCROLL, LOAD_COMPLETE, fetch_status} from './actions'
import { combineReducers } from 'redux'

function scroll(state = { toEnd: false, lastPosition: 0, scrollMax: 0}, action) {
    switch (action.type) {
        case SCROLL:
            if(action.position <= state.lastPosition) {
                return state
            } else {
                if(action.position >= (state.scrollMax - HEIGHT.COMPONENT_HEIGHT)) {
                    return {
                        ...state,
                        toEnd: true,
                        lastPosition: action.position
                    }
                } else {
                    return {
                        ...state,
                        lastPosition: action.position
                    }
                }
            }
        break;
        case LOAD_COMPLETE:
            return {
                ...state,
                toEnd: false,
                scrollMax: action.pageHeight
            }
        break;
        default:
            return state

    }
}


function fetchBooks(state={status: 'done', error: '', books: []}, action) {
    switch (action.type) {
        case fetch_status.FETCH_START:
            return {
                ...state,
                status: fetch_status.FETCH_START,
            }
        break;
        case fetch_status.FETCH_FAIL:
            return {
                ...state,
                status: fetch_status.FETCH_FAIL,
                error: action.error,
            }

        break;
        case fetch_status.FETCH_SUCCESS:
            return {
                ...state,
                status: fetch_status.FETCH_SUCCESS,
                books: state.books.concat(Object.values(action.response)),
            }
        break;
        default:
            return state
    }
}

const reducers = combineReducers({
    scroll,
    fetchBooks,
})


export default reducers