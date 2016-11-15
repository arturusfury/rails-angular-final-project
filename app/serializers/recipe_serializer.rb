class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :dish_type, :total_servings,
             :total_rating, :user_id, :items
end
