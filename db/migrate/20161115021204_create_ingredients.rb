class CreateIngredients < ActiveRecord::Migration[5.0]
  def change
    create_table :ingredients do |t|
      t.float :amount
      t.string :measure
      t.string :name
      t.integer :recipe_id
    end
  end
end
