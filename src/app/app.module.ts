import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';


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
import { AdsDetailsComponent } from './ads-details/ads-details.component';
import { CategoryService } from './category.service';
import { environment } from './../environments/environment';
import { LocationService } from './location.service';
import { UploadImagesService } from './upload-images.service';
import { AdvertService } from './advert.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { InfoSnackService } from './info-snack.service';


import { AgmCoreModule } from '@agm/core';
import { ListingComponent } from './listing/listing-component/listing-component';
import { ResultsSettingsComponent } from './listing/results-settings/results-settings.component';
import { ArticlesListingComponent } from './listing/articles-listing/articles-listing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsageConditionsComponent } from './usage-conditions/usage-conditions.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},

  {path: 'post', component: PostAdComponent, canActivate: [AuthGuardService]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'user/:id', component: UserProfileComponent, canActivate: [AuthGuardService]},

  {path: 'register', component: RegisterFormComponent},
  {path: 'article/:id', component: AdsDetailsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'conditions', component: UsageConditionsComponent},
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
    ArticlesListingComponent,
    UserProfileComponent,
    ContactUsComponent,
    AboutUsComponent,
    UsageConditionsComponent,
    DashboardComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  CustomFormsModule,
  NgxPaginationModule,
  RouterModule.forRoot(routes),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAsqJeZrhg7IzpDbjftSkUUW5MuYrz4TAE'
  }),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  ],
  providers: [
    CategoryService,
    LocationService,
    UploadImagesService,
    AdvertService,
    AuthService,
    AuthGuardService,
    InfoSnackService
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
