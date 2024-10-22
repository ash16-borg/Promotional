import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrollToCharacter() {
    const element = document.getElementById('characterComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToMaps() {
    const element = document.getElementById('mapsComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToWhatsNew() {
    const element = document.getElementById('whatsnewComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToAboutGame() {
    const element = document.getElementById('aboutgameComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}