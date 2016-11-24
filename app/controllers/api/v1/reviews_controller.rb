class Api::V1::ReviewsController < ApplicationController
  respond_to :json

  def create
    review = Review.create(review_params)
    calculate_total_rating(Recipe.find(review.recipe_id))

    if review.save
      render json: {
        status: 201,
        message: 'Review successfully submitted!',
        review: {
          id: review.id,
          user: {
            id: review.user_id,
            name: User.find(review.user_id).name
          },
          rating: review.rating,
          content: review.content,
          date: review.updated_at
        }
      }.to_json
    else
      render json: {
        status: 500,
        errors: review.errors
      }.to_json
    end
  end

  def destroy
    review = Review.find(params[:id])
    recipe_id = review.recipe_id
    review.destroy
    calculate_total_rating(Recipe.find(recipe_id))
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :recipe_id, :rating, :content)
  end

  def calculate_total_rating(recipe)
    rating_total = 0.0

    reviews = Review.where(recipe_id: recipe.id)
    reviews.each do |r|
      rating_total += r.rating
    end

    if !reviews.empty?
      recipe.total_rating = (rating_total / reviews.length).round(2)
    else
      recipe.total_rating = 0
    end
    recipe.save
  end
end
