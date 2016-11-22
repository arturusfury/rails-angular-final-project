class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients, inverse_of: :recipe
  has_many :reviews
  has_many :directions

  accepts_nested_attributes_for :ingredients
  accepts_nested_attributes_for :directions
end
