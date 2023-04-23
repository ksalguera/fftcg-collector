class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :avatar, service: :amazon_profile
end
