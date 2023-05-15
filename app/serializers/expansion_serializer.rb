class ExpansionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :release_date, :total_cards, :normal, :normal_foil, :special, :special_foil, :full_art, :full_art_foil, :total_cards, :percent_collected, :image_url
  has_many :cards

  def image_url
    if object.image.attached?
      rails_blob_url(object.image, only_path: true)
    end
  end

  def total_cards
    object.normal + object.normal_foil + object.special + object.special_foil + object.full_art + object.full_art_foil
  end
  
  def percent_collected
    if current_user 
      expansion_cards = current_user.profile.collections.joins(:card).where(cards: { expansion_id: object.id })
      expansion_cards_count = expansion_cards ? expansion_cards.count : 0
      (expansion_cards_count / total_cards.to_f*100).round(2)
    else 
      return 0
    end
  end
end
