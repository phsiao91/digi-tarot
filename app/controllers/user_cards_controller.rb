class UserCardsController < ApplicationController


    def create
        cards = @current_user.readings.last.user_cards.create(cards_params)
        if cards.valid?
            render json: cards, status: :ok
        else
            render json: {error: "please put in a question"}, status: :not_acceptable
        end
    end


    private

    def cards_params
        params.permit(:id, :card1, :card2, :card3, :reading_id)
    end

end
