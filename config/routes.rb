Rails.application.routes.draw do

  namespace :api do
    resources :locations, only: [:index, :new, :create]
    resources :activities, only: [:index]
    resources :users, only: [:new] do
      resources :favourites, except: [:update]
    end
  end

end
