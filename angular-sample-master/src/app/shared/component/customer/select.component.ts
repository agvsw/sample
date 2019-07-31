import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { TestServiceService } from 'src/app/test/service/test-service.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input()
  listCustomer : Customer[];

  @Output()
  selectedCustomer : EventEmitter<Customer> = new EventEmitter();

  constructor(private service : TestServiceService) { }

  ngOnInit() {
    if(!this.listCustomer){
      console.log('list customer kosong, querying...');
      this.service.getAllCustomer().subscribe(
        result=>this.listCustomer = result
      );
    }
  }

  select(index: number){
    const selected : Customer = this.listCustomer[index];
    this.selectedCustomer.emit(selected);
  }

}
