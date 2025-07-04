import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, provideRouter } from '@angular/router';
import { AuthenticationImpl, BIZDOC_CONFIG, BizDocModule, MaterialModule, SharedModule } from '@bizdoc/core';
import { CredentialsModule } from '@bizdoc/credentials';
import { SurveyModule } from '@bizdoc/survey';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { FormComponent } from './fill/fill.component';
import { FolderComponent } from './folder/folder.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFound } from './not-found/not-found.component';
import { routes } from './routes';
import { Localize } from './localize';
import { CredentialsService } from './credentials.service';
import { System } from './system/system';

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
    System
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    SurveyModule,
    BizDocModule.forRoot({ components: [] }),
    SharedModule.forChild({
      routingEngine: 'ng'
    }),
    CredentialsModule.forRoot()
  ],
  providers: [provideRouter(routes),
  {
    provide: BIZDOC_CONFIG,
    useValue: {}
  },
  { provide: AuthenticationImpl, useClass: CredentialsService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
