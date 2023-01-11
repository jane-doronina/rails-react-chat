# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Message.destroy_all
User.destroy_all
Channel.destroy_all

general = Channel.new(name: "general")
london = Channel.new(name: "london")
react = Channel.new(name: "react")

user1 = User.create(email: "test1@mail.ru", password: "123456")
user2 = User.create(email: "test2@mail.ru", password: "123456")
user3 = User.create(email: "test3@mail.ru", password: "123456")

message1 = Message.create(user: user1, channel: general, content: "Hey everyone")
message2 = Message.create(user: user2, channel: general, content: "Hey to you too. How are you doing?")
message3 = Message.create(user: user3, channel: general, content: "Hey, haven't heard from you for a while!")

message4 = Message.create(user: user1, channel: react, content: "Hey I have a question about react")
message5 = Message.create(user: user2, channel: react, content: "I can try to help, but I'm not an expert myself")

message6 = Message.create(user: user3, channel: london, content: "Hey, guys! Do you know any nice coworkings in London?")
message7 = Message.create(user: user2, channel: london, content: "I usually work from WeWork or different cafes")
message8 = Message.create(user: user1, channel: london, content: "Yep, I also prefer cafes. I can send you the list of my favorites")
message9 = Message.create(user: user3, channel: london, content: "Thank you! I would appreciate that")
