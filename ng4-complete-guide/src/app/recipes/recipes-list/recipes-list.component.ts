import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../Model/recipes.model';
import {RecipeService} from '../Services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }
}
