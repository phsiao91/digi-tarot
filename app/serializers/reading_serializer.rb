class ReadingSerializer < ActiveModel::Serializer
  attributes :id, :question
  has_one :user
end
