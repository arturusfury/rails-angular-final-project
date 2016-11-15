class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :user_id
      t.float :total_rating
      t.integer :total_servings
      t.string :description
      t.string :image_url
      t.string :dish_type
    end
  end
end
