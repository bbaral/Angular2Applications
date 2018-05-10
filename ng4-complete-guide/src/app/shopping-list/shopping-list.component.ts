import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppingService/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingred: Ingredient[] = [];

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingred = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingred: Ingredient[]) => {
        this.ingred = ingred;
      });
  }
}
