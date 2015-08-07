class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presenec: true
  has_many :board_memberships, class_name: :BoardMember
  has_many :member_boards, through: :board_memberships, source: :board
  has_many :boards
  has_many :card_assignments
  has_many :cards, through: :card_assignments, source: :card
  before_validation :ensure_session_token

  attr_reader :password
end
