class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :reviews
  has_many :directions
end
