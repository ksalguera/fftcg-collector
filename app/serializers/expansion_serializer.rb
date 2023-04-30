class ExpansionSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :total_cards, :normal, :normal_foil, :special, :special_foil, :full_art, :full_art_foil, :image_url
  
  def image_url
    if object.image.attached?
      object.image.url
    end
  end
end
