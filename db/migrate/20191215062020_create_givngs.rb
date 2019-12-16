class CreateGivngs < ActiveRecord::Migration[6.0]
  def change
    create_table :givngs do |t|
      t.string :name
      t.string :theme
      t.integer :user_id
      t.date :date
      t.decimal :budget

      t.timestamps
    end
  end
end
