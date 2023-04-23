Rails.application.routes.draw do
  resources :profiles, only: [:update]
  resources :users, only: [:show, :create, :update, :destroy]

  namespace :admins do
    delete '/users/:id', to: 'admins#destroy_user'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
