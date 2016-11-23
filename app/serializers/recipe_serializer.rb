class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :dish_type, :total_servings,
             :prep_time, :cook_time, :total_rating, :user_info, :ingredients,
             :directions, :review_list

  def user_info
    {
      id: object.user.id,
      name: object.user.name
    }
  end

  def review_list
    object.reviews.map do |review|
      {
        id: review.id,
        user: {
          id: review.user_id,
          name: User.find(review.user_id).name
        },
        rating: review.rating,
        content: review.content,
        date: review.updated_at
      }
    end
  end
end
