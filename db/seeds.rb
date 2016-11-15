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
  total_servings: 14,
  prep_time: 20,
  cook_time: 180,
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
  recipe_id: @prime_rib.id,
  ingredient_id: @garlic.id
)
Item.create(
  amount: 3,
  measure: 'sprigs',
  recipe_id: @prime_rib.id,
  ingredient_id: @rosemary.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @prime_rib.id,
  ingredient_id: @course_black_pepper.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @prime_rib.id,
  ingredient_id: @dried_rosemary.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @prime_rib.id,
  ingredient_id: @sea_salt.id
)
Item.create(
  amount: 2,
  measure: 'tbsp',
  recipe_id: @prime_rib.id,
  ingredient_id: @paprika.id
)
Item.create(
  amount: 1,
  measure: '',
  recipe_id: @prime_rib.id,
  ingredient_id: @drip_pan.id
)

Direction.create(
  recipe_id: @prime_rib.id,
  step: 1,
  text: 'Prepare grill for indirect grilling with a large dripping pan under where the roast will be. Aim for a grill temperature around 375 degrees F. Periodically add water to the pan to keep the drippings from burning away if you want to make gravy. Make sure you know the weight of your prime rib. Plan on grilling indirectly for 12 to 14 minutes per pound. If you are using a smaller roast, adjust the ingredients and cooking times accordingly.'
)

Direction.create(
  recipe_id: @prime_rib.id,
  step: 2,
  text: 'With a sharp paring knife make a series of 1/2 inch deep holes every 2 inches all over the roast. Insert the garlic slivers in every other hole and a leaf from the rosemary in the rest. Combine black pepper, dried rosemary, salt and paprika and rub over the surface of the meat. When the grill is ready, place the roast on the well oiled grate directly over the dripping pan. Cook for about 12 to 14 minutes per pound. An 18 pound roast will take about 3 1/2 to 4 hours. It is very important to use an accurate meat thermometer to check for doneness. You do not want to over cook this roast.'
)

Direction.create(
  recipe_id: @prime_rib.id,
  step: 3,
  text: 'When the meat reaches an internal temperature of 115 to 125 degrees remove it from the grill. Place it on a platter and cover loosely with foil. The meat will continue cooking and the internal temperature will continue to rise. Tent loosely wit aluminum foil and let rest for at least 15 minutes, but no more than 30. If you want the roast rare to medium rare, remove from the grill when the temperature is 115 degrees and let it rest for 15 minutes.'
)

Direction.create(
  recipe_id: @prime_rib.id,
  step: 4,
  text: 'If you want it more well done, remove from the grill at 125 degrees and let it rest for 30 minutes.'
)

Review.create(
  user_id: 1,
  recipe_id: 1,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

Tag.create(
  name: 'Beef'
)

Tag.create(
  name: 'Prime Rib'
)

Tag.create(
  name: 'Grilled'
)

Tag.create(
  name: 'Rosemary'
)

RecipeTag.create(
  tag_id: 1,
  recipe_id: 1
)

RecipeTag.create(
  tag_id: 2,
  recipe_id: 1
)

RecipeTag.create(
  tag_id: 3,
  recipe_id: 1
)

RecipeTag.create(
  tag_id: 4,
  recipe_id: 1
)
