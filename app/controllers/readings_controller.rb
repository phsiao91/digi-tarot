class ReadingsController < ApplicationController
    # skip_before_action :confirm_authentication

    def create
        reading = @current_user.readings.create(reading_params)
        if reading.valid?
            render json: reading, status: :ok
        else
            render json: {error: "please put in a question"}, status: :not_acceptable
        end
    end

    def index
        render json: @current_user.readings.last, status: :ok
    end



    private

    def reading_params
        params.permit(:question, :user_id)
    end

end
