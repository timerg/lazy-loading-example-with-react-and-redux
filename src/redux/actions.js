
// 12 items with size: 250 * 250
// at most 4 in a line
const HEIGHT = {
    // The Height the page gained after a single loading (min)
    COMPONENT_HEIGHT: 750
}


const SCROLL = 'SCROLL'
const LOAD_COMPLETE = 'LOAD_COMPLETE'

const FETCH_POSTS = 'FETCH_POSTS'

const fetch_status = {
    FETCH_FAIL: 'fetch_fail',
    FETCH_SUCCESS: 'fetch_success',
    FETCH_START: 'fetch_start'
}

function scroll(position) {
    return {type: SCROLL, position}
}

// pageHeight: height after new item is loaded
function loadComplete(pageHeight) {
    return {type: LOAD_COMPLETE, pageHeight}
}


//
function asyncFetchBooks() {
    return function (dispatch) {
        dispatch(fetchBooksStart())
        return myFetchFunc().then(
            res => JSON.parse(res),
            error => {
                console.log('An error occurred.', error)
                return dispatch(fetchBooksFail(error))
            }
        ).then (
            json => dispatch(fetchBooksSuccess(json)),
            error => {
                console.log('An error occurred.', error)
                return dispatch(fetchBooksFail(error))
            }
        )

    }
}

// Function mocking async function such as fetch
function myFetchFunc() {
    return (
        new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(JSON.stringify({
                    A: 1, B: 2, C: 3, D:4, E:5, F:6, G:7, H:8, I:9, J:10, K:11, L:12
                }));
            }, 500);
        })
    )
}



function fetchBooksStart() {
    return { type: fetch_status.FETCH_START}
}

function fetchBooksSuccess(json) {
    return { type: fetch_status.FETCH_SUCCESS, response: json }
}

function fetchBooksFail(error) {
    return { type: fetch_status.FETCH_FAIL, error: error }
}








export { HEIGHT, SCROLL, LOAD_COMPLETE, fetch_status,
        scroll, loadComplete,
        asyncFetchBooks, fetchBooksStart, fetchBooksSuccess}
