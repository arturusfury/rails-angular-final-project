class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
         :trackable, :omniauthable

  has_many :reviews
  has_many :recipes
end
