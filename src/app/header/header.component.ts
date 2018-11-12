import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  featureSelect = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  onSelect(feature: string) {
    console.log(feature);
    this.featureSelect.emit(feature);
  }
}
