Rails.application.routes.draw do
    root 'static_pages#home'
    get 'logo' => 'static_pages#home'

    get 'contact', to: 'messages#new', as: 'contact'
    post 'contact', to: 'messages#create'



    resources :static_pages
end
