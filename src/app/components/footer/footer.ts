import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  title:string="hello";
  count:number=0;
  car:string="hero";
  cow:boolean=true;
  mutu:string[]=["apple"];


}
