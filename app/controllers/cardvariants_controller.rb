class CardVariantsController < ApplicationController
  skip_before_action :authorize_user
  skip_before_action :authenticate_admin #remove after updating users to admin
  #wip 
  def update
    card = Card.find(params[:id])
    if card.card_variants
      card.card_variants.destroy_all
    else
      card.card_variants.create!(variant_id: variant)
    end
    render json: card
  end

  private

  def card_variant_params
    byebug
  end
end