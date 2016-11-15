class CreateJoinsRecipeTags < ActiveRecord::Migration[5.0]
  def change
    create_table :joins_recipe_tags do |t|
      t.integer :recipe_id
      t.integer :tag_id
    end
  end
end
