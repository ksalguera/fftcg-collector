class Variant < ApplicationRecord
  has_many :cards, through: :cardvariants
end
