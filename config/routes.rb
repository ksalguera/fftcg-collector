Rails.application.routes.draw do
  resources :cards
  resources :expansions
  resources :profiles, only: [:update]
  resources :users, only: [:show, :create, :update, :destroy]
  
  get '/collections', to: 'collections#index'
  get '/collection-stats', to: 'collections#collection_statistics'
  post '/update-collection', to: 'collections#update_collection'

  get '/account', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  patch '/change-password', to: 'users#update_password'

  namespace :admins do
    delete '/users/:id', to: 'admins#destroy_user'
  end

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
