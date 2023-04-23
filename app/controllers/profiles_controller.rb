class ProfilesController < ApplicationController
  skip_before_action :require_login, :authenticate_admin

  private

  def profile_params
    params.permit(:display_name, :avatar)
  end
end
