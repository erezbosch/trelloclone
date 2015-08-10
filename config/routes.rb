Rails.application.routes.draw do
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  root 'root#root'
  
  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit] do
      resources :lists, only: [:create, :update]
    end
    resources :lists, only: :destroy do
      resources :cards, only: [:create, :update, :destroy]
    end
    resources :cards, only: :destroy do
      resources :items, only: :create
    end
    resources :items, only: [:update, :destroy]
  end
end
