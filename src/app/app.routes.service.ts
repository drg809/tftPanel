
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { AuthGuard } from './shared/helpers/auth.guard';
import { LoginComponent } from './main-layout/login/login.component';


const routes: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component, canActivate: [AuthGuard] },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component, canActivate: [AuthGuard] },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component, canActivate: [AuthGuard]},
    ]
  },
  { path: 'modals', component: ModalsComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
