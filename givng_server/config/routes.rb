Rails.application.routes.draw do
  resources :people
  resources :groups
  resources :givngs
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
