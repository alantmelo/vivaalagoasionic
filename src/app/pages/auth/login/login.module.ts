import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { TokenModule } from 'src/app/services/token/token.module'; 
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TokenModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage],
  providers: [AuthService]
})
export class LoginPageModule {}
