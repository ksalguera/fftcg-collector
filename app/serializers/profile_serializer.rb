class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :display_name
  has_many :collections
end
