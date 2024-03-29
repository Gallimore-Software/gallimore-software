import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  slideIndex = 0;
  textContent = ''
  constructor() { }

  ngOnInit(): void {
    this.show(0);
  }

  next() {
    this.slideIndex === 3 ? this.slideIndex = 0 : this.slideIndex++;
    this.show(this.slideIndex);
  }

  prev() {
    this.slideIndex === 0 ? this.slideIndex = 3 : this.slideIndex--;
    this.show(this.slideIndex);
  }

  show(n) {
    this.slideIndex = n;
    switch (n) {
      case 0:
        this.textContent = 'We offer high quality software solutions that fit our customers\' unique needs. Contact nick@gallimoresoftware.com';
        break;
      case 1:
        this.textContent = "Good quality code, written for you -- by us, with business goals in mind."
        break;
      case 2:
        this.textContent = "We would love to work with you, please reach out if you would too."
        break;
      case 3:
        this.textContent = "Thank you for viewing our site. Come back anytime, updates come frequently!"
        break;
    }
  }

  setButtonSelected(n) {
    return n === this.slideIndex ? 'white' : 'transparent';
  }
}
