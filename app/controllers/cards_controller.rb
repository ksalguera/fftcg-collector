class CardsController < ApplicationController
  skip_before_action :require_login, only: [:index, :show]
  skip_before_action :authorize_user
  skip_before_action :authenticate_admin #remove after updating users to admin

  # GET /cards
  def index
    render json: Card.all, include: [:expansion]
  end
  
  # GET /cards/:serial
  def show 
    card = Card.find(params[:name])
    render json: card, include: [:expansion]
  end

  # admin only actions
  
  # POST /cards
  def create
    card = Card.create!(card_params)
    render json: card
  end
  
  # DELETE /cards/:id
  def destroy
    card = Card.find(params[:id])
    card.destroy
    head :no_content
  end

  private

  def card_params
    params.permit(:name, :expansion_id, :card_type, :serial, :card_job, :cost, :power, :image)
  end
end
