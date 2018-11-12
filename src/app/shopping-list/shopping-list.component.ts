import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomato', 15)
  ];
  constructor() {}

  ngOnInit() {}
  onAddIngredient(ingredent: Ingredient) {
    this.ingredients.push(ingredent);
  }
}
