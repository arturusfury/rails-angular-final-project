class Api::V1::RecipesController < ApplicationController
  respond_to :json

  def create
    recipe = Recipe.new
    recipe.update(recipe_params)

    if recipe.save
      render json: {
        status: 201,
        message: 'Recipe successfully created!',
        recipe: RecipeSerializer.new(recipe).attributes
      }, status: 201
    else
      render json: {
        status: 500,
        errors: recipe.errors
      }, status: 500
    end
  end

  def index
    respond_with(Recipe.all)
  end

  def show
    respond_with(Recipe.find(params[:id]))
  end

  def reviews
    respond_with(Recipe.find(params[:id]))
  end

  def update
    recipe = Recipe.find(params[:id])
    recipe.update(recipe_params)

    Ingredient.where(recipe_id: recipe.id).each(&:destroy)
    recipe.ingredients.create(recipe_params[:ingredients_attributes])

    Direction.where(recipe_id: recipe.id).each(&:destroy)
    recipe.directions.create(recipe_params[:directions_attributes])

    if recipe.save
      render json: {
        status: 200,
        message: 'Recipe successfully updated!',
        recipe: RecipeSerializer.new(recipe).attributes
      }, status: 200
    else
      render json: {
        status: 500,
        errors: recipe.errors
      }, status: 500
    end
  end

  def destroy
    recipe = Recipe.find(params[:id])
    recipe_id = recipe.id

    return false unless recipe.destroy

    Direction.where(recipe_id: recipe_id).each(&:destroy)
    Ingredient.where(recipe_id: recipe_id).each(&:destroy)
    Review.where(recipe_id: recipe_id).each(&:destroy)
    render json: {
      status: 204,
      message: 'Recipe has been deleted successfully!'
    }, status: 204
  end

  def top
    respond_with(Recipe.order(total_rating: :desc).limit(6))
  end

  def latest
    respond_with(Recipe.order(updated_at: :desc).limit(12))
  end

  def user_recipes
    user = User.find_by(name: params[:username].tr('_', ' '))
    respond_with(user.recipes)
  end

  private

  def recipe_params
    params.require(:recipe).permit(
      :id, :title, :description, :image_url, :dish_type, :total_servings,
      :cook_time, :prep_time, :total_rating, :user_id,
      ingredients_attributes: [:id, :amount, :measure, :name, :recipe_id, :_destroy],
      directions_attributes: [:id, :text, :recipe_id, :_destroy]
    )
  end
end
