import mongoose      from '../../mongoose';
import Base          from '../Base';

const Poll           = mongoose.model('Poll');
const Vote           = mongoose.model('Vote');

export default class Show extends Base {

    execute(data) {
        return this._findOnePoll(data.id);
    }

    async _findOnePoll(id) {
        const [ poll ] = await Poll.findQ({ _id: id });
        const votes = await Vote.findQ({ pollId: id });
        const preparedPoll = poll;

        const options = {};

        poll.options.forEach((opt, index) => {
            options[String(index)] = 0;
        });
        votes.forEach(opt => {
            options[String(opt.selectedOption)]++;
        });

        return {
            question: preparedPoll.question,
            options: preparedPoll.options,
            results: options,
            _id: preparedPoll._id
        };
    }
}
