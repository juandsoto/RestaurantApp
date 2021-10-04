import {Component, OnInit} from '@angular/core';
import data from '../../assets/json/db.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  witnesses: any = data.witnesses2;
  team: any = data.team;

  constructor() { }

  ngOnInit(): void {
  }

}
