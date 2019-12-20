class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.decimal :budget, precision: 10, scale: 2
      t.integer :givng_id

      t.timestamps
    end
  end
end
