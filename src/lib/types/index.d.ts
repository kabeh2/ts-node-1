declare namespace Express {
  type NewType = import('../db/models/IUserDocument.interface').IUserDocument;

  interface Request {
    token: string;
    user: NewType;
  }
}
