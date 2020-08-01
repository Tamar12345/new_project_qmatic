import { Time } from "@angular/common";

enum eState { busy, free, clientCanceled, businessCancele };

export const states = {
    0: 'Busy',
    1: 'Free',
    2: 'clientCanceled',
    3: 'businessCanceled',

    busy: 1,
    free: 1,
    clientCanceled: 2,
    businessCanceled: 3
};

export class schedule {
    Date: Date;
    StartHour: Time;
    EndHour: Time;
    State: number;
    ClassState: string;
    clientId: string;
}