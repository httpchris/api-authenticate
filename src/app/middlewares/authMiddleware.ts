import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokePayload {
  id: string;
  iat: number;
  exp: number; 
}

export default function authMiddleware(
  req: Request, res:Response, next:NextFunction
  ) {
  const { authorization } = req.headers;

  if(!authorization){
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer','').trim();

  try {
    const data = jwt.verify(token, 'example');

    const { id } = data as TokePayload;

    req.userId = id;

    return next();

  } catch {
    return res.sendStatus(401);
  }
}