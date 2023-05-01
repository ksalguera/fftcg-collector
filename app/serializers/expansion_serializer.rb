class ExpansionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :release_date, :total_cards, :normal, :normal_foil, :special, :special_foil, :full_art, :full_art_foil, :image_url
  
  def image_url
    if object.image.attached?
      rails_blob_url(object.image, only_path: true)
    end
  end
end
