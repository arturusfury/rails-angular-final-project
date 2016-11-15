class JoinsRecipeTag < ApplicationRecord
  belongs_to :tag
  belongs_to :recipe
end
