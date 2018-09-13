class UserMailer < ApplicationMailer
  default from: 'everybody@appacademy.io'

  def welcome_email(user)
    @user = user
    @url  = 'localhost:3000/session/new'
    mail(to: user.email, subject: 'Welcome to 99 Cats! The best cat rental site')
  end

end
