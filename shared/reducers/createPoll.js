import * as apiResponseFormatter from '../utils/apiResponseFormatter';

import {
    CREATE_POLL_SUCCESS,
    CREATE_POLL_FAIL,
    CREATE_POLL_REQUEST
} from '../actions/polls';

const DEFAULT_STATE = {};

export default function createPoll(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case CREATE_POLL_SUCCESS: {
            return {
                ...state
            };
        }

        case CREATE_POLL_FAIL: {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }
}
