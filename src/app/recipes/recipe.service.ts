import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Spaghetti with bolognesa', 'https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg', [
      new Ingredient('bolognesa', 100),
      new Ingredient('spaguetti', 125)
    ]),
    new Recipe('Pizza', 'Pizza Voodo Rays', 'http://www.sickchirpse.com/wp-content/uploads/2016/01/pizza-stock.jpg', [
      new Ingredient('massa', 200),
      new Ingredient('olives', 5),
      new Ingredient('cheese', 25)
    ])
  ];

  //recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService){
  }
  
  getRecipes(){
    return this.recipes.slice();
    //Use slice to pass a copy of the array and not destroy original
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
    //console.log(ingredients);
  }

}
