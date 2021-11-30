class ReadingsController < ApplicationController

    def create
        reading = @current_user.reading.create(reading_params)
        if reading.valid?
            render json: reading, status: :ok
        else
            render json: {error: "please put in a question"}, status: :unauthorized
        end
    end
end
