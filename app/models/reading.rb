class Reading < ApplicationRecord
  belongs_to :user
  has_many :saves
end
