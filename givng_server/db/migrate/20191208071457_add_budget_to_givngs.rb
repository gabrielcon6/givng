class AddBudgetToGivngs < ActiveRecord::Migration[6.0]
  def change
    add_column :givngs, :budget, :decimal
  end
end
