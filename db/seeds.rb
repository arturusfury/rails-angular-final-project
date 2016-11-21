# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do
  name = Faker::Name.name
  email = Faker::Internet.email(name)
  password = Faker::Internet.password(8)

  User.create(
    provider: 'email',
    name: name,
    email: email,
    password: password,
    password_confirmation: password
  )
end

User.create(
  provider: 'email',
  name: 'Tim Thomas',
  email: 'tthomas@gmail.com',
  password: 'password',
  password_confirmation: 'password'
)

# Grilled Prime Rib Recipe
@prime_rib = Recipe.create(
  title: 'Grilled Prime Rib',
  user_id: rand(1..10),
  total_rating: rand(1.0...5.0).to_s[0..2].to_f,
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
  user_id: rand(1..10),
  recipe_id: 1,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

# Roasted Salmon
@roasted_salmon = Recipe.create(
  title: 'Grilled Salmon',
  user_id: rand(1..10),
  total_rating: rand(1.0...5.0).to_s[0..2].to_f,
  total_servings: 6,
  prep_time: 15,
  cook_time: 16,
  description: 'A simple soy sauce and brown sugar marinade, with hints of lemon and garlic, are the perfect salty-sweet complement to rich salmon fillets. Even my 9 year old loves this recipe!',
  image_url: 'http://images.media-allrecipes.com/userphotos/720x405/800839.jpg',
  dish_type: 'Main Course'
)

@salmon_filet = Ingredient.create(
  name: 'Salmon Filet'
)

@soy_sauce = Ingredient.create(
  name: 'Soy Sauce'
)

@brown_sugar = Ingredient.create(
  name: 'Brown Sugar'
)

@water = Ingredient.create(
  name: 'Water'
)

@vegetable_oil = Ingredient.create(
  name: 'Vegetable Oil'
)

Item.create(
  amount: 1.5,
  measure: 'lbs',
  recipe_id: @roasted_salmon.id,
  ingredient_id: @salmon_filet.id
)
Item.create(
  amount: 0.33,
  measure: 'cups',
  recipe_id: @roasted_salmon.id,
  ingredient_id: @soy_sauce.id
)
Item.create(
  amount: 0.33,
  measure: 'cups',
  recipe_id: @roasted_salmon.id,
  ingredient_id: @brown_sugar.id
)
Item.create(
  amount: 0.33,
  measure: 'cups',
  recipe_id: @roasted_salmon.id,
  ingredient_id: @water.id
)
Item.create(
  amount: 0.25,
  measure: 'tbsp',
  recipe_id: @roasted_salmon.id,
  ingredient_id: @vegetable_oil.id
)

Direction.create(
  recipe_id: @roasted_salmon.id,
  step: 1,
  text: 'Season salmon fillets with lemon pepper, garlic powder, and salt.'
)

Direction.create(
  recipe_id: @roasted_salmon.id,
  step: 2,
  text: 'In a small bowl, stir together soy sauce, brown sugar, water, and vegetable oil until sugar is dissolved. Place fish in a large resealable plastic bag with the soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours.'
)

Direction.create(
  recipe_id: @roasted_salmon.id,
  step: 3,
  text: 'Preheat grill for medium heat.'
)

Direction.create(
  recipe_id: @roasted_salmon.id,
  step: 4,
  text: 'Lightly oil grill grate. Place salmon on the preheated grill, and discard marinade. Cook salmon for 6 to 8 minutes per side, or until the fish flakes easily with a fork.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @roasted_salmon.id,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

# Bacon-Cheddar Bites
@bacon_bites = Recipe.create(
  title: 'Bacon-Cheddar Bites',
  user_id: rand(1..10),
  total_rating: rand(1.0...5.0).to_s[0..2].to_f,
  total_servings: 24,
  prep_time: 15,
  cook_time: 30,
  description: 'These Smokey, cheesy tarlets can be part of a bunrch or evening party spread!',
  image_url: 'https://www.pamperedchef.com/iceberg/com/recipe/88195-lg.jpg',
  dish_type: 'Appetizer & Snacks'
)

@pie_crust = Ingredient.create(
  name: 'Pie Crusts, softened according to package directions'
)

@bacon = Ingredient.create(
  name: 'Bacon'
)

@plum_tomatoes = Ingredient.create(
  name: 'Plum Tomatoes'
)

@cheddar_cheese = Ingredient.create(
  name: 'Shredded Cheddar Cheese'
)

@dijon_mustard = Ingredient.create(
  name: 'Dijon Mustard'
)

Item.create(
  amount: 2,
  recipe_id: @bacon_bites.id,
  ingredient_id: @pie_crust.id
)
Item.create(
  amount: 8,
  measure: 'slices',
  recipe_id: @bacon_bites.id,
  ingredient_id: @bacon.id
)
Item.create(
  amount: 2,
  recipe_id: @bacon_bites.id,
  ingredient_id: @plum_tomatoes.id
)
Item.create(
  amount: 1,
  measure: 'cups',
  recipe_id: @bacon_bites.id,
  ingredient_id: @cheddar_cheese.id
)
Item.create(
  amount: 2,
  measure: 'tsp',
  recipe_id: @bacon_bites.id,
  ingredient_id: @dijon_mustard.id
)
Item.create(
  amount: 1,
  measure: 'tbsp',
  recipe_id: @bacon_bites.id,
  ingredient_id: @garlic.id
)

Direction.create(
  recipe_id: @bacon_bites.id,
  step: 1,
  text: 'Preheat oven to 400°F (200°C). Unroll pie crust onto lightly floured surface. Spacing closely together, cut 12 disks from crust using outer tube of Measure-All® Cup (nine around outside edge and three in center). Press disks into wells of Deluxe Mini-Muffin Pan using Mini-Tart Shaper. Repeat with remaining crust. Bake 8-10 minutes or until golden brown.'
)

Direction.create(
  recipe_id: @bacon_bites.id,
  step: 2,
  text: 'Meanwhile, stack bacon; thinly slice using Utility Knife. Cook bacon in (8-in./20-cm) Sauté Pan over medium-high heat 10-12 minutes or until crisp. Remove bacon to paper towel-lined plate; cool slightly. Meanwhile, cut tomatoes in half using clean Utility Knife; scrape out seeds and dice. Chop bacon with Food Chopper. In Classic Batter Bowl, combine bacon, tomatoes, cheddar cheese, cream cheese, mustard and garlic pressed with Garlic Press; mix well.'
)

Direction.create(
  recipe_id: @bacon_bites.id,
  step: 3,
  text: 'Remove pan from oven to Stackable Cooling Rack. Using Adjustable Measuring Spoon, fill each cup with about 1 tbsp (15 mL) of the cheese mixture. Bake 5-7 minutes or until cheese is melted. Garnish with green onions and additional tomato, if desired.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @bacon_bites.id,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

# No Knead Artisian Bread
@no_knead_bread = Recipe.create(
  title: 'No Knead Crusty Artisian Bread',
  user_id: rand(1..10),
  total_rating: rand(1.0...5.0).to_s[0..2].to_f,
  total_servings: 10,
  prep_time: 15,
  cook_time: 30,
  description: 'One of my most reader-tested and approved recipes! This crusty, fluffy artisan bread needs only 4 ingredients and 5 minutes to come together… you won’t believe how easy and delicious it is!',
  image_url: 'http://www.thecomfortofcooking.com/wp-content/uploads/2013/04/NoKneadCrustyArtisanBread5.jpg',
  dish_type: 'Bread'
)

@all_purpose_flour = Ingredient.create(
  name: 'All-Purpose Flour'
)

@kohser_salt = Ingredient.create(
  name: 'Kosher Salt'
)

@dry_yeast = Ingredient.create(
  name: 'Dry Yeast'
)

@dutch_oven = Ingredient.create(
  name: 'Dutch Oven'
)

Item.create(
  amount: 3,
  measure: 'cups',
  recipe_id: @no_knead_bread.id,
  ingredient_id: @all_purpose_flour.id
)
Item.create(
  amount: 2,
  measure: 'tsp',
  recipe_id: @no_knead_bread.id,
  ingredient_id: @kohser_salt.id
)
Item.create(
  amount: 0.5,
  measure: 'tsp',
  recipe_id: @no_knead_bread.id,
  ingredient_id: @dry_yeast.id
)
Item.create(
  amount: 1.5,
  measure: 'cups',
  recipe_id: @no_knead_bread.id,
  ingredient_id: @water.id
)
Item.create(
  recipe_id: @no_knead_bread.id,
  ingredient_id: @dutch_oven.id
)

Direction.create(
  recipe_id: @no_knead_bread.id,
  step: 1,
  text: 'In a large bowl, stir together the flour, salt and yeast. Stir in water using a wooden spoon until the mixture forms a shaggy but cohesive dough. Do not over-work the dough. The less you "work" it, the more soft, fluffy air pockets will form.'
)

Direction.create(
  recipe_id: @no_knead_bread.id,
  step: 2,
  text: 'Cover bowl tightly with plastic wrap. Let dough sit at room temperature for 8-24 hours*. Dough will bubble up and rise.'
)

Direction.create(
  recipe_id: @no_knead_bread.id,
  step: 3,
  text: 'After dough is ready, preheat oven to 450 degrees F. Place your Dutch oven, uncovered, into the preheated oven for 30 minutes.'
)

Direction.create(
  recipe_id: @no_knead_bread.id,
  step: 4,
  text: 'While your Dutch oven preheats, turn dough onto a well-floured surface. With floured hands, form the dough into a ball. Cover dough loosely with plastic wrap and let rest.'
)

Direction.create(
  recipe_id: @no_knead_bread.id,
  step: 5,
  text: 'After the 30 minutes are up, carefully remove Dutch oven. With floured hands, place the bread dough into it. (You can put a piece of parchment under the dough if your Dutch oven isn’t enamel coated.)'
)

Direction.create(
  recipe_id: @no_knead_bread.id,
  step: 6,
  text: 'Replace cover and bake for 30 minutes covered. Carefully remove cover and bake for 7-15 minutes* more, uncovered.'
)

Direction.create(
  recipe_id: @no_knead_bread.id,
  step: 7,
  text: 'Carefully remove bread to a cutting board and slice with a bread knife.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @no_knead_bread.id,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

# Cast Iron Cornbread
@cast_iron_cornbread = Recipe.create(
  title: 'Cast Iron Cornbread',
  user_id: rand(1..10),
  total_rating: rand(1.0...5.0).to_s[0..2].to_f,
  total_servings: 12,
  prep_time: 5,
  cook_time: 35,
  description: "This recipe is for a very simple, easy to make cornbread that everyone in the family will love!  Just in case you needed to know: Sorghum syrup is made from the sweet juice of the sorghum plant, a variety of cereal grass. It's popular in the south as a sweetener for baked goods. You can find it at natural food stores or specialty online retailers.",
  image_url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2014/6/27/1/ZD0212H_Cast-Iron-Skillet-Cornbread_s4x3.jpg.rend.sni12col.landscape.jpeg',
  dish_type: 'Bread'
)

@coconut_oil = Ingredient.create(
  name: 'Melted Coconut Oil'
)

@yellow_cornmeal = Ingredient.create(
  name: 'Yellow Cornmeal'
)

@baking_powder = Ingredient.create(
  name: 'Baking Powder'
)

@kosher_salt = Ingredient.create(
  name: 'Kosher Salt'
)

@almond_milk = Ingredient.create(
  name: 'Almond Milk, or Regular Milk at room temperature'
)

@applesauce = Ingredient.create(
  name: 'Applesauce, at room temperature'
)

@sorghum = Ingredient.create(
  name: 'Sorghum'
)

@egg = Ingredient.create(
  name: 'Egg, at room temperature'
)

Item.create(
  amount: 3,
  measure: 'tbsp',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @coconut_oil.id
)
Item.create(
  amount: 1,
  measure: 'cups',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @yellow_cornmeal.id
)
Item.create(
  amount: 1,
  measure: 'cups',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @all_purpose_flour.id
)
Item.create(
  amount: 1,
  measure: 'tbsp',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @baking_powder.id
)
Item.create(
  amount: 1,
  measure: 'tsp',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @kosher_salt.id
)
Item.create(
  amount: 1,
  measure: 'cup',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @almond_milk.id
)
Item.create(
  amount: 0.25,
  measure: 'cup',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @applesauce.id
)
Item.create(
  amount: 0.25,
  measure: 'cup',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @sorghum.id
)
Item.create(
  amount: 1,
  measure: 'large',
  recipe_id: @cast_iron_cornbread.id,
  ingredient_id: @egg.id
)

Direction.create(
  recipe_id: @cast_iron_cornbread.id,
  step: 1,
  text: 'Preheat the oven to 375 degrees F'
)

Direction.create(
  recipe_id: @cast_iron_cornbread.id,
  step: 2,
  text: 'Add 1 tablespoon of the coconut oil to a 6-inch cast-iron skillet. Put the skillet in the oven and allow to heat until very hot, 6 to 8 minutes.'
)

Direction.create(
  recipe_id: @cast_iron_cornbread.id,
  step: 3,
  text: 'Combine the cornmeal, flour, baking powder and salt in a large bowl with a whisk. In a different bowl, combine the almond milk, applesauce, sorghum, egg and the remaining 2 tablespoons coconut oil. Make a well in the center of the dry ingredients and pour in the wet. Fold to combine.'
)

Direction.create(
  recipe_id: @cast_iron_cornbread.id,
  step: 4,
  text: 'Carefully remove the hot cast-iron skillet from the oven and pour in the batter. Return the skillet to the oven and bake until golden with a crisp crust, 25 minutes.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @cast_iron_cornbread.id,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @cast_iron_cornbread.id,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @cast_iron_cornbread.id,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @cast_iron_cornbread.id,
  rating: 4,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

# Baked Chicken Wings
@baked_chicken_wings = Recipe.create(
  title: 'Baked Chicken Wings',
  user_id: rand(1..10),
  total_rating: rand(1.0...5.0).to_s[0..2].to_f,
  total_servings: 20,
  prep_time: 80,
  cook_time: 60,
  description: "A super easy chicken wing recipe that doens't get your hands all greasy!",
  image_url: 'http://images-gmi-pmc.edge-generalmills.com/d5ea92bc-de94-44d4-be68-76db8cc6ce65.jpg',
  dish_type: 'Appetizer'
)

@chicken_wings = Ingredient.create(
  name: 'Chicken Wings'
)

@salt = Ingredient.create(
  name: 'Salt'
)

@pepper = Ingredient.create(
  name: 'Pepper'
)

@hot_sauce = Ingredient.create(
  name: 'Hot Sauce'
)

@cayenne_pepper = Ingredient.create(
  name: 'Cayenne Pepper'
)

@garlic_powder = Ingredient.create(
  name: 'Garlic Powder'
)

@melted_butter = Ingredient.create(
  name: 'Melted Butter'
)

Item.create(
  amount: 20,
  measure: '',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @chicken_wings.id
)
Item.create(
  amount: 0.5,
  measure: 'tsp',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @salt.id
)
Item.create(
  amount: 1,
  measure: 'tbsp',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @pepper.id
)
Item.create(
  amount: 0.75,
  measure: 'cups',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @hot_sauce.id
)
Item.create(
  amount: 1,
  measure: 'tbsp',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @vegetable_oil.id
)
Item.create(
  amount: 0.75,
  measure: 'cups',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @all_purpose_flour.id
)
Item.create(
  amount: 0.5,
  measure: 'tsp',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @cayenne_pepper.id
)
Item.create(
  amount: 0.5,
  measure: 'tsp',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @garlic_powder.id
)
Item.create(
  amount: 0.5,
  measure: 'cup',
  recipe_id: @baked_chicken_wings.id,
  ingredient_id: @melted_butter.id
)

Direction.create(
  recipe_id: @baked_chicken_wings.id,
  step: 1,
  text: 'Line a rimmed baking sheet with foil. Set a wire rack on the baking sheet and coat it with cooking spray.'
)

Direction.create(
  recipe_id: @baked_chicken_wings.id,
  step: 2,
  text: 'Place the salt, pepper, 1 tablespoon hot sauce, and vegetable oil in a resealable plastic bag, and shake to mix. Add the chicken wings, seal, and toss until well coated.'
)

Direction.create(
  recipe_id: @baked_chicken_wings.id,
  step: 3,
  text: 'Place the flour, cayenne pepper, and garlic powder in another resealable plastic bag, and shake to mix. Pour the chicken wings from the first bag into the flour bag, seal, and toss until well coated with the flour mixture. Place the wings onto the prepared baking sheet rack, and place into the refrigerator for at least 1 hour.'
)

Direction.create(
  recipe_id: @baked_chicken_wings.id,
  step: 4,
  text: 'Preheat oven to 400F'
)

Direction.create(
  recipe_id: @baked_chicken_wings.id,
  step: 5,
  text: 'Melt the butter in a medium microwave safe bowl. Whisk in the hot sauce. Dip the wings into the butter mixture one at a time, and place back on the baking sheet rack. Bake in the preheated oven until the chicken is no longer pink in the center, and crispy on the outside, about 1 hour. Turn the wings over halfway during cooking so they cook evenly.'
)

Direction.create(
  recipe_id: @baked_chicken_wings.id,
  step: 6,
  text: 'Serve with blue cheese dressing and celery sticks'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @baked_chicken_wings.id,
  rating: 2,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)

Review.create(
  user_id: rand(1..10),
  recipe_id: @baked_chicken_wings.id,
  rating: 3,
  content: 'Pie sugar plum macaroon halvah chupa chups jujubes. Cake cupcake cookie soufflé powder wafer gummi bears. Marshmallow soufflé fruitcake muffin. Jujubes wafer cookie jelly pastry. Sweet roll gummies icing. Lollipop lemon drops topping dessert tiramisu. Sweet jujubes topping. Oat cake gummi bears oat cake jujubes caramels toffee chocolate bar. Ice cream toffee tiramisu candy. Marzipan jelly beans danish halvah. Chocolate bar tart cookie soufflé. Gingerbread jelly beans jelly beans candy canes chocolate cake. Cake tart tart. Gummi bears jelly gummies.'
)
