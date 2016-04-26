export default class Base {

    constructor() {
    }

    run() {
        return this.execute.bind(this);
    }
}
