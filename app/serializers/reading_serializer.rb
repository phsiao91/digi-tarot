class ReadingSerializer < ActiveModel::Serializer
  attributes :id, :question, :card1, :card2, :card3
  has_one :user
end
