Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'

      get '/recipes/top', to: 'recipes#top'
      get '/recipes/latest', to: 'recipes#latest'
      get '/recipes/user/:username', to: 'recipes#user_recipes'

      resources :recipes
      resources :reviews, only: [:create, :destroy]
      resources :ingredients, only: [:index]
    end
  end
end
