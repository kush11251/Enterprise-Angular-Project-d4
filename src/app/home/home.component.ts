import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  template: '<p>Home Component</p>'
})
export class HomeComponent {
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getData().subscribe(data => console.log(data));
  }
}