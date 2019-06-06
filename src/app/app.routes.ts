import { Routes, RouterModule } from '@angular/router';



export const ROUTES: Routes = [
  
  { path: '', redirectTo: 'empire', pathMatch: 'full' },
  { path: 'empire', loadChildren: './empireModule/empire.module#empireModule' },
  { path: 'routesNoMenu', loadChildren: './empireNoMenu/empireNoMenu.module#empireNoModule' },
  { path: 'menuDetails', loadChildren: './menu/menu.module#menuModule' },
  
  // Not found
  { path: '**', redirectTo: 'empire' }
];