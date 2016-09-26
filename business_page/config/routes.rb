Rails.application.routes.draw do
    root 'messages#new'
    get 'logo' => 'messages#new'

    resources :messages, only: [:new, :create]
end
