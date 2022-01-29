import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  bookList: any;

  searchText: string = '';
  showBookDetails = false;
  bookId = '';

  constructor(private bookSvc: BookService,
    private spinner: NgxSpinnerService) { }

  getBooks() {
    if (!this.searchText) {
      return
    }
    this.spinner.show();
    this.bookSvc
      .searchBook(this.searchText)
      .subscribe((s) => {
        this.spinner.hide();
        this.bookList = s as any;
      }, err => {
        this.spinner.hide();
      })
  }

  viewBookDetails(book: any) {
    if (!book.cover_edition_key) {
      alert('Book id not found');
      return;
    }

    this.bookId = book.cover_edition_key
    this.showBookDetails = !this.showBookDetails;
  }

  clear() {
    this.searchText = null as any;
    this.bookList = null;
  }

  showListPage() {
    this.showBookDetails = false;
  }

}
