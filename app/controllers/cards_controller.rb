class CardsController < ApplicationController
    skip_before_action :confirm_authentication

    def show
        render json: Card.all, status: :ok
    end
    
end
