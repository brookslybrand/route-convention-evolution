Rails.application.routes.draw do
  scope :auth do
    get 'login', to: 'auth#login'
    get 'logout', to: 'auth#logout'
    get 'signup', to: 'auth#signup'
  end

  scope :public do
    get 'about-us', to: 'public#about_us'
    get 'contact', to: 'public#contact'
    root to: 'public#index'
  end

  scope :dashboard do
    resources :calendar, only: [:index] do
      get ':day', to: 'calendar#day', on: :collection
    end

    resources :projects, only: [:index, :new] do
      member do
        get 'collaborators'
        get 'edit'
        get 'settings'
        get 'print'
      end
      
      resources :tasks, only: [:show], param: :task_id
    end

    root to: 'dashboard#index'
  end

  root to: 'public#index'
end 