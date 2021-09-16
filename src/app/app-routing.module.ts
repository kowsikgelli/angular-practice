import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowusersComponent } from './showusers/showusers.component';

const routes: Routes = [
  {path:'adduser',component:AdduserComponent},
  {path:'showusers',component:ShowusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
