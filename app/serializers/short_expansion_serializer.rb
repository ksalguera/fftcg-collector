class ShortExpansionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :name
end