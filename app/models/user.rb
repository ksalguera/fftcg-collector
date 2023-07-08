class User < ApplicationRecord
  has_one :profile, dependent: :destroy
  accepts_nested_attributes_for :profile
  has_secure_password

  validates :email, { presence: true, uniqueness: true }
  validates :password, { length: { minimum: 6 } }
end
