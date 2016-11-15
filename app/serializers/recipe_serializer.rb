class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :dish_type, :total_servings,
             :total_rating, :user_id, :ingredient_list

  def ingredient_list
    items = object.items

    items.map do |item|
      {
        id: item.id,
        amount: item.amount,
        measure: item.measure,
        ingredient: Ingredient.find(item.ingredient_id)
      }
    end
  end
end
