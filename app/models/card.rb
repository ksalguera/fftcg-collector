class Card < ApplicationRecord
  has_one_attached :image
  belongs_to :expansion

  validates :card_type, inclusion: { in: ['Forward', 'Backup', 'Summon', 'Monster'] }
end
