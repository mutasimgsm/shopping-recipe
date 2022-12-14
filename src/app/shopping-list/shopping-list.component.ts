import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../Shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomato", 10),
  ];

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
