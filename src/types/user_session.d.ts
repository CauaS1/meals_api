import { Session } from 'express-session';

declare module 'express-session' {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      photo: string;
    }
  }
}