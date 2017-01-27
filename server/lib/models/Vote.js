import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    pollId         : { type: 'ObjectId', required: true },
    selectedOption : { type: Number, required: true }
});

mongoose.model('Vote', VoteSchema);
