import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() togglesSideBarForMe: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  togglesSideBar(){
    this.togglesSideBarForMe.emit()
  }
}
