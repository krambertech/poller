import api from '../apiSingleton';

export const CREATE_VOTE_SUCCESS    = 'CREATE_VOTE_SUCCESS';
export const CREATE_VOTE_FAIL       = 'CREATE_VOTE_FAIL';
export const CREATE_VOTE_REQUEST    = 'CREATE_VOTE_REQUEST';

export function createVote({ pollId, selectedOption }) {
    console.log('create VOTE !!!!!!');

    return dispatch => {
        dispatch({
            type: CREATE_VOTE_REQUEST
        });

        return api.votes.create({ pollId, selectedOption }).then(data =>
            dispatch({
                createdVote: data,
                type: CREATE_VOTE_SUCCESS
            })
        );
    };
}
