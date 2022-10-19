import { Message } from "src/app/model/message.model";

//declaration of all the actions of the state

//action to add a message to the list of the conversation
export class AddNewMessage {
    static readonly type = '[ConversationState] Add new Message';
    constructor(public newMessage: Message) {}
}
