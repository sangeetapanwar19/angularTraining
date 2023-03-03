import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() log = new EventEmitter<any>();

  constructor(private r: Router, private auth: AuthserviceService) {}
  logout() {
    this.auth.logout();
    this.r.navigate(['/login']);
    this.log.emit(false);
  }
}
