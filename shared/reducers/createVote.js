import { formatVote } from '../utils/apiResponseFormatter';

import {
    CREATE_VOTE_SUCCESS,
    CREATE_VOTE_FAIL,
    CREATE_VOTE_REQUEST
} from '../actions/votes';

const DEFAULT_STATE = { createdVote: null, error: null };

export default function createPoll(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case CREATE_VOTE_REQUEST: {
            return {
                ...state,
                createdVote: null
            };
        }

        case CREATE_VOTE_SUCCESS: {
            return {
                ...state,
                error: null,
                createdVote: formatVote(action.createdVote)
            };
        }

        case CREATE_VOTE_FAIL: {
            return {
                ...state,
                error: action.error,
                createdVote: null
            };
        }

        default: {
            return state;
        }
    }
}
