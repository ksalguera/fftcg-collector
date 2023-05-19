class Expansion < ApplicationRecord
  has_one_attached :image
  has_many :cards, -> { order(serial: :asc) }, dependent: :destroy

  validates :name,  { presence: true, length: { minimum: 2, maximum: 30 } }
  validates :release_date, presence: true

  # calculate total normal cards
  def normal
    cards.joins(:variants).where(variants: { name: 'Normal' }).count
  end

  # calculate total normal foil cards
  def normal_foil
    cards.joins(:variants).where(variants: { name: 'Normal Foil' }).count
  end

  # calculate total sepcial cards
  def special
    cards.joins(:variants).where(variants: { name: 'Special' }).count
  end

  # calculate total special foil cards
  def special_foil
    cards.joins(:variants).where(variants: { name: 'Special Foil' }).count
  end

  # calculate total full art cards
  def full_art
    cards.joins(:variants).where(variants: { name: 'Full Art' }).count
  end

  # calculate total full art foil cards
  def full_art_foil
    cards.joins(:variants).where(variants: { name: 'Full Art Foil' }).count
  end 

  # calculate total cards
  def total_cards
    normal + normal_foil + special + special_foil + full_art + full_art_foil
  end
end
