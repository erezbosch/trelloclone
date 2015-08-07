Rails.application.routes.draw do
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  root to: 'root#root'
  resources :boards, except: [:new, :edit], defaults: { format: :json }
  resources :lists, only: [:create, :update, :destroy], defaults: { format: :json }
  resources :cards, only: [:create, :update, :destroy], defaults: { format: :json } do
    resources :items, only: :index, defaults: { format: :json }
  end
  resources :items, only: [:create, :update, :destroy], defaults: { format: :json }
end
