class CreateDirections < ActiveRecord::Migration[5.0]
  def change
    create_table :directions do |t|
      t.integer :recipe_id
      t.integer :step
      t.string :text
    end
  end
end
