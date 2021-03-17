Rails.application.routes.draw do

  namespace :api do
    resources :locations, only: [:index]
    resources :activities, only: [:index]
  end

end
