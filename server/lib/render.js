export default function renderPromise(req, res, promise) {
    return promise.then(data => {
        return res.send(Object.assign({}, data, { status: 1 }));
    }).catch(error => {
        console.error('REQUEST URL ',     req.url);
        console.error('REQUEST PARAMS: ', req.params);
        console.error('REQUEST BODY: ',   req.body);
        console.error('ERROR: ',          error.stack);
        console.error('-------------------');

        res.send({
            status: 0,
            error: {
                code:    'UNKNOWN_ERROR',
                message: 'Please, contact your system administartor!'
            }
        });
    });
}
