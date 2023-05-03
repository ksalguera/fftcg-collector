class CardsController < ApplicationController
  skip_before_action :require_login, :authorize_user #remove after testing
  skip_before_action :authenticate_admin #remove after updating users to admin

    # GET /cards
    def index
      render json: Card.all, include: [:image]
    end
    
    # GET /cards/:serial
    def show 
      card = Card.find(params[:name])
      render json: card
    end
end
