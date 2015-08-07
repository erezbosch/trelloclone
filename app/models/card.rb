class Card < ActiveRecord::Base
  validates :title, :list, :ord, presence: true
  belongs_to :list
  has_many :card_assignments, dependent: :destroy
  has_many :users, through: :card_assignments, source: :user
  has_many :items, dependent: :destroy
end
