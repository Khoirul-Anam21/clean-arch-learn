"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpressCallbackImpl {
    constructor(controller) {
        this.controller = controller;
    }
    handleRequest() {
        return (req, res) => {
            const httpReq = {
                body: req.body,
                query: req.params,
                ip: req.ip,
                method: req.method,
                path: req.path,
                headers: {
                    'Content-Type': req.get('Content-Type'),
                    Referer: req.get('referer'),
                    'User-Agent': req.get('User-Agent'),
                },
                params: req.params
            };
            try {
                const response = this.controller(httpReq);
                res.set(response.headers);
                res.type('json');
                res.status(response.statusCode).send(response.body);
            }
            catch (error) {
                res.status(500).send({ error: "Server internal sedang error bang" });
            }
        };
    }
}
function makeExpressCallback(controller) {
    return new ExpressCallbackImpl(controller);
}
exports.default = makeExpressCallback;
