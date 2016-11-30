require 'rails_helper'

RSpec.describe 'Recipes', type: :request do
  before(:each) do
    user = FactoryGirl.create :user
    FactoryGirl.create :prime_rib, user_id: user.id
    FactoryGirl.create :chicken_wings, user_id: user.id
  end

  describe 'GET /recipes' do
    it 'returns all of our recipes' do
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
      get '/api/v1/recipes/3'

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      recipe_title = body['title']
      expect(recipe_title).to eq('Grilled Prime Rib')
      expect(recipe_title).to_not eq('Baked Chicken Wings')
    end
  end
end
