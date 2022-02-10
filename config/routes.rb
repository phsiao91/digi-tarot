Rails.application.routes.draw do
  resources :user_cards
  resources :tarots
  resources :readings
  resources :cards
  resources :users
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/card", to: "cards#show"
  post "/question", to: "readings#create"
  get "/reading", to: "readings#index"
  get "/readingsall", to: "readings#show"
  post "/save", to: "user_cards#create"
end
