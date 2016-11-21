class Api::V1::RecipesController < ApplicationController
  respond_to :json

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
end
