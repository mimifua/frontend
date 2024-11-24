import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('hamburgerMenu', { static: true }) hamburgerMenu!: ElementRef;
  @ViewChild('mobileMenu', { static: true }) mobileMenu!: ElementRef;

  ngOnInit() {
    this.hamburgerMenu.nativeElement.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    const menu = this.mobileMenu.nativeElement;
    menu.classList.toggle('hidden');
  }
}
