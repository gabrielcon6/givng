class User < ApplicationRecord
    has_secure_password
    has_many :givngs
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: true
    validates   :password, :presence => true,
                :confirmation => true,
                :length => {:within => 6..12},
                :on => :create,
                :on => :update
  end
  