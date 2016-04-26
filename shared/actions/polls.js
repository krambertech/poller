import api from '../apiSingleton';

export const CREATE_POLL_SUCCESS    = 'CREATE_POLL_SUCCESS';
export const CREATE_POLL_FAIL       = 'CREATE_POLL_FAIL';
export const CREATE_POLL_REQUEST    = 'CREATE_POLL_REQUEST';

export const LOAD_POLL_REQUEST = 'LOAD_POLL_REQUEST';
export const LOAD_POLL_SUCCESS = 'LOAD_POLL_SUCCESS';
export const LOAD_POLL_FAIL    = 'LOAD_POLL_FAIL';

export const LOAD_POLL_RESULTS_REQUEST = 'LOAD_POLL_RESULTS_REQUEST';
export const LOAD_POLL_RESULTS_SUCCESS = 'LOAD_POLL_RESULTS_SUCCESS';
export const LOAD_POLL_RESULTS_FAIL    = 'LOAD_POLL_RESULTS_FAIL';

export function createPoll(pollData) {
    console.log('createPoll !!!!!!');

    return dispatch => {
        dispatch({
            type: CREATE_POLL_REQUEST
        });

        return api.polls.create(pollData).then(data =>
            dispatch({
                createdPoll: data,
                type: CREATE_POLL_SUCCESS
            })
        );
    };
}

export function loadPoll(params = {}) {
    return dispatch => {
        dispatch({
            type: LOAD_POLL_REQUEST
        });

        return api.polls.show(params.id).then(data =>
            dispatch({
                poll: data,
                type: LOAD_POLL_SUCCESS
            })
        );
    };
}

export function loadPollResults(params = {}, query = {}) {
    return dispatch => {
        dispatch({
            type: LOAD_POLL_RESULTS_REQUEST
        });

        return api.polls.results(params.id).then(data =>
            dispatch({
                poll: data,
                type: LOAD_POLL_RESULTS_SUCCESS
            })
        );
    };
}
