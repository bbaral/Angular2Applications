import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipes.model';
import {RecipeService} from '../../recipesService/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipesSelected.emit(this.recipe);
  }

}
