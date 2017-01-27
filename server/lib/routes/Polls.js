import Base          from './Base';
import renderPromise from '../render';

export default class Polls extends Base {
    create(req, res) {
        const promise = this.run('polls/Create', {
            params:  req.body
        });

        renderPromise(req, res, promise);
    }

    show(req, res) {
        const params = {
            id: req.params.id
        };
        const promise = this.run('polls/Show', {
            params
        });

        renderPromise(req, res, promise);
    }

    result(req, res) {
        const params = {
            id: req.params.id
        };
        const promise = this.run('polls/GetResults', {
            params
        });

        renderPromise(req, res, promise);
    }
}
