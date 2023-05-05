class Card < ApplicationRecord
  has_one_attached :image
  belongs_to :expansion
  has_many :variants, through: :cardvariants
  
  validates :name, { presence: true, length: { minimum: 2, maximum: 25 } }
  validates :serial, { presence: true, uniqueness: true, length: { minimum: 6, maximum: 7 } }
  validates :card_type, inclusion: { in: ['Forward', 'Backup', 'Summon', 'Monster'] }
  validates :card_job, { presence: true, length: { maximum: 30 } }
  validates :cost, { presence: true, inclusion: { in: 1..11 } }
  validates :power, numericality: { less_than_or_equal_to: 15000 }
end
