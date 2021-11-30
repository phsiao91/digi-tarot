class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :meaning
end
