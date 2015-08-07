class List < ActiveRecord::Base
  validates :title, :board, :ord, presence: true
  has_many :cards, dependent: :destroy
  belongs_to :board
end
