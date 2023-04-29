class ExpansionSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :total_cards, :normal_cards, :normal_foil_cards, :special_cards, :special_foil_cards, :full_art_regular_cards, :full_art_foil_cards
 
end
