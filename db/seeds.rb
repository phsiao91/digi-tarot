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

c11 = Card.create(name: "The Hermit", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-hermit.jpg", meaning: "If the Tarot Hermit card has a position in the divination spread referring to you, it means you tend to isolate yourself from others - either just in the present situation or as a constant personality trait. You should know which one it is.")

c12 = Card.create(name: "The Wheel of Fortune", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-wheeloffortune.jpg", meaning: "The Wheel of Fortune Tarot card image looks like a roulette. The outcome is uncertain, no matter what you do, so you can only hope to be lucky. The one thing to be expected is surprise. Sometimes fate plays tricks on us. What can we do but wish for the best?")

c13 = Card.create(name: "Justice", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-justice.jpg", meaning: "If the Tarot Justice card has a position in the divination spread referring to you, it means you have to make a judgment about a person or a situation - or a combination thereof. It's not a pleasant task, but necessary.")

c14 = Card.create(name: "The Hanged Man", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-hangedman.jpg", meaning: "If the Tarot Hanged Man card has a position in the spread referring to you, it means you are the one readily making any sacrifice needed - either in the present situation, or as a constant personality trait. You have no fear of becoming the martyr, so to speak.")

c15 = Card.create(name: "Death", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-death.jpg", meaning: "If the Tarot Death card has a position in the divination spread referring to you, it may very well be a serious warning about your health or some other very serious problem already striking you. If you can change the route you are on, you should.")

c16 = Card.create(name: "Tempress", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-temperance.jpg", meaning: "If the Tarot Temperance card position in the divination spread refers to you, it means you have ceased to act and learned patience - for the thing at hand or for good. Time will tell. It can also mean that you find yourself unable to act, although you feel the need.")

c17 = Card.create(name: "The Devil", image: "If the Tarot Devil card's position in the divination spread refers to you, it is because you have done away with many of your inhibitions and act upon your lusts and longings, even when others might be upset or even condemn it. You are sort of devilish - be it for long or just for the moment, depending on the position of the card and the question you might have asked in the divination.")

c18 = Card.create(name: "The Tower", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-tower.jpg", meaning: "If the Tarot Tower card has a position in the divination spread referring to you, it means you have a mentality that is bound for disappointment and utter failure. You need to change. You want to be drastic about things that demand patience and care. Most things do, at least the important ones.")

c19 = Card.create(name: "The Star", image: "If the Tarot Star card has a position in the divination spread referring to you, then you are caught in a serenity that some would call a coma. You halt to reconsider just about everything. That is refreshing and sometimes absolutely necessary.")

c20 = Card.create(name: "The Moon", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-moon.jpg", meaning:"If the Tarot Moon card has a position in the divination spread referring to you, it means that you are kind of a victim of longing. That can be temporary or something constant in you, depending on where the card appears and what question was asked.")

c21 = Card.create(name: "The Sun", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-sun.jpg", meaning:"If the Tarot Sun card has a position in the divination spread referring to you, it means you are in a position where you can accomplish great things, without even trying that hard. You might hurry forward beyond what is wise, just because you can. Take care. Just because you can do what you want doesn't guarantee you do what is good for you.")

c21 = Card.create(name: "Judgement", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-judgement.jpg", meaning:"If the Tarot Judgement card has a position in the divination spread that refers to you, which is rare, you are indeed the one making the final decision on the matter at hand. Still, it's not that you have much of a choice. You may even decide against your own will. It's just that you must do what the situation calls for. ")

c23 = Card.create(name: "", image: "", meaning:"")

c24 = Card.create(name: "", image: "", meaning:"")

c25 = Card.create(name: "", image: "", meaning:"")

c26 = Card.create(name: "", image: "", meaning:"")

c27 = Card.create(name: "", image: "", meaning:"")

c28 = Card.create(name: "", image: "", meaning:"")


r1 = Reading.create(question: "Will I be happy?", user_id: u1.id)

s1 = Tarot.create(name: "The Fool", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-fool.jpg", meaning: "The Tarot Fool card is a jolly one, judging from the image on it. He may be a fool, but doesn't he look happy? Maybe that's what it takes to be joyous in this world. Ignorance is bliss.", reading_id: r1.id)

s2 = Tarot.create(name: "The Magician", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-magician.jpg", meaning: "The Tarot Magician card indicates things being solved as if by magic. It can be a person making big problems disappear or splendid solutions appear as if out of nowhere. But life doesn't work like that. If it's too good to be true, it probably isn't.", reading_id: r1.id)

s3 = Tarot.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.", reading_id: r1.id)

