import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  @Input() bookId = '';
  @Output()
  public onClose = new EventEmitter();

  book: any = <any>{};

  constructor(private bookSvc: BookService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.bookSvc
      .getBookDetails(this.bookId)
      .subscribe((s) => {
        this.spinner.hide();
        this.book = s as any;
      });
  }

  close() {
    this.onClose.emit();
  }

}
