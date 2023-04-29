class ExpansionsController < ApplicationController

  def index
    render json: Expansion.all
  end
end
