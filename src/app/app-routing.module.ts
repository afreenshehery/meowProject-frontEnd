import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RecordComponent } from './record/record.component';
import { RetryComponent } from './retry/retry.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'record' },
  {
    path: 'record',
    component: RecordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'otp',
    component: OtpComponent,
  },

  {
    path: 'thanks',
    component: ThankYouComponent,
  },

  {
    path: 'opps',
    component: RetryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
