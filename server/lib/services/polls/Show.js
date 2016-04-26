import mongoose      from '../../mongoose';
import Base          from '../Base';

const Poll           = mongoose.model('Poll');

export default class Show extends Base {

    execute(data) {
        return this._findOnePoll(data.id);
    }

    async _findOnePoll(id) {
        const [ poll ] = await Poll.findQ({ _id: id });
        const preparedPoll = poll;

        return {
            question: preparedPoll.question,
            options: preparedPoll.options,
            _id: preparedPoll._id
        };
    }
}
