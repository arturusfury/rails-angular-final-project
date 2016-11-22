class Api::V1::RecipesController < ApplicationController
  respond_to :json

  def create
    # recipe = Recipe.new
    # recipe.update(recipe_params)

    # [:ingredients].each do |ingredient|
    #   recipe.ingredients.create(ingredient)
    # end

    render json: recipe_params
  end

  def index
    respond_with(Recipe.all)
  end

  def show
    respond_with(Recipe.find(params[:id]))
  end

  def top
    respond_with(Recipe.order(total_rating: :desc).limit(6))
  end

  def latest
    respond_with(Recipe.order(updated_at: :desc).limit(12))
  end

  private

  def recipe_params
    params.require(:recipe).permit!
  end
end
