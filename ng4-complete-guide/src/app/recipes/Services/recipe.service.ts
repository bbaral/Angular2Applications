import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../../Model/recipes.model';
import {Ingredient} from '../../Model/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipesSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Selmon Fish',
      'Ingredients added in this recipe',
      'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg',
      [
        new Ingredient('Wine', 1),
        new Ingredient('Salad', 1),
        new Ingredient('Rosted Potato', 2)
      ]),
    new Recipe('Thai Spicy Shrimp',
      'Ingredients added in this recipe',
      'https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',
      [
        new Ingredient('Dry Chillis', 10),
        new Ingredient('Green Beans', 5),
        new Ingredient('Onions', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
