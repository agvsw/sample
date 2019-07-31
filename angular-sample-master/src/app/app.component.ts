import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';

  coba = "";

  setCoba(data){
    console.log(data);
    alert('data dari test component : '+data);
    this.coba = data;
  }
}
