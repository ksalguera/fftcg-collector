class CollectionsController < ApplicationController
  skip_before_action :require_login
  skip_before_action :authenticate_admin
  skip_before_action :authorize_user

  def index
    render json: Collection.all
  end
  
  # POST /collections
  def create
    collected_card = Collection.create!(collected_card_params.merge(user_id: current_user.id))
    render json: collected_card
  end

  # DELETE /collections/:id

  private

  def collected_card_params
    params.permit(:card_id, :variant)
  end
end
