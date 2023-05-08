class ExpansionsController < ApplicationController
  skip_before_action :require_login, only: [:index, :show]
  skip_before_action :authenticate_admin, only: [:index, :show]
  skip_before_action :authorize_user
  
  # GET /expansions
  def index
    render json: Expansion.all, include: [:image]
  end
  
  # GET /expansions/:name
  def show 
    expansion = Expansion.find_by(name: params[:id])
    render json: expansion, include: ['cards', 'cards.variants']
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
    params.permit(:name, :release_date, :normal, :normal_foil, :special, :special_foil, :full_art, :full_art_foil, :image)
  end
end
