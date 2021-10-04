import {Component, OnInit} from '@angular/core';
import data from '../../assets/json/db.json';
import {Product} from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  eyewitnesses: any = data.witnesses1;

  constructor() { }

  ngOnInit(): void {
    this.products = data.outstanding;
  }

}
