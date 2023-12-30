import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from './test-request/test-request.module';
import { Book } from './test-request/test-request-get/book.type';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ActionBarComponent,
    // MaxMinMeterComponent,
    SquareFlexComponent,
    HttpClientModule,
    TestRequestModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  value = 0;
  value2 = 'hi primeNG';
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';
  squareHeigh = 100;
  squarewidth = 250;
  activate = false;

  appCounter = 20;

  customerList: string[] = ['customer1', 'customer2', 'customer3', 'customer4'];

  constructor(private http: HttpClient) {}

  bookList: Book[] = [];

  ngOnInit(): void {}

  handleCalculateBuffet(priceBuffetInput: string) {
    this.value = (+priceBuffetInput * 3) / 4;
  }

  testNumberChange(value: number) {
    console.log('test number change from app action bar', value);
  }

  doAppMinChange(value: number) {
    console.log('test minchange event', value);
  }

  doAppMaxChange(value: number) {
    console.log('test maxchange event', value);
  }

  set100Width() {
    this.squarewidth = 100;
  }
  set300Width() {
    this.squarewidth = 300;
  }
  set500Width() {
    this.squarewidth = 500;
  }
  set100Hight() {
    this.squareHeigh = 100;
  }
  set300Hight() {
    this.squareHeigh = 300;
  }
  set500Hight() {
    this.squareHeigh = 500;
  }

  handelPushCustomer() {
    this.customerList.push(`customer  ${this.customerList.length + 1}`);
  }

  handelUnshiftCustomer() {
    this.customerList.unshift(`customer  ${this.customerList.length + 1}`);
  }

  handelRemoveCustomer(index: number) {
    this.customerList.splice(index, 1);
  }

  searchBookList(keyword: string) {
    this.http
      .get<Book[]>(
        `https://www.anapioficeandfire.com/api/books?name=` + keyword
      )
      .subscribe((response) => {
        console.log('response =>', response);

        this.bookList = response;
      });
  }
}
