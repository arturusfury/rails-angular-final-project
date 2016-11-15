class Recipe < ApplicationRecord
  has_many :items
  has_many :ingredients, through: :items
  has_many :reviews
  has_many :joins_recipe_tags
  has_many :tags, through: :joins_recipe_tags
  has_many :directions
end
