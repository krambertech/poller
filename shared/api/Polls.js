import Base from './Base';

export default class PollsAPI extends Base {
    create(data) {
        return this.apiClient.post('polls', data);
    }

    show(id, params) {
        return this.apiClient.get(`polls/${id}`, {}, params);
    }

    results(id, params) {
        return this.apiClient.get(`polls/${id}/results`, {}, params);
    }
}
