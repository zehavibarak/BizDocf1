import { Route } from '@angular/router';
import { FormComponent } from './fill/fill.component';
import { FolderComponent } from './folder/folder.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { HomeComponent } from './home/home.component';
import { credentialsGuard } from './credentials-guard';
import { recipientResolver } from './recipient-resolver';
import { NotFound } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { System } from './system/system';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'form/:id',
    component: FormComponent,
    canActivate: [credentialsGuard],
    resolve: { data: recipientResolver }
  },
  {
    path: 'folder/:id',
    component: FolderComponent,
    canActivate: [credentialsGuard],
  },
  {
    path: 'zone',
    component: PrivateZoneComponent,
    canActivate: [credentialsGuard]
  },
  {
    path: 'access',
    component: SignInComponent,
  },
  {
    path: 'admin',
    component: System,
  },
  {
    path: '**',
    component: NotFound,
  }
];
