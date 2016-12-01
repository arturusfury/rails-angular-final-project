require 'rails_helper'

RSpec.describe 'Recipes', type: :request do
  let(:user) { FactoryGirl.create :tim }

  describe 'GET /recipes' do
    it 'returns all of our recipes' do
      FactoryGirl.create :prime_rib, user_id: user.id
      FactoryGirl.create :chicken_wings, user_id: user.id

      get '/api/v1/recipes'

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      recipe_titles = body.map { |recipe| recipe['title'] }
      expect(recipe_titles).to match_array(
        [
          'Grilled Prime Rib',
          'Baked Chicken Wings'
        ]
      )
    end
  end

  describe 'GET /recipes/:id' do
    it 'should return the specified recipe' do
      FactoryGirl.create :prime_rib, user_id: user.id

      get '/api/v1/recipes/3'

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      recipe_title = body['title']
      expect(recipe_title).to eq('Grilled Prime Rib')
      expect(recipe_title).to_not eq('Baked Chicken Wings')
    end
  end

  describe 'POST /recipes' do
    before do
      recipe = {
        recipe: {
          user_id: user.id,
          title: 'Grilled Prime Rib',
          description: 'This is a classic prime rib recipe cooked on the grill. The secret is to keep the temperature low enough during cooking and to remove it immediately from the grill once done. Be sure to grill indirectly and also use a drip pan to catch those delicious drippings.',
          image_url: 'http://f.tqn.com/y/bbq/1/W/k/H/1/GettyImages-183369518.jpg',
          dish_type: 'Main Course',
          total_servings: 14,
          prep_time: 20,
          cook_time: 180,
          total_rating: 1.2,
          ingredients_attributes: [{
            amount: 1,
            measure: 'cup',
            name: 'flour'
          }]
        }
      }

      post '/api/v1/recipes',
        params: recipe.to_json,
        headers: { 'Content-Type': 'application/json' }

      @body = JSON.parse(response.body)
    end

    it 'creates a new recipe' do
      expect(response.status).to eq 201
      expect(@body['message']).to eq('Recipe successfully created!')
    end

    it 'creates associated models' do
      expect(@body['recipe']['ingredients'][0]['name']).to eq('flour')
    end

    describe 'after creation it' do
      it 'should have the correct title' do
        expect(@body['recipe']['title']).to eq('Grilled Prime Rib')
      end

      it 'should contain the correct cook/prep times' do
        expect(@body['recipe']['prep_time']).to eq(20)
        expect(@body['recipe']['cook_time']).to eq(180)
      end

      it 'should belong to a user' do
        expect(@body['recipe']['user_info']['id']).to eq(user.id)
        expect(@body['recipe']['user_info']['name']).to eq('Tim Thomas')
      end
    end

    it 'should fail if it does not belong to a user' do
      recipe = {
        recipe: {
          title: 'Grilled Prime Rib',
          description: 'This is a classic prime rib recipe cooked on the grill. The secret is to keep the temperature low enough during cooking and to remove it immediately from the grill once done. Be sure to grill indirectly and also use a drip pan to catch those delicious drippings.',
          image_url: 'http://f.tqn.com/y/bbq/1/W/k/H/1/GettyImages-183369518.jpg',
          dish_type: 'Main Course',
          total_servings: 14,
          prep_time: 20,
          cook_time: 180,
          total_rating: 1.2
        }
      }

      post '/api/v1/recipes',
        params: recipe.to_json,
        headers: { 'Content-Type': 'application/json' }

      expect(response.status).to eq 500
    end
  end

  describe 'PUT /recipes/:id' do
    before do
      FactoryGirl.create :prime_rib, user_id: user.id
    end

    it 'updates the recipes title' do
      recipe = {
        recipe: {
          title: 'Delicious Prime Rib'
        }
      }

      put "/api/v1/recipes/10",
        params: recipe.to_json,
        headers: { 'Content-Type': 'application/json' }

      body = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(body['message']).to eq('Recipe successfully updated!')

      recipe_title = body['recipe']['title']
      expect(recipe_title).to eq('Delicious Prime Rib')
    end
  end

  describe 'DELETE /recipes/:id' do
    before do
      FactoryGirl.create :recipe_with_ingredients, user_id: user.id
    end

    it 'deletes a recipe' do
      delete "/api/v1/recipes/11"
      expect(response.status).to eq 204
    end

    it 'removes an associated models' do
      delete "/api/v1/recipes/12"
      expect(Ingredient.all).to eq(0)
    end
  end
end
