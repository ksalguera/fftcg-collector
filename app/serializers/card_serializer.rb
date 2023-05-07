class CardSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :serial, :card_type, :card_job, :cost, :power, :note, :image_url
  belongs_to :expansion, serializer: ShortExpansionSerializer
  has_many :variants

  def image_url
    if object.image.attached?
      rails_blob_url(object.image, only_path: true)
    end
  end
end
