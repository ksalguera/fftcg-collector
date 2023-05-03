class Card < ApplicationRecord
  has_one_attached :image
  belongs_to :expansion

  validates :type, inclusion: { in: ['forward', 'backup', 'summon', 'monster'] }
end
