import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() opened = true;
  @Input() navItems = [];
  @Output() close = new EventEmitter<null>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClose() {
    console.log('onClose : sidenav');
    this.opened = false;
    this.close.emit();
  }

  route(page) {
    {
      this.router.navigate([page]);
      this.onClose();
    }
  }
}
