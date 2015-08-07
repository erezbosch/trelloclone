class CardAssignment < ActiveRecord::Base
  validates :card, :user, presence: true
  belongs_to :user
  belongs_to :card
end
