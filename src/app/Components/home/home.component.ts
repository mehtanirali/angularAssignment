import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/store/user.actions'; 
import { selectProducts } from 'src/app/store/user.selectors'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  products$ = this.store.select(selectProducts);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    
  }
}

