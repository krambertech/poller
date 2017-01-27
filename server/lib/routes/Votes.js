import Base          from './Base';
import renderPromise from '../render';

export default class Votes extends Base {
    create(req, res) {
        const promise = this.run('votes/Create', {
            params:  req.body
        });

        renderPromise(req, res, promise);
    }

    show(req, res) {
        const params = {
            id: req.params.id
        };
        const promise = this.run('votes/Show', {
            params
        });

        renderPromise(req, res, promise);
    }
}
