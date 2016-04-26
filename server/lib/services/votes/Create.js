import Base        from '../Base';
import mongoose    from '../../mongoose';
const ObjectId   = mongoose.Types.ObjectId;
const Vote = mongoose.model('Vote');

export default class Create extends Base {

    async execute(data) {
        const voteData = {
            pollId: ObjectId(data.pollId),
            selectedOption: data.selectedOption
        };

        const vote = new Vote(voteData);
        const savedVote = await vote.saveQ();

        return {
            pollId: savedVote.pollId,
            selectedOption: savedVote.selectedOption,
            _id: savedVote._id
        };
    }
}
