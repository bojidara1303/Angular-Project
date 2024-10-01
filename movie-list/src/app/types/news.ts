import { User } from "./user"

export interface News {
    _ownerId: User,
    _id: string,
    heading: string,
    content: string
}