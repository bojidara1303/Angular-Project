import { User } from "./user"

export interface Quote {
    _ownerId: User,
    _id: string,
    imageUrl: string,
    quote: string,
    movie: string
}

export interface QuoteToEdit {
    imageUrl: string,
    quote: string,
    movie: string
}