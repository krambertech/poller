import expect from 'expect';
import { formatVote } from './../../../shared/utils/apiResponseFormatter';
import reducer from './../../../shared/reducers/createVote';
import * as ActionTypes from './../../../shared/actions/votes';

describe('createVote reducer', () => {
    it('should return state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({ createdVote: null, error: null });
    });

    it('should handle CREATE_VOTE_REQUEST', () => {
        expect(
          reducer([], {
              type: ActionTypes.CREATE_VOTE_REQUEST
          })
        ).toEqual({ createdVote: null });
    });

    it('should handle CREATE_VOTE_SUCCESS', () => {
        const createdVote = { question: '11', options: [1, 2, 3] };

        expect(
          reducer([], {
              type: ActionTypes.CREATE_VOTE_SUCCESS,
              createdVote
          })
        ).toEqual({
            error: null,
            createdVote: formatVote(createdVote)
        });
    });

    it('should handle CREATE_VOTE_FAIL', () => {
        const error = { status: 403 };

        expect(
          reducer([], {
              type: ActionTypes.CREATE_VOTE_FAIL,
              error
          })
        ).toEqual({
            error,
            createdVote: null
        });
    });
});
