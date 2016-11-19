class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :dish_type, :total_servings,
             :prep_time, :cook_time, :total_rating, :user_info, :tags,
             :ingredient_list, :directions, :review_list

  def user_info
    user = object.user

    {
      id: user.id,
      name: user.name
    }
  end

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

  def review_list
    reviews = object.reviews

    reviews.map do |review|
      {
        id: review.id,
        user: {
          id: review.user_id,
          name: User.find(review.user_id).name
        },
        rating: review.rating,
        content: review.content
      }
    end
  end
end
