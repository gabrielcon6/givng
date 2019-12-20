class Person < ApplicationRecord
    belongs_to :group
    validates :name, length: { :within => 1..12}

    # , :person_budget, presence: true
    validates :name, presence: true
    # validates :name, :person_budget, presence: true
    # validates_numericality_of :person_budget, :on => :create
    # validates_numericality_of :person_budget, :on => :update
    # validates :person_budget, :numericality => { :greater_than_or_equal_to => 0 }
end