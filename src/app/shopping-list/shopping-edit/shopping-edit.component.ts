import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../ingredient';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  addIndredient(name : string, quantity : number){
    //this.ingredientAdded.emit(new Ingredient(name, quantity));
    this.shoppingListService.addIngredient(new Ingredient(name, quantity));
  }



}
