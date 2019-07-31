import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TestServiceService } from '../test/service/test-service.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit{
  @Input()
  nama: string;

  listCustomer : Customer[];

  constructor(private route : Router, private testService : TestServiceService) { }

  ngOnInit() {
    console.log(`CreateCustomerComponent ngOnInit`);

    this.testService.getAllCustomer().subscribe(
      result=>this.listCustomer = result
    );
  }

  doSelectCustomer(customer: Customer){
    alert(customer.firstName);
  }

  /* 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`CreateCustomerComponent ngOnChanges : ${JSON.stringify(changes)}`);
  }

  ngOnInit() {
    console.log(`CreateCustomerComponent ngOnInit`);
  }

  ngDoCheck(): void {
    console.log(`CreateCustomerComponent ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`CreateCustomerComponent ngAfterContentInit`);
  }
  
  ngAfterContentChecked(): void {
    console.log(`CreateCustomerComponent ngAfterContentChecked`);
  }
  
  ngAfterViewInit(): void {
    console.log(`CreateCustomerComponent ngAfterViewInit`);
  }
  
  ngAfterViewChecked(): void {
    console.log(`CreateCustomerComponent ngAfterViewChecked`);
  }
  
  ngOnDestroy(): void {
    console.log(`CreateCustomerComponent ngOnDestroy`);
  }
   */
  openTest(){
    const path = ['/test'];
    const queryParams = {queryParams :{balance: 5000}};
    this.route.navigate(path, queryParams);
  }

  printNumber(number){
    console.log(number);
  }

  test(){
    let subscription = this.testService.getNumberQueue().subscribe(
      this.printNumber
    );

    setTimeout(
      (number1, number2)=>{
        subscription.unsubscribe();
      },17000
    )
  }

}
