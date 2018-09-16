class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :username, :session_token, presence: true
  validates :password_digest, presence: true, message: "Password cant be blank"
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && BCrypt::Password.new(user.password_digest).is_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end