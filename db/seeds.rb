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

c7 = Card.create(name: "The Lovers", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-lovers.jpg", meaning: "The Lovers Tarot card is almost parodical in its emphasized innocence. The two lovers are not even holding hands, but remaining apart, forcefully separated by an angelic figure - albeit with red instead of white wings, as a discreet indicator of passion. The Lovers card speaks more of Agape than of Eros, the non-carnal love instead of the lustful one. No sin committed - yet.")

c8 = Card.create(name: "The Chariot", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-chariot.jpg", meaning: "The Tarot Chariot card is about triumph in worldly matters. Like Caesar returning from a successful campaign, riding a chariot when receiving the cheers of the Romans. A moment of greatness, but also a risk of megalomania. Success can destroy character quicker than adversity builds it.")

c9 = Card.create(name: "Strength", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "It's very significant that on the Tarot Strength card image, she masters the lion not by forcing its jaws apart, like any Tarzan would, but by keeping them together, hiding its teeth. The lion has become harmless and its tongue suggests that it enjoys this. So, it's the strength of neutralizing strength. A beneficial paradox.")

c10 = Card.create(name: "The Hermit", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-hermit.jpg", meaning: "If the Tarot Hermit card has a position in the divination spread referring to you, it means you tend to isolate yourself from others - either just in the present situation or as a constant personality trait. You should know which one it is.")

c11 = Card.create(name: "The Wheel of Fortune", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-wheeloffortune.jpg", meaning: "The Wheel of Fortune Tarot card image looks like a roulette. The outcome is uncertain, no matter what you do, so you can only hope to be lucky. The one thing to be expected is surprise. Sometimes fate plays tricks on us. What can we do but wish for the best?")

c12 = Card.create(name: "Justice", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-justice.jpg", meaning: "If the Tarot Justice card has a position in the divination spread referring to you, it means you have to make a judgment about a person or a situation - or a combination thereof. It's not a pleasant task, but necessary.")

c13 = Card.create(name: "The Hanged Man", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-hangedman.jpg", meaning: "If the Tarot Hanged Man card has a position in the spread referring to you, it means you are the one readily making any sacrifice needed - either in the present situation, or as a constant personality trait. You have no fear of becoming the martyr, so to speak.")

c14 = Card.create(name: "Death", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-death.jpg", meaning: "If the Tarot Death card has a position in the divination spread referring to you, it may very well be a serious warning about your health or some other very serious problem already striking you. If you can change the route you are on, you should.")

c15 = Card.create(name: "Tempress", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-temperance.jpg", meaning: "If the Tarot Temperance card position in the divination spread refers to you, it means you have ceased to act and learned patience - for the thing at hand or for good. Time will tell. It can also mean that you find yourself unable to act, although you feel the need.")

c16 = Card.create(name: "The Devil", image:"https://www.tarotcardmeanings.net/images/tarotcards/tarot-devil.jpg", meaning: "If the Tarot Devil card's position in the divination spread refers to you, it is because you have done away with many of your inhibitions and act upon your lusts and longings, even when others might be upset or even condemn it. You are sort of devilish - be it for long or just for the moment, depending on the position of the card and the question you might have asked in the divination.")

c17 = Card.create(name: "The Tower", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-tower.jpg", meaning: "If the Tarot Tower card has a position in the divination spread referring to you, it means you have a mentality that is bound for disappointment and utter failure. You need to change. You want to be drastic about things that demand patience and care. Most things do, at least the important ones.")

c18 = Card.create(name: "The Star", image:"https://www.tarotcardmeanings.net/images/tarotcards/tarot-star.jpg", meaning: "If the Tarot Star card has a position in the divination spread referring to you, then you are caught in a serenity that some would call a coma. You halt to reconsider just about everything. That is refreshing and sometimes absolutely necessary.")

c19 = Card.create(name: "The Moon", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-moon.jpg", meaning:"If the Tarot Moon card has a position in the divination spread referring to you, it means that you are kind of a victim of longing. That can be temporary or something constant in you, depending on where the card appears and what question was asked.")

c20 = Card.create(name: "The Sun", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-sun.jpg", meaning:"If the Tarot Sun card has a position in the divination spread referring to you, it means you are in a position where you can accomplish great things, without even trying that hard. You might hurry forward beyond what is wise, just because you can. Take care. Just because you can do what you want doesn't guarantee you do what is good for you.")

c21 = Card.create(name: "Judgement", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-judgement.jpg", meaning:"If the Tarot Judgement card has a position in the divination spread that refers to you, which is rare, you are indeed the one making the final decision on the matter at hand. Still, it's not that you have much of a choice. You may even decide against your own will. It's just that you must do what the situation calls for. ")

c22 = Card.create(name: "The World", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-world.jpg", meaning:"Everything has a price. Jesus warned about gaining the whole world and losing one's soul in the process. The Tarot World card repeats the warning by having the four beasts of the Apocalypse in the corners: a lion, a calf, a man, and an eagle. They are also the symbols of the four Evangelists Mark, Luke, Matthew, and John. So, if you strive for the world as your oyster, heed the warnings. You can get anything at a cost, but if you crave everything - that costs a lot. Success takes its toll.")

c23 = Card.create(name: "Ace of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-01.jpg", meaning:"Every Ace is sort of an exclamation mark. Something important, even remarkable, will take place - in the case of Wands regarding your material circumstances. It's neither good nor bad, but very significant, indeed, affecting your relation to material matters.")

c24 = Card.create(name: "Two of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-02.jpg", meaning:"Longing for the world and all it has to offer, although you may already have a decent share of it.")

c25 = Card.create(name: "Three of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-03.jpg", meaning:"Missing the world and all the good things it has offered. The card of having partaken in something rewarding, but now being passed by, as if obsolete.")

c26 = Card.create(name: "Four of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-04.jpg", meaning:"The celebration of a homecoming of sorts. Returning from the world, enriched and pleased, receiving the praise and rewards for it.")

c27 = Card.create(name: "Five of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-05.jpg", meaning:"Calamity that may be invigorating but can become costly. What seems easy at first turns complicated when ambitions collide.")

c28 = Card.create(name: "Six of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-06.jpg", meaning:"Success and great gain in material matters, making others want to join you. But don't forget to prepare for rainy days that may come.")

c29 = Card.create(name: "Seven of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-07.jpg", meaning:"Struggle to hold on to what you have. Others try to take it from you.")

c30 = Card.create(name: "Eight of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-08.jpg", meaning:"Possessions on the move, risking to get lost. Hard work that is costly but necessary, to overcome several concrete obstacles.")

c31 = Card.create(name: "Nine of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-09.jpg", meaning:"Recovering after having been overwhelmed by too many disadvantages. You struggled hard, but everything was against you. You want to try again.")

c32 = Card.create(name: "Ten of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-10.jpg", meaning:"Too much to carry. Your workload is unreasonable, and still there's no certain reward ahead. Are you being used for others' profit?")

c33 = Card.create(name: "Page of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-11.jpg", meaning:"Plenty of possibilities, so many that it's difficult to choose. Do something, and you will prosper. But wait no longer.")

c34 = Card.create(name: "Knight of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-12.jpg", meaning:"You have grasped the opportunity and boldly move forward. Great promises of success, as long as you just sit tightly on your saddle.")

c35 = Card.create(name: "Queen of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-13.jpg", meaning:"You have your possessions and know how to keep them, but do you know how to increase them? Don't settle with what you have, or it may wither.")

c36 = Card.create(name: "King of Wands", image: "https://www.tarotcardmeanings.net/images/tarotcards120px/tarot-wands-14.jpg", meaning:"Wealth that is hard to keep. What's the point of prosperity if you don't trust that you can hold on to it? Envy is a poison also to the object of it.")

c37 = Card.create(name: "", image: "", meaning:"")

c38 = Card.create(name: "", image: "", meaning:"")

c39 = Card.create(name: "", image: "", meaning:"")

c40 = Card.create(name: "", image: "", meaning:"")

c41 = Card.create(name: "", image: "", meaning:"")

c42 = Card.create(name: "", image: "", meaning:"")

r1 = Reading.create(question: "Will I be happy?", user_id: u1.id)

s1 = Tarot.create(name: "The Fool", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-fool.jpg", meaning: "The Tarot Fool card is a jolly one, judging from the image on it. He may be a fool, but doesn't he look happy? Maybe that's what it takes to be joyous in this world. Ignorance is bliss.", reading_id: r1.id)

s2 = Tarot.create(name: "The Magician", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-magician.jpg", meaning: "The Tarot Magician card indicates things being solved as if by magic. It can be a person making big problems disappear or splendid solutions appear as if out of nowhere. But life doesn't work like that. If it's too good to be true, it probably isn't.", reading_id: r1.id)

s3 = Tarot.create(name: "The High Priestess", image: "https://www.tarotcardmeanings.net/images/tarotcards/tarot-highpriestess.jpg", meaning: "The Tarot High Priestess guards the secrets and ensures the master plan. In doing so, she knows to act with caution, very discreetly, and paying attention to details that are believe to be insignificant.", reading_id: r1.id)

