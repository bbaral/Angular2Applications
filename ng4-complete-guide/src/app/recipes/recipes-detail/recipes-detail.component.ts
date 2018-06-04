import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../Model/recipes.model';
import {RecipeService} from '../Services/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    alert(this.recipe.name + ' ingredients added successfully');
  }

  onEditRecipe() {
    alert('Edit link is in process....');
    console.log("edit was clicked!");
  }

  onDeleteRecipe() {
    alert('Delete link is in process....');
    console.log("deleted was clicked!");
  }

}
