class Group < ApplicationRecord
    belongs_to :givng
    has_many :people
    validates :name, presence: true, uniqueness: { scope: :givng_id,
        message: "should happen once per givng" }
    validates :name, length: { :within => 2..12}
    validates :budget, presence: true
    validates_numericality_of :budget, :on => :create
    validates_numericality_of :budget, :on => :update
    validates :budget, :numericality => { :greater_than => 0 }
end
