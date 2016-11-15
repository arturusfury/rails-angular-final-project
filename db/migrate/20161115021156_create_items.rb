class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.float :amount
      t.string :measure
      t.integer :recipe_id
      t.integer :ingredient_id
    end
  end
end
