class ExpansionsController < ApplicationController
  skip_before_action :require_login, only: [:index, :show]
  skip_before_action :authenticate_admin, only: [:index, :show]
  skip_before_action :authorize_user
  
  # GET /expansions
  def index
    render json: Expansion.all, include: ['cards', 'cards.variants']
  end
  
  # GET /expansions/:name
  def show 
    name = params[:name]
    expansion = Expansion.where("name ILIKE ?", name).first
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
    params.permit(:name, :release_date, :image)
  end
end
