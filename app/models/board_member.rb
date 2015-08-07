class BoardMember < ActiveRecord::Base
  validates :user, :board, presence: true
  belongs_to :user
  belongs_to :board
end
