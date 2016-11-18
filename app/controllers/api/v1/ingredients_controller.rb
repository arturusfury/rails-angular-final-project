class Api::V1::IngredientsController < ApplicationController
  respond_to :json

  def index
    respond_with(Ingredient.all)
  end
end
