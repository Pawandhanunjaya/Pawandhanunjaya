import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CombineComponent } from '../combine/combine.component';
import { LivestreamComponent } from '../livestream/livestream.component';
import { SidenavComponent } from '../sidenav/sidenav.component';



const routes: Routes = [
 // {path :'',component:SidenavComponent},
  {path :'sidenav',component:SidenavComponent,
    children : [
      {path : 'livestream',component:LivestreamComponent}
    ]},
  {path :'combine',component:CombineComponent}
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MyroutingModule { }
