import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInputRef: ElementRef;
  @ViewChild('amountInput')
  amountInputRef: ElementRef;
  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit() {}
  onAddItem() {
    const nameInput = this.nameInputRef.nativeElement.value;
    const amountInout = this.amountInputRef.nativeElement.value;
    const ingredent = new Ingredient(nameInput, amountInout);
    this.ingredientAdded.emit(ingredent);
  }
}
