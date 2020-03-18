Rails.application.routes.draw do
  resources :people
  resources :groups
  resources :givngs
  # resources :users
  # resources :sessions

  root :to => 'users#new'
  # get 'signup', to: 'users#new', as: 'signup'
  # get 'login', to: 'sessions#new', as: 'login'
  # get 'logout', to: 'sessions#destroy', as: 'logout'

  post 'api/users' => 'users#create_user'
  get 'api/users/:user_id' => 'users#get_by_id'
  post 'api/users/:user_id' => 'users#update_by_id'
  delete 'api/users/:user_id' => 'users#delete_by_id'
  post '/api/auth/get_token' => 'users#get_token'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
