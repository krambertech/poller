/* eslint max-params:0 */

import services  from '../services';
import _         from 'lodash';

export default class Base {

    constructor() {
    }

    log() {
    }

    run(actionName, args) {
        const actionPath = actionName.split('/');
        const context    = _.cloneDeep(args.session && args.session.context ? args.session.context : {});

        return new services[actionPath[0]][actionPath[1]]({
            context
        }).run(args.params)(args.params).then(result => {
            return result;
        });
    }
}
