class Api::V1::ReviewsController < ApplicationController
  respond_to :json

  def create
    review = Review.create(review_params)

    ratings = Review.where(recipe_id: review.recipe_id).collect(&:rating)

    recipe = Recipe.find(review.recipe_id)
    recipe.update(total_rating: ratings.inject(0) { |a, e| a + e } / ratings.length)

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

    ratings = Review.where(recipe_id: review.recipe_id).collect(&:rating)
    recipe = Recipe.find(review.recipe_id)

    review.destroy

    recipe.update(total_rating: ratings.inject(0) { |a, e| a + e } / ratings.length)
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :recipe_id, :rating, :content)
  end
end
