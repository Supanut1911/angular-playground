import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRequestGetComponent } from './test-request-get/test-request-get.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestRequestGetComponent,
    HttpClientModule,
    CommonModule,
  ],
  exports: [TestRequestGetComponent],
})
export class TestRequestModule {}
