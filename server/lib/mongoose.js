
const mongoose   = require('mongoose-q')(require('mongoose'));
const dbPort     = '27017';
const dbHost     = 'localhost';
const dbName     = 'poller';
const dbTestName = 'poller_test';
const ObjectId   = mongoose.Types.ObjectId;

const url = `mongodb://${dbHost}:${dbPort}/${(process.env.TEST_MODE ? dbTestName : dbName)}`;

mongoose.connect(url);

import './models/Poll';
import './models/Vote';

mongoose.Model.findByIdQ = function findByIdQ(id) {
    return this.findQ({ _id: new ObjectId(id) }, null, { limit: 1 }).then(docs => {
        const doc = docs[0];

        return doc;
    });
};

export default mongoose;
