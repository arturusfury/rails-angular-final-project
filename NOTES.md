# Notes for Angular/Rails Final

## Must have *5* pages!
  Index
  Recipe List
  Recipe Details
  Add a Recipe
  Edit a Recipe

## Must contain nested views ??

## Filtering / Searching
  Site Search for Recipes by Name
  Filtering recipes by selected tag (ie: chicken, pork)

## Servings Dynamic Updating
## Data Validation via Angular
## Must use a Rails API backend that accepts JSON objects for Angular
## Must use $http and Angular Services to talk to Rails API backend


# Recipe Models & Associations

## Recipe
  has_many :items
  has_many ingredients, through :items
  has_many :directions
  has_many :reviews

t.string :title (My Super Awesome Chicken Thing!)
t.float :total_rating (ie: 4.5 / 5)
t.integer :total_servings (ie: Serves: 4)

## Item (Joins Table for Recipes & Ingredients)
  belongs_to :recipe
  has_many :items

t.float amount
t.string measure
t.integer :recipe_id
t.integer :ingredient_id


## Ingredient
  belongs_to :item
  belongs_to :recipe, through: :item

t.string :name

## Direction


## Review
  belongs_to :recipe
  belongs_to :user

t.string :content
t.integer :rating

## Tag
  belongs_to :recipe
