RSpec.describe Review, type: :model do
  describe 'Reviews' do
    it { should belong_to(:user) }
    it { should belong_to(:recipe) }
  end
end
