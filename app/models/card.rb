class Card < ApplicationRecord
  has_one_attached :image
  belongs_to :expansion
  has_many :card_variants, dependent: :destroy
  has_many :variants, through: :card_variants
  has_many :collections, dependent: :destroy
  has_many :cards, through: :collections
  
  validates :name, { presence: true, length: { minimum: 2, maximum: 25 } }
  validates :serial, { presence: true, uniqueness: true, length: { minimum: 6, maximum: 7 } }
  validates :card_type, inclusion: { in: ['Forward', 'Backup', 'Summon', 'Monster'] }
  validates :card_job, { presence: true, length: { maximum: 30 } }
  validates :cost, { presence: true, inclusion: { in: 1..11 } }
  validates :power, numericality: { less_than_or_equal_to: 15000 }

  before_update :remove_unused_variants

  private

  def remove_unused_variants
    return if variant_ids.nil?
    current_variant_ids = variants.pluck(:id)
    unused_variant_ids = current_variant_ids.select { |id| !variant_ids.include?(id) }
    variants.where(id: unused_variant_ids).destroy_all unless unused_variant_ids.empty?
  end
end
