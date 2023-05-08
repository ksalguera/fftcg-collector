class UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]
  skip_before_action :authenticate_admin
  skip_before_action :authorize_user, only: [:show, :create, :update_password]
  
  # GET /account
  def show
    render json: current_user
  end
  
  # POST /users
  def create
    is_admin = (params[:email] == Rails.application.credentials.admin)
    user = User.create!(user_params.merge(is_admin: is_admin))
    session[:user_id] = user.id
    render json: user
  end

  # PATCH /users/:id
  def update
    user = find_user
    user.update!(user_params_update)
    render json: user
  end

  # DELETE /users/:id
  def destroy
    current_user.destroy
    reset_session
    head :no_content
  end

  # PATCH /change-password
  def update_password
    user = current_user
    if user&.authenticate(params[:current_password])
      user.update!(password_params.except(:current_password))
      reset_session
      render json: { message: 'Password Updated Successfully' }
    else
      render json: { errors: 'Current Password is Incorrect' }, status: :unauthorized
    end
  end

  private
  
  def user_params
    params.permit(:email, :password, :password_confirmation, profile_attributes: [:display_name])
  end

  def user_params_update
    params.permit(:email, :password, :password_confirmation, profile_attributes: [:display_name, :avatar])
  end

  def password_params
    params.permit(:password, :password_confirmation, :current_password)
  end
end
