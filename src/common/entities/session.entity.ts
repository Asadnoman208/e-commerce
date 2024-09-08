import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Session extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: string;

    @Prop({ required: true, default: Date.now })
    loggedInTime: Date;

    @Prop({ required: true, default: false })
    isExpired: boolean;

    @Prop({ required: true })
    jwtToken: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
