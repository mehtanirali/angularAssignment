import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../app.service'; 
import * as ProductActions from './user.actions'

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ProductActions.setProducts({ products })),
          catchError((error) => of(ProductActions.setProducts({ products: [] })))
        )
      )
    )
  );
}
