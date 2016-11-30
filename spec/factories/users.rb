FactoryGirl.define do
  factory :user do
    name 'Tim Thomas'
    email 'tthomas@gmail.com'
    username 'tthomas'
    password 'password'
    password_confirmation 'password'
  end
end
