FactoryGirl.define do
  factory :prime_rib, class: :recipe do
    title 'Grilled Prime Rib'
    user_id 1
    total_rating 5
    total_servings 14
    prep_time 20
    cook_time 180
    description 'This is a classic prime rib recipe cooked on the grill. The secret is to keep the temperature low enough during cooking and to remove it immediately from the grill once done. Be sure to grill indirectly and also use a drip pan to catch those delicious drippings.'
    image_url 'http://f.tqn.com/y/bbq/1/W/k/H/1/GettyImages-183369518.jpg'
    dish_type 'Main Course'
  end

  factory :chicken_wings, class: :recipe do
    title 'Baked Chicken Wings'
    user_id 1
    total_rating 3.7
    total_servings 20
    prep_time 80
    cook_time 60
    description ''
    image_url 'http://images-gmi-pmc.edge-generalmills.com/d5ea92bc-de94-44d4-be68-76db8cc6ce65.jpg'
    dish_type 'Appitizers & Snacks'

    factory :recipe_with_ingredients do
      transient do
        ingredients_count 2
      end

      after(:create) do |chicken_wings, evaluator|
        create_list(:ingredient, evaluator.ingredients_count, recipe_id: chicken_wings.id)
      end
    end
  end

  factory :ingredient do
    amount 1
    measure 'cup'
    name 'flour'
  end
end
