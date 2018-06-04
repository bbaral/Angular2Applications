import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../Model/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private shoppingListIngredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Mango', 10)
  ];

  getIngredients() {
    return this.shoppingListIngredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingListIngredients.push(ingredient);
    this.ingredientsChanged.emit(this.shoppingListIngredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListIngredients.push(...ingredients);
    this.ingredientsChanged.emit(this.shoppingListIngredients.slice());
  }
}
