class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :serial, :type, :job, :category, :cost, :power, :note
  has_one :expansion
end
