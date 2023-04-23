class AdminsController < ApplicationController
  skip_before_action :authorize_user
  
  # PATCH /admin/users/:id **Admin users can only update a user's role**
  def update_user
    user = find_user
    if user == @current_user
      render json: { errors: 'Current user role cannot be updated' }, status: :unprocessable_entity
    else
      user.update!(user_params)
      render json: user
    end
  end

  # DELETE /admin/users/:id
  def destroy_user
    user = find_user
    if user == @current_user
      render json: { errors: 'Current user cannot be deleted' }, status: :unprocessable_entity
    else
      user.destroy
      head :no_content
    end
  end

  private

  def user_params
    params.permit(:is_admin)
  end
end