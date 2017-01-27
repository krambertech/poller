import Base          from './Base';
import renderPromise from '../render';

export default class Polls extends Base {
    polls(req, res) {
        const promise = this.run('users/UpdateHints', {
            session: req.session,
            params:  req.body
        });

        renderPromise(req, res, promise);
    }
}
