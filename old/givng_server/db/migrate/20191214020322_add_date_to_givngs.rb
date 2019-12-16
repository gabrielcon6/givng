class AddDateToGivngs < ActiveRecord::Migration[6.0]
  def change
    add_column :givngs, :date, :date
  end
end
