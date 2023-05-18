class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create]
  skip_before_action :authenticate_admin, :authorize_user

  # POST /login
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, include: ['profile.collections', 'profile.collections.card', 'profile.collections.card.expansion']
    else
      render json: { errors: 'Incorrect Email or Password' }, status: :unauthorized
    end
  end
  
  # DELETE /logout
  def destroy
    session.delete :user_id
    head :no_content
  end
end