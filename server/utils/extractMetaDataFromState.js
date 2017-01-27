export default function extractMetaDataFromState({ route, state }) {
    if (route === '/polls/:id') {
        const { question } = state.openedPoll.poll.question;

        return {
            title: question,
            siteName: 'Poller',
            description: 'Vote for this question!'
        };
    }

    return {
        title: 'Poller - polls made easy',
        siteName: 'Poller',
        image: 'http://www.cwfa.org/wp-content/uploads/2015/04/poll-box.png',
        description: 'Create an amazing poll!'
    };
}
