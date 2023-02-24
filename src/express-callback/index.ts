
type ExpressFunc = (req: Request, res: Response) => void;

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
    controller: any;
    constructor(controller: any) {
    this.controller = controller;    
    }
    handleRequest(): ExpressFunc {
        return (req: Request, res: Response) => {
            // const httpRequest
        };
    }
    
}

export default function makeExpressCallback(controller: any): ExpressCallback {
    return new ExpressCallbackImpl(controller);
}