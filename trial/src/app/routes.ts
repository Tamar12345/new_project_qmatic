import { Routes } from "@angular/router";
import { SignUpClientComponent } from "./components/sign-up-client/sign-up-client.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { EnterAsBusinessComponent } from "./components/enter-as-business/enter-as-business.component";
import { EnterAsClientComponent } from "./components/enter-as-client/enter-as-client.component";
import { StartPageComponent } from "./components/start/start.component"
import { Component } from "@angular/core";
import { ShowFilterBusinessComponent } from "./components/search/show-filter-business/show-filter-business.component";
import { SearchBusinessComponent } from "./components/search/search-business/search-business.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { NewPasswordComponent } from "./components/new-password/new-password.component";
import { SignUpBOwnerComponent } from "./components/sign-up-b-owner/sign-up-b-owner.component";
import { NewUserCertificateComponent } from "./components/new-user-certificate/new-user-certificate.component";
import { RegisterToBusinessComponent } from "./components/register-to-business/register-to-business.component";
import { BusinessHomePageComponent } from "./components/business-home-page/business-home-page.component";
import { SetUpFirstDefinitionComponent } from "./components/set-up-first-definition/set-up-first-definition.component";
import { NotifyRegisterSuccededComponent } from "./components/notify-register-succeded/notify-register-succeded.component";
import { ViewClientsToBusinessComponent } from "./components/view-clients-to-business/view-clients-to-business.component";
import { BusinessHomePageForClientComponent } from "./components/business-home-page-for-client/business-home-page-for-client.component";
import { TimesComponent } from "./components/times/times.component";
import { SetUpComponent } from "./components/set-up/set-up.component";


export const routes: Routes = [
    {
        path: 'enterBusiness',
        component: EnterAsBusinessComponent
    },
    {
        path: 'newPassword',
        component: NewPasswordComponent
    },
    {
        path: 'NewUserCertificate',
        component: NewUserCertificateComponent
    },
    {
        path: 'enterClient',
        component: EnterAsClientComponent
    },
    {
        path: 'startPage',
        component: StartPageComponent
    },
    {
        path: 'signUpClient',
        component: SignUpClientComponent
    },
    {
        path: 'signUpBOwner',
        component: SignUpBOwnerComponent
    },
    {
        path: 'logIn',
        component: LogInComponent
    },
    {
        path: 'searchBusiness',
        component: SearchBusinessComponent,
    },
    {
        path: 'SetUp',
        component: SetUpComponent,
        children: [
            {
                path: 'SetUpFirstDefinition',
                component: SetUpFirstDefinitionComponent
            },
            {
                path: 'Times',
                component: TimesComponent
            }
        ]
    },
    {
        path: 'clientRegisterToBusiness',
        component: RegisterToBusinessComponent
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'businessHomePage',
        component: BusinessHomePageComponent,
        children: [
            {
                path: 'schedule',
                component: ScheduleComponent
            },
            {
                path: 'SetUp',
                component: SetUpComponent,
                children: [
                    {
                        path: 'SetUpFirstDefinition',
                        component: SetUpFirstDefinitionComponent
                    },
                    {
                        path: 'Times',
                        component: TimesComponent
                    }
                ]
            },
            {
                path: 'ViewClientsToBusiness',
                component: ViewClientsToBusinessComponent
            }
        ]
    },
    // {
    //     path: 'SetUpFirstDefinition',
    //     component: SetUpFirstDefinitionComponent
    // },
    {
        path: 'NotifyRegisterSucceded',
        component: NotifyRegisterSuccededComponent
    },
   
    {
        path: 'BusinessHomePageForClientComponent',
        component: BusinessHomePageForClientComponent
    },
]