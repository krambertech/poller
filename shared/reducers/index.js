import { combineReducers } from 'redux';

import createPoll from './createPoll';
import openedPoll from './openedPoll';
import createVote from './createVote';
import pollResults from './pollResults';

const rootReducer = combineReducers({
    createPoll,
    openedPoll,
    pollResults,
    createVote
});

export default rootReducer;
