import {Component, OnInit} from '@angular/core';
import {Recipe} from '../Model/recipes.model';
import {RecipeService} from './Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.recipeService.recipesSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });
  }

}
