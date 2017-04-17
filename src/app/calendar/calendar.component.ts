import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/primeng';
interface editable {
  isEdit: boolean
}
interface appoitment extends editable {
  dayOfApoitment: Date,
  text: String
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  appoitment = {
    dayOfApoitment: new Date(),
    text: '',
    isEdit: false
  }
  oldApoiment: appoitment;
  appoitments: appoitment[] = [];
  today=new Date;
  isOkay = true;
  isEdit = false;

  constructor() { }

  ngOnInit() {
    this.appoitment = this.initState();
    this.oldApoiment = this.initState();
  }
  makeApoitment() {
    if (this.appoitment.isEdit) {
      const old = this.appoitments.forEach(element => {
        if (element == this.oldApoiment) {
          console.log('ISOLD')
          if (this.appoitment.dayOfApoitment.getTime() !== this.oldApoiment.dayOfApoitment.getTime()) {
            const isNotOkay = this.appoitments.some(element => {
              return element.dayOfApoitment.getTime() === this.appoitment.dayOfApoitment.getTime();;
            });
            this.isOkay = !isNotOkay;
            if (this.isOkay) {
              element.text = this.appoitment.text;
              element.dayOfApoitment = this.appoitment.dayOfApoitment;
              element = this.appoitment;
            }

          } else {
            // alert('ddidn change date')
            console.log(this.appoitment)
            element.text = this.appoitment.text;
          }
        }
        return;
      })
    } else {
      const isNotOkay = this.appoitments.some(element => {

        return element.dayOfApoitment.getTime() === this.appoitment.dayOfApoitment.getTime();
      });
      this.isOkay = !isNotOkay;
      if (this.isOkay) {
        this.appoitments.push(this.appoitment);
      }
    }
    this.appoitments.forEach(app => app.isEdit = false);
    this.appoitment = this.initState();
    this.oldApoiment = this.initState();
  }

  initState() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return {
      dayOfApoitment: date,
      text: '',
      isEdit: false
    }
  }
  selectItem(item) {
    this.appoitments.forEach(app => app.isEdit = false);
    item.isEdit = true;
    this.appoitment = Object.assign({}, item);
    this.oldApoiment = item;
  }
  removeItem(item){
    var index = this.appoitments.indexOf(item);
    this.appoitments.splice(index, 1);
    this.appoitment=this.initState();
  }
}
