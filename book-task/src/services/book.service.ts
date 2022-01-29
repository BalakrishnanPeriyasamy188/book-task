import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {

    apiUr: string = '';

    constructor(private http: HttpClient) {
        this.apiUr = 'http://openlibrary.org';
    }

    searchBook(query: string) {
        return this.http.get(this.apiUr + '/search.json?q=' + query);
    }

    getBookDetails(bookId: string) {
        return this.http.get(this.apiUr + '/books/' + bookId + '.json');
    }

}