import {Schema, model} from 'mongoose';

export interface Portfoliouser{
    firstName:string;
    lastName:string;
    email: string;
    phone:string;
    message:string;
}

export const UserSchema = new Schema<Portfoliouser>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String, required: true},
}, {
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const portfolioModel = model<Portfoliouser>('portfoliousers', UserSchema);