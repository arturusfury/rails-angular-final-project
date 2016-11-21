Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end

    namespace :v1 do
      get '/recipes/main', to: 'recipes#main'
      get '/recipes/latest', to: 'recipes#latest'
      resources :recipes
      resources :reviews, only: [:create, :destroy]
      resources :ingredients, only: [:index]
    end
  end
end
