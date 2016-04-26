import { appRootUrl } from '../config';

export function formatPoll(poll) {
    return {
        id: poll._id,
        question: poll.question,
        options: poll.options,
        link: `${appRootUrl}/polls/${poll._id}`
    };
}

export function formatPollResults(poll) {
    return {
        ...formatPoll(poll),
        results: poll.results
    };
}

export function formatVote(vote) {
    return {
        id: vote._id,
        pollId: vote.pollId,
        selectedOption: vote.selectedOption
    };
}
