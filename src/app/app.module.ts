import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './home-page/nav-bar/nav-bar.component';
import { HomeSearchFieldComponent } from './home-page/home-search-field/home-search-field.component';
import { CategoryComponent } from './home-page/category/category.component';
import { FeaturedAdsComponent } from './home-page/featured-ads/featured-ads.component';
import { LatestAdsComponent } from './home-page/latest-ads/latest-ads.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PostAdComponent } from './post-ad/post-ad.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Route } from '@angular/router/src/config';
import { AdsDetailsComponent } from './ads-details/ads-details.component';

import { AgmCoreModule } from '@agm/core';
import { ListingComponent } from './listing/listing-component/listing-component';
import { ResultsSettingsComponent } from './listing/results-settings/results-settings.component';
import { ArticlesListingComponent } from './listing/articles-listing/articles-listing.component';

const routes: Route[] = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'post', component: PostAdComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'article/:id', component: AdsDetailsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: '**', component: ErrorPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeSearchFieldComponent,
    CategoryComponent,
    FeaturedAdsComponent,
    LatestAdsComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    PostAdComponent,
    RegisterFormComponent,
    ErrorPageComponent,
    AdsDetailsComponent,
    ListingComponent,
    ResultsSettingsComponent,
    ArticlesListingComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes),
  AgmCoreModule.forRoot({ 
    apiKey:'AIzaSyAsqJeZrhg7IzpDbjftSkUUW5MuYrz4TAE'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }