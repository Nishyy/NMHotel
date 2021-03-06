import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-n-beverage/food-n-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'accomodation', component: AccomodationComponent },
    { path: 'celebrations', component: CelebrationsComponent },
    { path: 'food-n-beverage', component: FoodBeverageComponent },
    { path: 'lifestyle', component: LifestyleComponent },
    { path: 'weddings', component: WeddingsComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
