import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start.component';
import {CommonModule} from '@angular/common';
import {recipesRouting} from './recipes.routing';

@NgModule({
declarations: [
  RecipesComponent,
  RecipeListComponent,
  RecipeItemComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipeStartComponent
],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    recipesRouting
  ]
})
export class RecipesModule {}
