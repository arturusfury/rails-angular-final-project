# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
  uid: 'arturusfury',
  provider: 'email',
  name: 'Brian Reynolds',
  email: 'arturusfury@gmail.com',
  password: 'asdfasdfasdf',
  password_confirmation: 'asdfasdfasdf'
)

@prime_rib = Recipe.create(
  title: 'Grilled Prime Rib',
  user_id: 1,
  total_rating: 3.5,
  total_servings: 8,
  description: 'This is a classic prime rib recipe cooked on the grill. The secret is to keep the temperature low enough during cooking and to remove it immediately from the grill once done. Be sure to grill indirectly and also use a drip pan to catch those delicious drippings.',
  image_url: 'http://f.tqn.com/y/bbq/1/W/k/H/1/GettyImages-183369518.jpg',
  dish_type: 'Main Course'
)

@rib_roast = Ingredient.create(
  name: 'Whole Prime Rib Roast'
)

@garlic = Ingredient.create(
  name: 'Garlic'
)

@rosemary = Ingredient.create(
  name: 'Rosemary'
)

@course_black_pepper = Ingredient.create(
  name: 'Coarse Ground Black Pepper'
)

@dried_rosemary = Ingredient.create(
  name: 'Dried Rosemary'
)

@sea_salt = Ingredient.create(
  name: 'Sea Salt'
)

@paprika = Ingredient.create(
  name: 'Paprika'
)

@drip_pan = Ingredient.create(
  name: 'Aluminum Drip Pan'
)

Item.create(
  amount: 18,
  measure: 'lbs',
  recipe_id: @prime_rib.id,
  ingredient_id: @rib_roast.id
)
Item.create(
  amount: 8,
  measure: 'cloves',
  recipe_id: @garlic.id,
  ingredient_id: @rib_roast.id
)
Item.create(
  amount: 3,
  measure: 'sprigs',
  recipe_id: @rosemary.id,
  ingredient_id: @rib_roast.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @course_black_pepper.id,
  ingredient_id: @rib_roast.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @dried_rosemary.id,
  ingredient_id: @rib_roast.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @sea_salt.id,
  ingredient_id: @rib_roast.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @paprika.id,
  ingredient_id: @rib_roast.id
)
Item.create(
  amount: 1,
  measure: '',
  recipe_id: @drip_pan.id,
  ingredient_id: @rib_roast.id
)
