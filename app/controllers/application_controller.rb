class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :confirm_authentication


  private

  def current_user
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end

  def confirm_authentication
    return render json: {error: "you must be logged in to proceed"}, status: :unauthorized unless current_user
  end

end
