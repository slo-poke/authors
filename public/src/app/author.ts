import { Quotes } from './quotes';

export interface Author {
    _id?: string;
    name: string;
    quotes: [Quotes];
}
