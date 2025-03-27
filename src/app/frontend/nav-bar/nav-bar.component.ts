import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isOpen = false;
 companyEmail: string = 'wellbecure.wbc@gmail.com';
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
