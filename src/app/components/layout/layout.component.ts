import { Component, OnInit } from '@angular/core';
import { StaticdataService } from 'src/app/services/staticdata.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public staticData: StaticdataService) { }

  ngOnInit(): void {

    console.log(this.staticData.data);

  }

}
