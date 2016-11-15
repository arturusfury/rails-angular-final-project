Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end

    namespace :v1 do
      resources :recipes
    end
  end
end
