class Collection < ApplicationRecord
  belongs_to :card
  belongs_to :profile

  def self.total_full_art_foil(collection)
    collection.where(variant: 'Full Art Foil').count
  end
end
