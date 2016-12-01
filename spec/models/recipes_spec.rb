RSpec.describe Recipe, type: :model do
  describe 'Ingredients' do
    it { should have_many(:ingredients) }
    it { should have_many(:directions) }
    it { should belong_to(:user) }
    it { should have_many(:reviews) }
  end
end
