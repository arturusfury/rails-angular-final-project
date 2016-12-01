class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
         :trackable, :omniauthable

  has_many :reviews
  has_many :recipes

  validates_presence_of :email, message: 'Must have a valid Email Address'
  validates_uniqueness_of :email, message: 'Email Address is already in use', case_sensitive: true

  validates_presence_of :username, message: 'Must have a valid username'
  validates_uniqueness_of :username, message: 'Username already exists'

  validates_presence_of :name, message: 'Must have a full name'

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
