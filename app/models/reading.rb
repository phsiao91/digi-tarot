class Reading < ApplicationRecord
  belongs_to :user
  has_many :tarots
  has_many :user_cards, dependent: :destroy
  validates :question, presence: true
end
