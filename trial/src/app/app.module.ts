import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpClientComponent } from './components/sign-up-client/sign-up-client.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { routes } from './routes';
import { EnterAsBusinessComponent } from './components/enter-as-business/enter-as-business.component';
import { EnterAsClientComponent } from './components/enter-as-client/enter-as-client.component';
import { StartPageComponent } from "./components/start/start.component"
import { SearchByCityComponent } from './components/search/search-by-city/search-by-city.component';
import { SearchByBusinessNameComponent } from './components/search/search-by-business-name/search-by-business-name.component';
import { ShowFilterBusinessComponent } from './components/search/show-filter-business/show-filter-business.component';
import { SearchBusinessComponent } from './components/search/search-business/search-business.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { SignUpBOwnerComponent } from './components/sign-up-b-owner/sign-up-b-owner.component';
import { NewUserCertificateComponent } from './components/new-user-certificate/new-user-certificate.component';
import { SetUpComponent } from './components/set-up/set-up.component';
import { RegisterToBusinessComponent } from './components/register-to-business/register-to-business.component';
import { SetUpFirstDefinitionComponent } from './components/set-up-first-definition/set-up-first-definition.component';
import { BusinessHomePageComponent } from './components/business-home-page/business-home-page.component';
import { NotifyRegisterSuccededComponent } from './components/notify-register-succeded/notify-register-succeded.component';
import { ViewClientsToBusinessComponent } from './components/view-clients-to-business/view-clients-to-business.component';
import { BusinessHomePageForClientComponent } from './components/business-home-page-for-client/business-home-page-for-client.component';
import { TimesComponent } from './components/times/times.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpClientComponent,
    HomePageComponent,
    EnterAsBusinessComponent,
    EnterAsClientComponent,
    StartPageComponent,
    SearchByCityComponent,
    SearchByBusinessNameComponent,
    ShowFilterBusinessComponent,
    SearchBusinessComponent,
    ScheduleComponent,
    FilterPipe,
    NewPasswordComponent,
    SignUpBOwnerComponent,
    NewUserCertificateComponent,
    SetUpComponent,
    RegisterToBusinessComponent,
    SetUpFirstDefinitionComponent,
    BusinessHomePageComponent,
    NotifyRegisterSuccededComponent,
    ViewClientsToBusinessComponent,
    BusinessHomePageForClientComponent,
    TimesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
