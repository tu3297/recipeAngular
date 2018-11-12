import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelect = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test1',
      'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg'
    ),
    new Recipe(
      'Another Recipe',
      'This is a test2',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelect.emit(recipe);
  }
}
