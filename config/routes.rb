Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'groups#index'
  resources :groups, except: [:show] do
    collection do
      get :user_search
    end
    resources :messages, only: [:index, :create]
  end
end
