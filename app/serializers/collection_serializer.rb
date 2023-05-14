class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :variant
  belongs_to :card
  belongs_to :profile
end
