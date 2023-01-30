import {Component} from '@angular/core';
import {PATH} from "../../../app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  links: { title: string, path: string }[] = [
    {title: 'RX Angular Store', path: PATH.RX_ANGULAR_STORE},
    {title: 'NGRX Component Store', path: PATH.NGRX_COMPONENT_STORE},
  ];

}
