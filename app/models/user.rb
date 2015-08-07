class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  has_many :board_memberships, class_name: :BoardMember
  has_many :member_boards, through: :board_memberships, source: :board
  has_many :boards, dependent: :destroy
  has_many :card_assignments, dependent: :destroy
  has_many :cards, through: :card_assignments, source: :card
  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
