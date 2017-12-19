///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component} from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {

  constructor(public auth: AuthService) { }



}
