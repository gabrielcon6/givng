# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Givng.destroy_all 
# Group.destroy_all # Remove every row from the planes table 
# Person.destroy_all 


gabe = User.create(email: 'a@a.com', password_digest: BCrypt::Password.create('a'), name: 'Gabe')
xmas_gabe = Givng.create(name: 'Christmas', theme: 'Christmas', user_id: gabe.id, budget: 10000, date: "2019-12-25")
xmas_gabe = Givng.create(name: 'Easter', theme: 'Easter', user_id: gabe.id, budget: 200, date: "2020-04-12")
xmas_family = Group.create(name: 'Family', budget: 10000, givng_id: xmas_gabe.id)
xmas_friend = Group.create(name: 'Friend', budget: 5000, givng_id: xmas_gabe.id)
xmas_person = Person.create(name: 'Mom', person_budget: 9000, is_bought: false, group_id: xmas_family.id)

puts '--------> seed has been planted  <------------'