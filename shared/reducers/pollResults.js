import { formatPollResults } from '../utils/apiResponseFormatter';

import {
    LOAD_POLL_RESULTS_REQUEST,
    LOAD_POLL_RESULTS_SUCCESS,
    LOAD_POLL_RESULTS_FAIL
} from '../actions/polls';

const DEFAULT_STATE = { poll: null, error: null };

export default function pollResults(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_POLL_RESULTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }

        case LOAD_POLL_RESULTS_SUCCESS: {
            return {
                ...state,
                error: null,
                poll: formatPollResults(action.poll),
                isLoading: false
            };
        }

        case LOAD_POLL_RESULTS_FAIL: {
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
