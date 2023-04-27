class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :is_admin
  has_one :profile
end
