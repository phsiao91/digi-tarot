Rails.application.routes.draw do
  resources :tarots
  resources :readings
  resources :cards
  resources :users
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
end
