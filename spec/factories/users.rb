FactoryGirl.define do
  factory :tim, class: :user do
    name 'Tim Thomas'
    email 'tthomas@gmail.com'
    username 'tthomas'
    password 'password'
    password_confirmation 'password'
  end
end
