const faker = require('faker')

const groceryString =
  'Alfalfa Sprouts, Apple, Apricot, Artichoke, Asian Pear, Asparagus, Atemoya, Avocado, Bamboo Shoots, Banana, Beans, Bean Sprouts, Beets, Belgian Endive, Bitter Melon, Bell Peppers, Blackberries, Blueberries, Bok Choy, Boniato, Boysenberries, Broccoflower, Broccoli, Brussels Sprouts, Cabbage (green and red), Cantaloupe, Carambola, Carrots, Casaba Melon, Cauliflower, Celery, Chayote, Cherimoya, Cherries, Coconuts, Collard Greens, Corn, Cranberries, Dates, Eggplant, Endive, Escarole, Feijoa, Fennel, Figs, Garlic, Gooseberries, Grapefruit, Grapes, Green Beans, Green Onions, Guava, Hominy, Honeydew Melon, Horned Melon, Iceberg Lettuce, Jerusalem Artichoke, Jicama, Kale, Kiwifruit, Kohlrabi, Kumquat, Leeks, Lemons, Romaine Lettuce, Lima Beans, Limes, Longan, Loquat, Lychee, Madarins, Malanga, Mandarin Oranges, Mangos, Mulberries, Mushrooms, Nectarines, Okra, Onion, Oranges, Papayas, Parsnip, Passion Fruit, Peaches, Pears, Peas, Bell Peppers, Persimmons, Pineapple, Plantains, Plums, Pomegranate, Potatoes, Prickly Pear, Prunes, Pummelo, Pumpkin, Quince, Radicchio, Radishes, Raisins, Raspberries, Red Cabbage, Rhubarb, Romaine Lettuce, Rutabaga, Shallots, Snow Peas, Spinach, Sprouts, acorn squash, buttercup squash, butternut squash, Strawberries, gr Beans, Sweet Potato, Tangelo, Tangerines, Tomatillo, Tomato, Turnip, Ugli Fruit, Watermelon, Water Chestnuts, Watercress, Waxed Beans, Yams, Yellow Squash, Yuca, Zucchini Squash,'

const groceriesArray = groceryString.split(', ')

