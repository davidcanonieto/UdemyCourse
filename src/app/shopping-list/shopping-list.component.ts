import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients : Ingredient[] = [
  //   new Ingredient('pasta', 100),
  //   new Ingredient('tomato', 10)
  // ];

  ingredients : Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    //this.shoppingListService.ingredientsChange.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    this.subscription = this.shoppingListService.ingredientsChange.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  // onIngredientAdded(ingredient : Ingredient){
  //   // this.ingredients.push(ingredient);
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
