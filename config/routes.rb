Rails.application.routes.draw do

  namespace :api do
    resources :locations, only: [:index, :create, :destroy]
    resources :activities, only: [:index]
    resources :users, only: [] do
      resources :favourites, only: [:index, :create, :destroy]
    end
  end

end
