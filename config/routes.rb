Rails.application.routes.draw do
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  root 'root#root'
  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit] do
      resources :lists, only: :create
    end
    resources :lists, only: [:update, :destroy] do
      resources :cards, only: :create
    end
    resources :cards, only: [:create, :update, :destroy] do
      resources :items, only: :create
    end
    resources :items, only: [:update, :destroy]
  end
end
