class TarotsController < ApplicationController

    def show
        render json: Reading.tarots.all, status: :ok
    end
end
