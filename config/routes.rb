Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, controllers: {sessions: 'sessions', registrations: 'registrations', passwords: 'passwords'}, defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
    namespace :v1 do

      get '/recipes/top', to: 'recipes#top'
      get '/recipes/latest', to: 'recipes#latest'
      get '/recipes/user/:username', to: 'recipes#user_recipes'

      resources :recipes
      resources :reviews, only: [:create, :destroy]
      resources :ingredients, only: [:index]
    end
  end
end
