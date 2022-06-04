import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginUserComponent
  ],
  imports: [
    CommonModule, 
    UserRoutingModule, 
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPasswordStrengthModule
  ]
})
export class UserModule { }
