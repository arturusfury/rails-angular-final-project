class Api::V1::RecipesController < ApplicationController
  respond_to :json

  def create
    recipe = Recipe.new
    recipe.update(recipe_params)

    if recipe.save
      render json: {
        status: 201,
        message: 'Recipe successfully created!',
        recipe: recipe
      }.to_json
    else
      render json: {
        status: 500,
        errors: recipe.errors
      }.to_json
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
    #
  end

  def destroy
    #
  end

  def top
    respond_with(Recipe.order(total_rating: :desc).limit(6))
  end

  def latest
    respond_with(Recipe.order(updated_at: :desc).limit(12))
  end

  private

  def recipe_params
    params.require(:recipe).permit(
      :id, :title, :description, :image_url, :dish_type, :total_servings,
      :cook_time, :prep_time, :total_rating, :user_id,
      ingredients_attributes: [:id, :amount, :measure, :name, :recipe_id],
      directions_attributes: [:id, :text, :recipe_id]
    )
  end
end
