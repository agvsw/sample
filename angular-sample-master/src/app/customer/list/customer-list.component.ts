import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/servives/authentication.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
    console.log(`CustomerListComponent ngOnInit `);
    
  }

  data: string;
  todo;
/* 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`CustomerListComponent ngOnChanges : ${JSON.stringify(changes)}`);
  }

  ngOnInit() {
    console.log(`CustomerListComponent ngOnInit `);
    
  }

  loadData(){
    
  }

  ngDoCheck() {
    console.log(`CustomerListComponent ngDoCheck `);
  }
  
  ngAfterContentInit(): void {
    console.log(`CustomerListComponent ngAfterContentInit `);
  }
  
  ngAfterContentChecked(): void {
    console.log(`CustomerListComponent ngAfterContentChecked `);
  }
  
  ngAfterViewInit(): void {
    console.log(`CustomerListComponent ngAfterViewInit `);
  }
  
  ngAfterViewChecked(): void {
    console.log(`CustomerListComponent ngAfterViewChecked `);
  }
  
  ngOnDestroy(): void {
    console.log(`CustomerListComponent ngOnDestroy `);
  }
   */
}
