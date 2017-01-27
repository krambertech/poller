import Base        from '../Base';
import mongoose    from '../../mongoose';

const Poll = mongoose.model('Poll');

export default class Create extends Base {

    async execute(data) {
        const pollData = {
            question: data.question,
            options: data.options
        };

        const poll = new Poll(pollData);
        const savedPoll = await poll.saveQ();

        return {
            question: savedPoll.question,
            options: savedPoll.options,
            _id: savedPoll._id
        };
    }
}
