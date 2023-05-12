class Expansion < ApplicationRecord
  has_one_attached :image
  has_many :cards, -> { order(serial: :asc) }, dependent: :destroy
end
