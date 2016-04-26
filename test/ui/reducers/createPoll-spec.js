import expect from 'expect';
import { formatPoll } from './../../../shared/utils/apiResponseFormatter';
import reducer from './../../../shared/reducers/createPoll';
import * as ActionTypes from './../../../shared/actions/polls';

describe('createPoll reducer', () => {
    it('should return state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({ createdPoll: null, error: null, isLoading: false });
    });

    it('should handle CREATE_POLL_REQUEST', () => {
        expect(
          reducer([], {
              type: ActionTypes.CREATE_POLL_REQUEST
          })
        ).toEqual({ isLoading: true });
    });

    it('should handle CREATE_POLL_SUCCESS', () => {
        const createdPoll = { question: '11', options: [1, 2, 3] };

        expect(
          reducer([], {
              type: ActionTypes.CREATE_POLL_SUCCESS,
              createdPoll
          })
        ).toEqual({
            error: null,
            createdPoll: formatPoll(createdPoll),
            isLoading: false
        });
    });

    it('should handle CREATE_POLL_FAIL', () => {
        const error = { status: 403 };

        expect(
          reducer([], {
              type: ActionTypes.CREATE_POLL_FAIL,
              error
          })
        ).toEqual({
            error,
            createdPoll: null,
            isLoading: false
        });
    });
});
