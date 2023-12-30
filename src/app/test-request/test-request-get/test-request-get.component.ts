import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './book.type';
@Component({
  selector: 'app-test-request-get',
  standalone: true,
  imports: [],
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.css',
})
export class TestRequestGetComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Book[]>('https://www.anapioficeandfire.com/api/books')
      .subscribe((response) => {
        this.bookList = response;
      });
  }
}
