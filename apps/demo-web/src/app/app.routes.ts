import { Routes } from '@angular/router';
import { BasicTablePageComponent } from './pages/basic-table-page/basic-table-page.component';

/**
 * Root-level route definitions
 * Note: For child paths use the feature modules *-routing.module declaration.
 */
export const AppRoutes: Routes = [
    {
        path: 'basic',
        component: BasicTablePageComponent
    },

    /**
     * Default path match when no routes match the user's destination path.
     * Redirect to a main page or a 404 page.
     */
    {
        path: '**',
        redirectTo: '/basic'
    }
];


export const AppPages = [
  BasicTablePageComponent
];
