RSpec.describe User, type: :model do
  it { should respond_to :name }
  it do
    should validate_presence_of(:name)
      .with_message('Must have a full name')
  end

  it { should respond_to :email }
  it do
    should validate_presence_of(:email)
      .with_message('Must have a valid Email Address')
  end
  it do
    should validate_uniqueness_of(:email)
      .with_message('Email Address is already in use')
      .case_insensitive
  end

  it { should respond_to :username }
  it do
    should validate_presence_of(:username)
      .with_message('Must have a valid username')
  end
  it do
    should validate_uniqueness_of(:username)
      .with_message('Username already exists')
  end
end
