class CollectionsController < ApplicationController
  skip_before_action :authenticate_admin
  skip_before_action :authorize_user

  def index
    render json: Collection.all
  end
  
  # PUT /update-collection
  def update_collection
    profile_id = current_user.profile.id
    variants = params[:variants]
    
    # remove all instances where the card variant is not in the params - limited to the profile and card
    Collection.where(profile_id: profile_id, card_id: params[:card_id]).where.not(variant: variants).destroy_all
    
    # find or create by the variant params
    variants.each do |variant|
      collected_card = Collection.find_or_create_by(variant: variant, profile_id: profile_id, card_id: params[:card_id])
    end

    render json: current_user.profile.collections, status: :ok
  end

  private

  def collected_card_params
    params.permit(:card_id, variants: [])
  end
end
