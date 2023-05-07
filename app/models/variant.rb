class Variant < ApplicationRecord
  has_many :card_variants
  has_many :cards, through: :card_variants
end