const imageUrlsString =
  'https://www.pexels.com/photo/salmon-toast-with-alfalfa-7937467/, https://www.pexels.com/photo/red-apple-fruit-with-black-background-3652898/, https://www.pexels.com/photo/apricot-fruits-on-bowl-1028599/, https://www.pexels.com/photo/fresh-artichokes-3912846/, https://www.pexels.com/photo/slices-of-asian-pear-on-wooden-board-5945765/, https://www.pexels.com/photo/flat-lay-photography-of-asparagus-351679/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/sliced-avocado-2228553/, https://www.pexels.com/photo/crop-woman-with-skin-care-brush-and-soap-bar-7262407/, https://www.pexels.com/photo/yellow-banana-fruits-on-brown-surface-5966630/, https://www.pexels.com/photo/coffee-beans-on-clear-plastic-container-4264046/, https://www.pexels.com/photo/variety-of-cooked-vegetables-on-plate-8952662/, https://www.pexels.com/photo/cleaning-vegetables-1034825/, https://www.pexels.com/photo/two-adult-black-and-tan-german-shepherds-running-on-ground-1633522/, https://www.pexels.com/photo/a-woman-holding-a-melon-7889985/, https://www.pexels.com/photo/assorted-bell-peppers-594137/, https://www.pexels.com/photo/blackberries-on-table-892808/, https://www.pexels.com/photo/close-up-photo-of-blueberries-2539177/, https://www.pexels.com/photo/chinese-cabbages-beside-gray-concrete-7657338/, https://www.pexels.com/photo/man-with-black-beard-looking-down-4157843/, https://www.pexels.com/photo/food-nature-bird-field-5147516/, https://www.pexels.com/photo/food-healthy-nature-dark-7209549/, https://www.pexels.com/photo/bowl-of-sliced-broccoli-1359326/, https://www.pexels.com/photo/green-round-vegetables-41171/, https://www.pexels.com/photo/salad-with-summer-greens-and-purple-cabbage-4198017/, https://www.pexels.com/photo/two-sliced-melons-and-grapes-1622421/, https://www.pexels.com/photo/crop-woman-carrying-wineglass-with-cold-cocktail-with-sliced-starfruit-5947061/, https://www.pexels.com/photo/orange-carrots-on-table-143133/, https://www.pexels.com/photo/a-woman-holding-a-melon-7889985/, https://www.pexels.com/photo/close-up-shot-of-fresh-vegetables-8455391/, https://www.pexels.com/photo/fresh-vegetables-under-running-water-in-metal-bowl-3872435/, https://www.pexels.com/photo/traditional-mexican-veggies-arranged-with-potatoes-and-tropical-plant-4260541/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/close-up-photo-of-a-cherry-fruits-35629/, https://www.pexels.com/photo/selective-focus-photo-of-coconuts-1424457/, https://www.pexels.com/photo/green-plant-750952/, https://www.pexels.com/photo/yellow-corn-547263/, https://www.pexels.com/photo/close-up-of-strawberries-306800/, https://www.pexels.com/photo/close-up-photo-of-raisins-and-dates-2291592/, https://www.pexels.com/photo/eggplant-vegetable-plant-lot-321551/, https://www.pexels.com/photo/food-wood-love-art-7098650/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/cute-smiling-girl-with-feijoa-near-green-bush-5624265/, https://www.pexels.com/photo/apple-and-fennel-on-blue-background-7629986/, https://www.pexels.com/photo/assorted-fruits-in-bowl-1458695/, https://www.pexels.com/photo/food-avocado-home-lemon-4057672/, https://www.pexels.com/photo/yellow-round-cluster-fruit-close-up-photography-46541/, https://www.pexels.com/photo/slice-grapefruit-209549/, https://www.pexels.com/photo/grape-fruits-708777/, https://www.pexels.com/photo/green-beans-and-red-apples-1680585/, https://www.pexels.com/photo/variety-of-vegetables-1400172/, https://www.pexels.com/photo/guava-fruit-and-drink-2134037/, https://www.pexels.com/photo/bread-food-wood-restaurant-8257043/, https://www.pexels.com/photo/sliced-green-fruit-on-the-table-7889978/, https://www.pexels.com/photo/assorted-juicy-citrus-fruits-on-crumpled-fabric-5984606/, https://www.pexels.com/photo/sliced-zucchini-eggplant-and-lettuce-on-a-wooden-chopping-board-5644993/, https://www.pexels.com/photo/new-jerusalem-monastery-in-russia-8792987/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/green-plant-51372/, https://www.pexels.com/photo/sliced-kiwi-fruits-867349/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/assorted-glasses-with-ripe-kumquats-in-water-6387861/, https://www.pexels.com/photo/a-grandmother-teaching-her-granddaughter-how-to-make-dumplings-7363693/, https://www.pexels.com/photo/four-lemon-fruits-forming-straight-line-on-a-white-background-2622186/, https://www.pexels.com/photo/sliced-zucchini-eggplant-and-lettuce-on-a-wooden-chopping-board-5644993/, https://www.pexels.com/photo/assorted-vegetables-5677794/, https://www.pexels.com/photo/directly-above-view-of-limes-on-cutting-board-10432854/, https://www.pexels.com/photo/composition-of-various-apples-with-pears-and-exotic-longan-fruit-5946103/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/bunch-of-lychee-fruits-46518/, https://www.pexels.com/photo/food-dawn-caffeine-coffee-6512616/, https://www.pexels.com/photo/beach-canopy-lot-1884417/, https://www.pexels.com/photo/ripe-tangerine-with-green-leaf-in-red-refraction-6069722/, https://www.pexels.com/photo/green-oval-fruit-on-tree-6206290/, https://www.pexels.com/photo/food-red-plant-fruits-64282/, https://www.pexels.com/photo/food-wood-kitchen-cutting-board-36438/, https://www.pexels.com/photo/fruits-nuts-5941/, https://www.pexels.com/photo/ladies-fingers-lot-2583187/, https://www.pexels.com/photo/bowl-with-fresh-onions-on-marble-table-4197445/, https://www.pexels.com/photo/photo-of-pile-of-oranges-2294477/, https://www.pexels.com/photo/selective-focus-photo-of-unripe-papayas-6419249/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/delicious-ripe-passion-fruits-in-wicker-basket-on-white-surface-5946097/, https://www.pexels.com/photo/pile-of-bags-of-peaches-2253534/, https://www.pexels.com/photo/three-brown-fruits-on-white-textile-800356/, https://www.pexels.com/photo/full-frame-shot-of-green-peas-255469/, https://www.pexels.com/photo/assorted-bell-peppers-594137/, https://www.pexels.com/photo/persimmons-in-wicker-basket-10080956/, https://www.pexels.com/photo/green-pineapple-fruit-with-brown-framed-sunglasses-beside-yellow-surface-1161547/, https://www.pexels.com/photo/green-banana-tree-214158/, https://www.pexels.com/photo/green-plums-laying-on-kitchen-counter-9718279/, https://www.pexels.com/photo/red-round-fruit-65256/, https://www.pexels.com/photo/photo-of-potato-on-wooden-surface-4110462/, https://www.pexels.com/photo/green-cactus-with-yellow-flowers-4846501/, https://www.pexels.com/photo/appetizer-bacon-bread-cooking-434283/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/woman-in-black-long-sleeve-shirt-sitting-on-bench-holding-jack-o-lantern-3318607/, https://www.pexels.com/photo/photography-of-orange-flowers-10376281/, https://www.pexels.com/photo/top-view-of-bowl-with-mix-of-salads-placed-on-table-4198041/, https://www.pexels.com/photo/person-holding-a-red-radish-plant-4039451/, https://www.pexels.com/photo/close-up-photo-of-raisins-and-dates-2291592/, https://www.pexels.com/photo/pancakes-with-raspberry-on-top-9001203/, https://www.pexels.com/photo/two-glass-jars-with-eggs-6507029/, https://www.pexels.com/photo/rhubarb-pie-with-herb-and-white-cream-on-plate-6607421/, https://www.pexels.com/photo/sliced-zucchini-eggplant-and-lettuce-on-a-wooden-chopping-board-5644993/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/heaped-dried-shallot-onion-flakes-in-spices-market-4916115/, https://www.pexels.com/photo/person-holding-green-vegetable-4963925/, https://www.pexels.com/photo/green-leaves-in-white-ceramic-bowl-1751149/, https://www.pexels.com/photo/plants-macro-growth-soil-113335/, https://www.pexels.com/photo/from-above-shot-of-dried-leaves-and-yellow-fruit-3018825/, https://www.pexels.com/photo/green-and-white-fresh-squash-on-brown-textile-5644987/, https://www.pexels.com/photo/brown-grave-in-white-ceramic-plate-3535387/, https://www.pexels.com/photo/red-strawberries-fruit-royalty-free-70746/, https://www.pexels.com/photo/glass-cup-with-liquid-3556686/, https://www.pexels.com/photo/sliced-orange-vegetable-on-white-paper-3233282/, https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80, https://www.pexels.com/photo/pile-of-orange-fruits-2495220/, https://www.pexels.com/photo/bread-food-wood-restaurant-8257043/, https://www.pexels.com/photo/crop-woman-washing-tomatoes-in-water-bowl-5945657/, https://www.pexels.com/photo/fresh-turnip-placed-in-boxes-6280406/, https://www.pexels.com/photo/a-man-teaching-the-kids-to-make-juice-4617253/, https://www.pexels.com/photo/pieces-of-fresh-juicy-watermelon-5946081/, https://www.pexels.com/photo/young-woman-in-black-outfit-sitting-on-floor-9796405/, https://www.pexels.com/photo/faceless-person-eating-cream-soup-in-restaurant-4062279/, https://www.pexels.com/photo/close-up-photo-of-a-letter-7333595/, https://www.pexels.com/photo/close-up-shot-of-yams-7543152/, https://www.pexels.com/photo/orange-and-white-pumpkin-on-brown-dried-leaves-6073195/, https://www.pexels.com/photo/macro-photography-of-plant-1382394/, https://www.pexels.com/photo/assorted-fresh-vegetables-on-brown-wooden-chopping-board-5644989/'

const imageUrlsArray = imageUrlsString.split(',')

let groceryObjectsArray = []

for (let i = 0; i < groceriesArray.length; i++) {
  let name = groceriesArray[i]
  let type = faker.random.arrayElement(['fruit', 'vegetable'])
  let season = faker.random.arrayElement(['winter', 'spring', 'summer', 'fall'])
  let price = faker.datatype.float({ min: 1.0, max: 50, precision: 0.01 })
  let imageUrl = imageUrlsArray[i]

  groceryObjectsArray.push({
    name,
    type,
    season,
    price,
    imageUrl,
  })
}

module.exports = groceryObjectsArray
