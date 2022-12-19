import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecordComponent } from './record/record.component';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RetryComponent } from './retry/retry.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RecordComponent, OtpComponent, ThankYouComponent, RetryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOtpInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
