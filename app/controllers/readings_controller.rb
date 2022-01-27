class ReadingsController < ApplicationController

    def create
        reading = @current_user.readings.create(reading_params)
        if reading.valid?
            render json: reading, status: :ok
        else
            render json: {error: "please put in a question"}, status: :unauthorized
        end
    end
end


private

def reading_params
    params.permit(:question, :user_id)
end
