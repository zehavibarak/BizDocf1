import { Route } from '@angular/router';
import { FormComponent } from './fill/fill.component';
import { FolderComponent } from './folder/folder.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { HomeComponent } from './home/home.component';
import { credentialsGuard } from './core/credentials-guard';
import { recipientResolver } from './core/recipient-resolver';
import { NotFound } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SystemComponent } from './system/system';
import { SelectFormComponent } from './select-form/select-form';
import { TakeActionComponent } from './take-action/take-action';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'zone',
    component: PrivateZoneComponent,
    canActivate: [credentialsGuard],
    children: [
      {
        path: 'folder/:id',
        canActivate: [credentialsGuard],
        component: FolderComponent,
      },
    ]
  },
  {
    path: 'create',
    component: SelectFormComponent,
    canActivate: [credentialsGuard],
  },
  {
    path: 'fill/:id',
    component: FormComponent,
    canActivate: [credentialsGuard],
    resolve: { data: recipientResolver }
  },
  {
    path: 'confirm/:id',
    component: TakeActionComponent,
    canActivate: [credentialsGuard],
    resolve: { data: recipientResolver }
  },
  {
    path: 'access',
    component: SignInComponent,
  },
  {
    path: 'admin',
    component: SystemComponent,
  },
  {
    path: '**',
    component: NotFound,
  }
];
