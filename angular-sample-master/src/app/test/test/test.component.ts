import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { TestServiceService } from '../service/test-service.service';
import { RupiahPipe } from 'src/app/shared/pipes/rupiah.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  listCustomer : Customer[] = [];

  updatingCustomer : boolean = false;

  constructor(private service: TestServiceService, private rupiahPipe : RupiahPipe, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        let balance = params['balance'];
        let customer: Customer = new Customer("123", "andi", "budi");
        customer.balance = balance;
        alert(this.rupiahPipe.transform(customer['balance'], '$'));
      }
    );

    this.activatedRoute.params.subscribe(
      params => {
        let balance = params['balance'];
        alert(this.rupiahPipe.transform(balance, '$'));
      }
    );

    /* this.service.getDataWithPromise().then(
      response=>{
        this.listCustomer = response;

        alert(`list customer : ${JSON.stringify(this.listCustomer)}`);

      }
    ); */

    this.testAsyncAwait();

    //this.listCustomer = this.service.getCustomers();
    /*let langganan = this.service.getAllCustomer().subscribe(
      customers=>{
        this.updatingCustomer = true;
        this.listCustomer = [];
        setTimeout(
          ()=>{
            this.listCustomer=customers;
            this.updatingCustomer=false;
          }, 2000
        )
      }
    ); 

    setTimeout(()=>{
      langganan.unsubscribe();
    }, 20000);*/
  }

  async testAsyncAwait(){

    //this.listCustomer = await this.service.getDataWithPromise();
    
    this.listCustomer = await this.service.getAllCustomer().toPromise();
    
    console.log('testAsyncAwait');
    
    alert(`list customer : ${JSON.stringify(this.listCustomer)}`);


    
  }

  @Input()
  coba: string = "ketik";

  @Output()
  cobaOutput = new EventEmitter();

  listBuah = ["apel", "jeruk", "kedondong", "anggur"];

  showDiv : boolean = true;

  submit(){
    this.cobaOutput.emit(this.coba);
  }
}
