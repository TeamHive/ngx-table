import { Routes } from '@angular/router';
import { BasicTablePageComponent } from './pages/basic-table-page/basic-table-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StyledTablePageComponent } from './pages/styled-table-page/styled-table-page.component';

/**
 * Root-level route definitions
 * Note: For child paths use the feature modules *-routing.module declaration.
 */
export const AppRoutes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
      path: 'basic',
      component: BasicTablePageComponent
    },
    {
      path: 'styled',
      component: StyledTablePageComponent
    },

    /**
     * Default path match when no routes match the user's destination path.
     * Redirect to a main page or a 404 page.
     */
    {
        path: '**',
        redirectTo: '/home'
    }
];


export const AppPages = [
  HomePageComponent,
  BasicTablePageComponent,
  StyledTablePageComponent
];
