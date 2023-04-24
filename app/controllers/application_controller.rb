class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :require_login, :authenticate_admin, :authorize_user
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def not_authorized
    render json: { errors: ['Element Does Not Belong To User'] }, status: :unauthorized
  end

  def find_user
    User.find(params[:id])
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def admin_user
    @admin_user ||= User.find_by(is_admin: true)
  end

  def require_login
    render json: { errors: 'Access Denied' }, status: :unauthorized unless current_user
  end

  def authenticate_admin
    render json: { errors: 'Access Denied' }, status: :unauthorized unless @admin_user
  end

  def authorize_user
    user = current_user
    not_authorized unless user.id == params[:id]
  end
  
  def render_not_found_response(error)
    render json: { errors: "#{error.model} Not Found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end