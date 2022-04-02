import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from "./public/public.module";
import { SharedModule } from "./shared/shared.module";
import { PublicHomeComponent } from "./public/public-home/public-home.component";

const routes: Routes = [
  {
    path: '',
    component: PublicHomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
