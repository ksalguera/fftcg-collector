class UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]
  skip_before_action :authenticate_admin
  skip_before_action :authorize_user, only: [:show, :create]
  
  # GET /account
  def show
    render json: current_user
  end
  
  # POST /users
  def create
    user = User.create!(user_params)
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

  private
  
  def user_params
    params.permit(:email, :password, :password_confirmation, profile_attributes: [:display_name])
  end

  def user_params_update
    params.permit(:email, :password, :password_confirmation, profile_attributes: [:display_name, :avatar])
  end
end