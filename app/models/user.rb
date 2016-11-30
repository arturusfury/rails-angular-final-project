class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
         :trackable, :omniauthable

  has_many :reviews
  has_many :recipes

  before_destroy :destroy_recipes

  private

  def destroy_recipes
    recipes.each do |recipe|
      recipe.ingredients.delete_all
      recipe.directions.delete_all
    end

    recipes.delete_all
  end
end
