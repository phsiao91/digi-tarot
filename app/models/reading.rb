class Reading < ApplicationRecord
  belongs_to :user
  has_many :tarots
  has_many :user_cards
end
