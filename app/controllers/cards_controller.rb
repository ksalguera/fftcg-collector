class CardsController < ApplicationController
  skip_before_action :require_login, only: [:index, :show]
  skip_before_action :authenticate_admin, only: [:index, :show]
  skip_before_action :authorize_user

  # GET /cards
  def index
    render json: Card.all, include: [:expansion, :variants]
  end
  
  # GET /cards/:serial
  def show 
    card = Card.find_by(serial: params[:id])
    if card.nil?
      render json: { errors: 'Card Not Found'}, status: :not_found
    else
     render json: card, include: [:expansion, :variants]
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
    elsif params[:image]
      card.image.purge
      card.image.attach(params[:image])
      render json: card, include: [:expansion, :variants]
    else
      card.update!(card_params_update)
      render json: card, include: [:expansion, :variants]
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

  def card_params_update
    params.permit(:name, :expansion_id, :serial, :card_job, :card_type, :cost, :power, :note, :image, variant_ids: [])
  end
end
