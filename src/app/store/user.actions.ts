import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const login = createAction('[User] Login', props<{ user: User }>());


export const loadProducts = createAction('[Product] Load Products');

export const setProducts = createAction(
  '[Product] Set Products',
  props<{ products: any[] }>()
);