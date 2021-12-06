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

c4 = Card.create(name: "The Empress", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-empress.jpg", meaning: "While the Tarot Emperor is armed for battle and eager to engage in it, the Empress remains on her throne, relaxed, getting things done seemingly without any effort.")

c5 = Card.create(name: "The Emperor", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-emperor.jpg", meaning: "On the Tarot Emperor card, he sits firmly on the throne, but in armor - he will stand up and strike at the moment he is challenged. He tolerates nothing but obedience.")

c6 = Card.create(name: "The Hierophant", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-hierophant.jpg", meaning: "If the Tarot Hierophant card refers to a person, which is most often the case, it's someone very pompous indeed, whom it's of vital importance to treat with respect - whatever you might feel about it.")

c8 = Card.create(name: "The Lovers", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-lovers.jpg", meaning: "The Lovers Tarot card is almost parodical in its emphasized innocence. The two lovers are not even holding hands, but remaining apart, forcefully separated by an angelic figure - albeit with red instead of white wings, as a discreet indicator of passion. The Lovers card speaks more of Agape than of Eros, the non-carnal love instead of the lustful one. No sin committed - yet.")

c9 = Card.create(name: "The Chariot", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-chariot.jpg", meaning: "The Tarot Chariot card is about triumph in worldly matters. Like Caesar returning from a successful campaign, riding a chariot when receiving the cheers of the Romans. A moment of greatness, but also a risk of megalomania. Success can destroy character quicker than adversity builds it.")

c10 = Card.create(name: "Strength", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "It's very significant that on the Tarot Strength card image, she masters the lion not by forcing its jaws apart, like any Tarzan would, but by keeping them together, hiding its teeth. The lion has become harmless and its tongue suggests that it enjoys this. So, it's the strength of neutralizing strength. A beneficial paradox.")

c11 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

c12 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")



# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")

# c3 = Card.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.")


r1 = Reading.create(question: "Will I be happy?", user_id: u1.id)

s1 = Tarot.create(name: "The Fool", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-fool.jpg", meaning: "The Tarot Fool card is a jolly one, judging from the image on it. He may be a fool, but doesn't he look happy? Maybe that's what it takes to be joyous in this world. Ignorance is bliss.", reading_id: r1.id)

s2 = Tarot.create(name: "The Magician", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-magician.jpg", meaning: "The Tarot Magician card indicates things being solved as if by magic. It can be a person making big problems disappear or splendid solutions appear as if out of nowhere. But life doesn't work like that. If it's too good to be true, it probably isn't.", reading_id: r1.id)

s3 = Tarot.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.", reading_id: r1.id)

