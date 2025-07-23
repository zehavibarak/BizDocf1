import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, provideRouter } from '@angular/router';
import { AuthenticationImpl, BIZDOC_CONFIG, BizDocModule, MaterialModule, SharedModule } from '@bizdoc/core';
import { withFetch, provideHttpClient } from '@angular/common/http';
import { CredentialsModule } from '@bizdoc/credentials';
import { SurveyModule } from '@bizdoc/survey';
import { BusinessTripModule } from '@bizdoc-apps/business-trip';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { FormComponent } from './fill/fill.component';
import { FolderComponent } from './folder/folder.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFound } from './not-found/not-found.component';
import { routes } from './routes';
import { Localize } from './core/localize';
import { CredentialsService } from './core/credentials.service';
import { SystemComponent } from './system/system';
import { SelectFormComponent } from './select-form/select-form';
import { GroupByPipe } from './core/group-by-pipe';
import { TakeActionComponent } from './take-action/take-action';
import { UserProfile } from './user-profile/user-profile';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateZoneComponent,
    FormComponent,
    FolderComponent,
    SignInComponent,
    NotFound,
    Localize,
    SystemComponent,
    SelectFormComponent,
    GroupByPipe,
    TakeActionComponent,
    UserProfile
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
    BizDocModule.forRoot({
      components: [],
      maps: {
        apiKey: 'AIzaSyANC72GNC5HwWJ4Up-0TnfFjurhCJfbRUg', 
      },
    }),
    SharedModule.forChild({
      routingEngine: 'ng'
    }),
    BusinessTripModule.forRoot({
      
    }),
    SurveyModule.forRoot(),
    CredentialsModule.forRoot()
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
  { provide: AuthenticationImpl, useClass: CredentialsService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
