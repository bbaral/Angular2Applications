import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuardService} from './servers/edit-server/can-deactivate-guard.service';
import {ServerResolverService} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  {
    path: 'servers', component: ServersComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    //RouterModule.forRoot(appRoutes, {useHash: true})
    /**
     * useHash will give you something like localhost:4200/#/users
     */
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
