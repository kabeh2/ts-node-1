declare namespace Express {
  type NewType = import('../../interfaces/IUserDocument').IUserDocument;

  export interface Request {
    token: string;
    user: NewType;
  }
}
