class Api::V1::IngredientsController < ApplicationController
  respond_to :json

  def index
    ingredient_list = {}

    Ingredient.all.each do |i|
      ingredient_list["#{i.name}"] = nil
    end

    render json: ingredient_list
  end
end
