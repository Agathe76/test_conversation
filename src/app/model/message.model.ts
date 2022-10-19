import { ConversationUser } from "./conversation-user.model";

export interface Message {
    writer: ConversationUser,
    content: string,
    date: Date
}