import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  selectedRecipe;

  detailedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}

  onRecipeDetail(recipe: Recipe) {
    this.detailedRecipe = recipe;
  }
}
