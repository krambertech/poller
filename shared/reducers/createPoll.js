import { formatPoll } from '../utils/apiResponseFormatter';

import {
    CREATE_POLL_SUCCESS,
    CREATE_POLL_FAIL,
    CREATE_POLL_REQUEST
} from '../actions/polls';

const DEFAULT_STATE = { createdPoll: null, isLoading: false, error: null };

export default function createPoll(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case CREATE_POLL_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }

        case CREATE_POLL_SUCCESS: {
            return {
                ...state,
                error: null,
                createdPoll: formatPoll(action.createdPoll),
                isLoading: false
            };
        }

        case CREATE_POLL_FAIL: {
            return {
                ...state,
                error: action.error,
                createdPoll: null,
                isLoading: false
            };
        }

        default: {
            return state;
        }
    }
}
