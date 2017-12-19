import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import { AuthService } from './auth.service';
import {UserProfileComponent} from '../user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireModule,
    UserProfileComponent
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
