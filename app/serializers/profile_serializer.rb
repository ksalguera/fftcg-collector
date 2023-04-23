class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :avatar
  has_one :user
end
