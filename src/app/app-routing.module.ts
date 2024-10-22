import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterComponent } from './character/character.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BottomComponent } from './bottom/bottom.component';

const routes: Routes = [
  {path: 'cardinfo', component: CardinfoComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'bottom', component:BottomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
