import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PollSchema = new Schema({
    question   : { type: String, required: true },
    options    : { type: Array, default: [] },
    createdAt  : { type: Date, default: new Date() }
});

mongoose.model('Poll', PollSchema);
