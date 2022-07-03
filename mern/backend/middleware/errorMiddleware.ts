import { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {
    const STATUS_CODE = res.statusCode ? res.statusCode : 500;
    res.status(STATUS_CODE);
    
    res.json({
        message: err.message, 
        stack: process.env.NODE_ENV ==="prod" ? null : err.stack
    })
}