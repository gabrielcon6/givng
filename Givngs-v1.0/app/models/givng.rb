class Givng < ApplicationRecord
    has_many :groups
    belongs_to :user
    validates :name, presence: true, uniqueness: { scope: :user_id,
        message: "should happen once per user" }
    validates :name, length: { :within => 2..12}
    validates :budget, presence: true
    validates :date, presence: true
    validates_numericality_of :budget, :on => :create
    validates_numericality_of :budget, :on => :update
    validates :budget, :numericality => { :greater_than => 0 }
end
