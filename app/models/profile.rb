class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :avatar, service: :amazon_profile

  validates :display_name, { presence: true, length: { minimum: 4, maximum: 15 } }
end
