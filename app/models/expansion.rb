class Expansion < ApplicationRecord
  has_one_attached :image
  has_many :cards, -> { order(serial: :asc) }, dependent: :destroy

  validates :name,  { presence: true, length: { minimum: 2, maximum: 30 } }
  validates :release_date, presence: true
  validates :normal, presence: true
  validates :normal_foil, presence: true
  validates :special, presence: true
  validates :special_foil, presence: true
  validates :full_art, presence: true
  validates :full_art_foil, presence: true
end
