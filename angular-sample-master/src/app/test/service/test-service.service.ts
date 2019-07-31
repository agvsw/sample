import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  listCustomer = [];

  getCustomers(): Customer[]{
    if(this.listCustomer.length==0){
      for (let index = 1; index <= 5; index++) {
        this.listCustomer.push(new Customer(index, 'Customer '+index, 'Name '+index));
        //this.listCustomer.push({cif:index, firstName: 'Customer '+index, lastName : 'Name '+index});
      }
    }
    return this.listCustomer;
  }

  getAllCustomer():Observable<Customer[]>{
    return new Observable(
      observer=>{
        setInterval(()=>{
          observer.next(this.getCustomers());
          observer.complete();
        }, 4000);
      }
    )
  }

  getNumberQueue(): Observable<number>{
    return new Observable(
      this.cetak
    )
  }

  cetak(observer: Subscriber<number>){
    let queue = [];
    for (let index = 0; index < 20; index++) {
      queue.push(index);
    }
    setInterval(()=>{
      console.log(`queue list : ${queue}`);
      observer.next(queue.pop());
    }, 1000);
  }

  loadQueue(): number[]{
    let queue = [];
    for (let index = 0; index < 50; index++) {
      queue.push(index);
    }
    return queue;
  }

  getDataWithPromise(){
    return new Promise(
      (resolve, failed)=>{
        setTimeout(()=>{
        resolve(this.getCustomers());
        },5000);
      }
    )
  }
}
