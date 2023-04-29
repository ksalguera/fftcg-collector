class ExpansionSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :total_cards, :normal, :normal_foil, :special, :special, :full_art, :full_art_foil
 
end
