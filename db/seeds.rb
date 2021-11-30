# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Card.destroy_all
Reading.destroy_all
Tarot.destroy_all



u1 = User.create(username: "raymond", password: "12345")

c1 = Card.create(name: "The Fool", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-fool.jpg", meaning: "The Tarot Fool card is a jolly one, judging from the image on it. He may be a fool, but doesn't he look happy? Maybe that's what it takes to be joyous in this world. Ignorance is bliss.")

c2 = Card.create(name: "The Magician", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-magician.jpg", meaning: "The Tarot Magician card indicates things being solved as if by magic. It can be a person making big problems disappear or splendid solutions appear as if out of nowhere. But life doesn't work like that. If it's too good to be true, it probably isn't.")

c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

r1 = Reading.create(question: "Will I be happy?", user_id: u1.id)

s1 = Tarot.create(name: "The Fool", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-fool.jpg", meaning: "The Tarot Fool card is a jolly one, judging from the image on it. He may be a fool, but doesn't he look happy? Maybe that's what it takes to be joyous in this world. Ignorance is bliss.", reading_id: r1.id)

s2 = Tarot.create(name: "The Magician", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-magician.jpg", meaning: "The Tarot Magician card indicates things being solved as if by magic. It can be a person making big problems disappear or splendid solutions appear as if out of nowhere. But life doesn't work like that. If it's too good to be true, it probably isn't.", reading_id: r1.id)

s3 = Tarot.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.", reading_id: r1.id)
