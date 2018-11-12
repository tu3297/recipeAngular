import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;
  @Output()
  recipeSelect = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}
  onSelect() {
    this.recipeSelect.emit();
  }
}