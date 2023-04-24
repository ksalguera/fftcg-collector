class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :is_admin
  has_one :profile
end
