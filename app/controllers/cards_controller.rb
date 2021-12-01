class CardsController < ApplicationController

    def show
        render json: Card.all, status: :ok
    end
    
end
