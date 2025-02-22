import { JwtPayload } from 'jsonwebtoken';

export interface CustomJwtPayload extends JwtPayload {
  userEmail: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user: CustomJwtPayload;
    }
  }
}
