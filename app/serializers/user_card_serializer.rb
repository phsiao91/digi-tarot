class UserCardSerializer < ActiveModel::Serializer
  attributes :id, :card1, :card2, :card3
  has_one :reading
end
