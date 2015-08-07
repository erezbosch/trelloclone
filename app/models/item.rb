class Item < ActiveRecord::Base
  validates :card, :title, presence: true
  belongs_to :card
end
