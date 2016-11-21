class Api::V1::ReviewsController < ApplicationController
  respond_to :json

  def create
    review = Review.create(review_params)

    render json: {
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

  def destroy
    Review.find(params[:id]).destroy
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :recipe_id, :rating, :content)
  end
end
