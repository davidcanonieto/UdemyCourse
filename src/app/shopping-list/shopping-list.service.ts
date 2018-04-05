import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient';

@Injectable()
export class ShoppingListService {

  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('pasta', 100),
    new Ingredient('tomato', 10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.getIngredients());
  }

  addIngredients(ingredients : Ingredient[]){
    // this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    // ... makes a list of the items within an array
    this.ingredientsChange.emit(this.ingredients.slice());
    console.log(this.ingredients);
    
  }

}
