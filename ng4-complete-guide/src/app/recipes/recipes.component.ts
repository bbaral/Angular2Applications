import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipeService} from './recipesService/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selctedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.recipeService.recipesSelected.subscribe(
      (recipe: Recipe) => {
        this.selctedRecipe = recipe;
      });
  }

}
