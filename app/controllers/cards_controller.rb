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
    card = Card.find_by(serial: params[:id])
    if card.nil?
      render json: { errors: 'Card Not Found'}, status: :not_found
    else
     render json: card, include: [:expansion]
    end
  end

  # admin only actions
  
  # POST /cards
  def create
    card = Card.create!(card_params)
    render json: card
  end

  # PATCH /cards/:serial
  def update
    card = Card.find_by(serial: params[:id])
    if card.nil?
      render json: { errors: 'Card Not Found'}, status: :not_found
    else
      card.update!(card_params)
      render json: card, include: [:expansion]
    end
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
