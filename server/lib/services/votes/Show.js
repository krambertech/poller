import mongoose      from '../../mongoose';
import Base          from '../Base';

const Vote           = mongoose.model('Vote');

export default class Show extends Base {

    execute(data) {
        return this._findOnePoll(data.id);
    }

    async _findOnePoll(id) {
        const [ vote ] = await Vote.findQ({ _id: id });
        const preparedVote = vote;

        return {
            pollId: preparedVote.pollId,
            selectedOption: preparedVote.selectedOption,
            _id: preparedVote._id
        };
    }
}
