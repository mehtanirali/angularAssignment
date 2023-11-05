import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productReducer, userReducer } from './store/user.reducer';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductEffects } from './store/product.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProductsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({user:userReducer}),
    StoreModule.forFeature('product', productReducer),
    StoreModule.forRoot({ user: userReducer }),
    HttpClientModule,
    EffectsModule.forRoot([ProductEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
