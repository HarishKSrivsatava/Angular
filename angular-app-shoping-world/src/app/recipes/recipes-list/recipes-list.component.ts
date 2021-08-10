import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {

    recipes: Recipe[] = 
    [ new Recipe('Test Recipe', 'This is Test Recipe',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.acouplecooks.com%2Frecipes%2F&psig=AOvVaw13x7YBrZVJWchMkPEbjNSS&ust=1616483098670000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjCp_qqw-8CFQAAAAAdAAAAABAD')];


  constructor() { }

  ngOnInit(): void {
  }

}
