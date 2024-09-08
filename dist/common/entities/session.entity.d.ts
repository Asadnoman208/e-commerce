import { Document } from 'mongoose';
export declare class Session extends Document {
    userId: string;
    loggedInTime: Date;
    isExpired: boolean;
    jwtToken: string;
}
export declare const SessionSchema: import("mongoose").Schema<Session, import("mongoose").Model<Session, any, any, any, Document<unknown, any, Session> & Session & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Session, Document<unknown, {}, import("mongoose").FlatRecord<Session>> & import("mongoose").FlatRecord<Session> & Required<{
    _id: unknown;
}>>;
