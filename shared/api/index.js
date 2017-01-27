import ApiClient from './ApiClient';
import PollsAPI  from './Polls';
import VotesAPI  from './Votes';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        polls : new PollsAPI({ apiClient: api }),
        votes : new VotesAPI({ apiClient: api })
    };
}
