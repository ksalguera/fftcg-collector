class ExpansionsController < ApplicationController
  #skip_before_action :require_login, only: [:index]
  skip_before_action :require_login, :authorize_user #remove after testing
  skip_before_action :authenticate_admin #remove after updating users to admin

  def index
    render json: Expansion.all
  end

  # admin only actions

  def create
    expansion = Expansion.create!(expansion_params)
    render json: expansion
  end

  def destroy
    expansion = Expansion.find(params[:id])
    expansion.destroy
    head :no_content
  end

  private
  
  def expansion_params
    params.permit(
      :name, 
      :release_date,
      :normal,
      :normal_foil,
      :special,
      :special_foil,
      :full_art,
      :full_art_foil,
      :image
    )
  end
end
