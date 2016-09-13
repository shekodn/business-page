Rails.application.routes.draw do

    get 'static_pages/index'
    root 'static_pages#index'
    resources :static_pages

end
