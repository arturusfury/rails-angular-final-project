# Main Application Controller
class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :json

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :name, :username, :password, :password_confirmation) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :name, :username, :password, :password_confirmation, :current_password, :admin) }
  end
end
