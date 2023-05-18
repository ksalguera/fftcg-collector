class Collection < ApplicationRecord
  belongs_to :card
  belongs_to :profile

  def self.total_full_art_foil(collection)
    collection.where(variant: 'Full Art Foil').count
  end

  def self.expansion_stats(collection)
    expansions = Expansion.all
    expansion_data = []

    expansions.each do |expansion| 
      expansion_cards = collection.joins(:card).where(cards: { expansion_id: expansion.id })
      expansion_cards_count = expansion_cards ? expansion_cards.count : 0
      total_cards = total_cards(expansion)
      
      expansion_data << {
        id: expansion.id,
        name: expansion.name,
        total_cards: total_cards,
        profile_total_cards: expansion_cards_count,
        percent_collected: ((expansion_cards_count / total_cards.to_f)*100).round(2)
      }
    end

    expansion_data
  end

  private 

  def self.total_cards(expansion)
    expansion.normal + expansion.normal_foil + expansion.special + expansion.special_foil + expansion.full_art + expansion.full_art_foil
  end
end
