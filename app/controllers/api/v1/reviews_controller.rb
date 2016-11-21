class Api::V1::ReviewsController < ApplicationController
  respond_to :json

  def create
    Review.create(review_params)
  end

  def destroy
    Review.find(params[:id]).destroy
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :recipe_id, :rating, :content)
  end
end
