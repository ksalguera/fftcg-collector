class ExpansionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :release_date, :total_cards, :normal, :normal_foil, :special, :special_foil, :full_art, :full_art_foil, :total_cards, :image_url
  has_many :cards

  def image_url
    if object.image.attached?
      rails_blob_url(object.image, only_path: true)
    end
  end

  def total_cards
    object.normal + object.normal_foil + object.special + object.special_foil + object.full_art + object.full_art_foil
  end
end
