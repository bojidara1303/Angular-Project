import { User } from "./user";

export interface Movie {
    _ownerId: User,
    cover: string,
    title: string,
    genre: string,
    year: number,
    cast: string,
    director: string,
    duration: number,
    summary:  string,
    _id: string
}