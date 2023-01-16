import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[LoginComponent],
  providers:[LoginService],
})
export class LoginModule { }
