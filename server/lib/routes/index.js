import Status from './Status';
import Polls  from './Polls';
import Votes  from './Votes';

export default function () {
    return {
        status : new Status(),
        polls  : new Polls(),
        votes  : new Votes()
    };
}
