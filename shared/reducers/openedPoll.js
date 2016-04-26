import * as apiResponseFormatter from '../utils/apiResponseFormatter';

import {
    LOAD_POLL_REQUEST,
    LOAD_POLL_SUCCESS,
    LOAD_POLL_FAIL
} from '../actions/polls';

const DEFAULT_STATE = { poll: null, error: null };

export default function openedPoll(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_POLL_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }

        case LOAD_POLL_SUCCESS: {
            return {
                ...state,
                error: null,
                poll: action.poll,
                isLoading: false
            };
        }

        case LOAD_POLL_FAIL: {
            return {
                ...state,
                error: action.error,
                poll: null,
                isLoading: false
            };
        }

        default: {
            return state;
        }
    }
}
