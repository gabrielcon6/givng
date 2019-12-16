class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.decimal :person_budget
      t.boolean :is_bought
      t.integer :group_id

      t.timestamps
    end
  end
end
