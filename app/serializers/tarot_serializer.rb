class TarotSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :meaning
  has_one :reading
end
