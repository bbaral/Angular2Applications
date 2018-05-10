import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

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
    // for (let ing of ingredients) {
    //   this.addIngredient(ing);
    // }
    this.shoppingListIngredients.push(...ingredients);
    this.ingredientsChanged.emit(this.shoppingListIngredients.slice());
  }
}
