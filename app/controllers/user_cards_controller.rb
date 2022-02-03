class UserCardsController < ApplicationController
    skip_before_action :confirm_authentication


    def create
        card = @current_user.readings.last.user_cards.create(user_cards_params)
        if card.valid?
            render json: card, status: :created
        else
            render json: {error: "internal server error"}, status: :not_acceptable
        end
    end



    private

    def user_cards_params
        params.permit(:name, :image, :meaning, :reading_id)
    end
end
