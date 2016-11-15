class Recipe < ApplicationRecord
  belongs_to :user
  has_many :items
  has_many :ingredients, through: :items
  has_many :reviews
  has_many :recipe_tags
  has_many :tags, through: :recipe_tags
  has_many :directions
end
