import { Request, Response } from "express";

export type ExpressFunc = (req: Request, res: Response) => void;
export type ControllerFunc = (httpReq: HTTPRequest) => HTTPResponse;
interface ExpressCallback {
    handleRequest(): ExpressFunc;
}

export interface HTTPRequest {
    body: any,
    query: any,
    params: any,
    ip: any,
    method: any,
    path: any,
    headers: any
}

export interface HTTPResponse {
    headers: any,
    statusCode: number,
    body: any,
}

class ExpressCallbackImpl implements ExpressCallback {
    controller: ControllerFunc;
    constructor(controller: ControllerFunc) {
        this.controller = controller;
    }
    handleRequest(): ExpressFunc {
        return (req: Request, res: Response) => {
            const httpReq: HTTPRequest = {
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
            }
            try {
                const response: HTTPResponse = this.controller(httpReq);
                res.set(response.headers);
                res.type('json');
                res.status(response.statusCode).send(response.body);
            } catch (error) {
                res.status(500).send({ error: "Server internal sedang error bang" })
            }
        };
    }

}

export default function makeExpressCallback(controller: ControllerFunc): ExpressCallback {
    return new ExpressCallbackImpl(controller);
}