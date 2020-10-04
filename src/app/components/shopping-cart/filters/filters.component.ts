import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }

  strightFilter(filterInput){
    this.msg.setfilterInput(filterInput);
  }


}
