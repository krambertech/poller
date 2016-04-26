import Base from './Base';

export default class VotesAPI extends Base {
    create(data) {
        return this.apiClient.post('votes', data);
    }

    show(id, params) {
        return this.apiClient.get(`votes/${id}`, {}, params);
    }
}
