import { nanoid } from "nanoid"

const data = [
  {
    "id": nanoid(6),
    "name": "lipton & lipton iced-tea",
    "image": "https://pixabay.com/get/g75fdeb690317b9035ae10f8184ee5dd7b0b6022d1ac696e73d09c20fb3c0fb311e0a7ed9f9e366441f6bda640cdff0b8352ca7e78a1a39ca60c4b4763c9780e8_640.jpg",
    "category": "beverages",
    "note": "Lipton is a well-known brand offering a variety of tea products, including Lipton Iced Tea. This refreshing beverage is available in various flavors, such as lemon, peach, and raspberry, providing a deliciously sweet and invigorating experience. Lipton Iced Tea combines quality tea leaves with natural flavors, making it a popular choice for tea lovers seeking a chilled drink.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "kunu",
    "image": "https://pixabay.com/get/g80a0b5715b2048f72864196914dabae4d7052d9e225dc7b4a33f1979497048428893f03195e0d8ce72a0ffd1095820e2a2d447ac4d2e6caa6865f5ebfd398bfb_640.jpg",
    "category": "beverages",
    "note": "Kunu is a traditional Nigerian beverage made from grains such as millet, maize, or sorghum. It's often fermented and sweetened with sugar or honey, giving it a refreshing and slightly tangy taste. Kunu is typically enjoyed chilled and is popular at celebrations and gatherings, serving as a nutritious and energizing drink rich in vitamins and minerals.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "oranges",
    "image": "https://pixabay.com/get/gb863246952578fee84df5a8b6a607a4335b855e573e25cae360643d5614ddd8c535a80eca4f48f80e3aad54da12c558e_640.jpg",
    "category": "fruits & vegetables",
    "note": "Vibrant, citrus fruit known for its juicy, sweet-tart flavor. It is a rich source of vitamin C, antioxidants, and fiber, making it highly beneficial for boosting the immune system and promoting overall health. Oranges can be eaten fresh, juiced, or used in a variety of culinary dishes, including desserts, salads, and sauces. The fruit's segments are filled with pulp and juice. Common varieties include Navel, Valencia, and Blood oranges. Apart from its nutritional value, the orange peel is often used to extract essential oils, which are popular in perfumes and cleaning products.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "chicken fry",
    "image": "https://pixabay.com/get/ga3a489a81d03a4e7bf2feeb1987ada0cf3e98a33e1f4f934c965441a26a0d03961160582f953080ff85a02e1405c6664_640.jpg",
    "category": "protein",
    "note": "Chicken fry is a popular grocery item that offers a delicious and convenient meal option. Typically made from fresh chicken pieces marinated in spices, it’s ideal for frying or baking. Packed with protein, it can be enjoyed in various dishes, from sandwiches to salads. Look for high-quality cuts for the best flavor and texture.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "sprite",
    "image": "https://pixabay.com/get/g62dbd1966f54efe20037bc5928ef02fb6b95f85e4da2b0ea4cbd10626b9b81315d32d9fa0455940985235a9e316093e5_640.jpg",
    "category": "beverages",
    "note": "Sprite is a lemon-lime flavored carbonated soft drink produced by The Coca-Cola Company. Launched in 1961, it is known for its crisp, refreshing taste and vibrant, citrusy aroma. Sprite is caffeine-free and often enjoyed chilled or as a mixer in cocktails. Its clear, bubbly appearance and zesty flavor make it a popular choice for a variety of occasions.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "melons",
    "image": "https://pixabay.com/get/g03d33bfcadf8a5bf88b6e83a491dbd4c8066c3e4d1c3644f0d64796f8398cfebe6710109869fb5b3afdaa9d02fe0aea6_640.jpg",
    "category": "fruits & vegetables",
    "note": "Melons are high in water content, making them a great hydrating snack, and are rich in vitamins such as vitamin C and vitamin A, as well as minerals like potassium. Melons are commonly eaten fresh, in fruit salads, smoothies, or as a light dessert. They are low in calories, making them a popular choice for healthy diets.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "pork fillet",
    "image": "https://pixabay.com/get/g78fe401730160e6da8579245e69a3c34750294c0541bb33cd2acd8225a9447f5c50379bcb959ef4dc2bc4d46c7425acf_640.jpg",
    "category": "protein",
    "note": "Pork fillet, also known as pork tenderloin, is a lean and tender cut of meat from the muscle that runs along the pig’s backbone. It’s prized for its mild flavor and versatility in cooking. Best when quickly cooked to avoid dryness, it can be grilled, roasted, or sautéed and pairs well with marinades or sauces.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "fanta",
    "image": "https://pixabay.com/get/gd40c1576730ad78f96dd6dcdae30d8d7fe059d97dd7ef17b119f1f2e243609fa118a3d971f766292b5e5e49f45a25532_640.jpg",
    "category": "beverages",
    "note": "Fanta is a popular fruit-flavored carbonated soft drink, originally created in Germany during World War II. Known for its vibrant colors and refreshing taste, Fanta is available in various fruity flavors, including orange, grape, and strawberry. The beverage is widely enjoyed around the world, often served chilled and perfect for social gatherings or casual refreshment.",
    "quantity": 1
  },

  {
    "id": nanoid(6),
    "name": "carrots",
    "image": "https://pixabay.com/get/ged452e9312203f19af61d78f7ab3f5e8a7b9b85316c7cf0ce9bc8629916377a14048528bfd954f56f1a5b82267906797_640.jpg",
    "category": "fruits & vegetables",
    "note": "Carrots are a nutritious root vegetable rich in beta-carotene, fiber, and antioxidants. They promote eye health, support digestion, and boost the immune system. Carrots can be eaten raw, cooked, or juiced, and are a versatile ingredient in many dishes. Their natural sweetness and crunch make them a healthy, low-calorie snack option.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "lamb",
    "image": "https://pixabay.com/get/g2845216432ac11eeb491d2dab97010a05f9da8b786b68af4a341a18b78aaaf0a76beaf9e6f2353fb156db09dcc46a85f_640.jpg",
    "category": "protein",
    "note": "Lamb is a type of red meat from young sheep, typically under one year old. It has a tender texture and a rich, slightly gamey flavor. Popular in Mediterranean and Middle Eastern cuisines, lamb is often roasted, grilled, or used in stews. It's a good source of protein, iron, and essential vitamins like B12.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "durian",
    "image": "https://pixabay.com/get/gc7535d54a03dd260fe2011d0c24caa5b38bb3ec10d6407693d1bfcf91b66e960beb06c9339e68d1ad1183783a429f173_640.jpg",
    "category": "fruits & vegetables",
    "note": "Durian is a tropical fruit known for its strong smell and spiky outer shell. Often called the king of fruits, it has a creamy, custard-like flesh with a unique sweet and savory flavor. Popular in Southeast Asia, durian's odor is polarizing—some love it, while others find it overpowering. It's rich in nutrients and antioxidants.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "salmon",
    "image": "https://pixabay.com/get/g512ae61bb5792cab97bfaa5b30c70d97fdcc67dc915a2716661a41e84575e1d4e74f55b93a61cbf21ad23d91df13d044_640.png",
    "category": "protein",
    "note": "Salmon is a nutrient-rich fish known for its high content of omega-3 fatty acids, which promote heart health. It is also a great source of protein, vitamins B12 and D, and minerals like selenium. Salmon can be enjoyed grilled, baked, or smoked, and is popular for its tender texture and mild, flavorful taste.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "zobo",
    "image": "https://pixabay.com/get/gb8edfee3d4c8db9f269495847e757a5c180ab08ce51a6b34eefc5a5909946b922526417fc5a8515f03b9ca5d5c20e82d_640.jpg",
    "category": "beverages",
    "note": "Zobo, also known as hibiscus tea, is a refreshing beverage made from dried hibiscus petals, typically steeped in hot water and sweetened with sugar or honey. Popular in West Africa, it boasts a vibrant red color and a tart flavor, often enhanced with ginger, mint, or pineapple. Rich in antioxidants, zobo is enjoyed both cold and hot for its numerous health benefits.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "rhino's horn",
    "image": "https://pixabay.com/get/g4202cb863827d97deef4f07bfc623eeb63137a21e0d4bdb429b5f89839629c0d0e89a7d622b43b1523902669d6dc7f2f_640.jpg",
    "category": "protein",
    "note": "Rhino's horn, often sought after for its supposed medicinal properties, is a highly controversial item. Composed primarily of keratin, the same material found in human hair and nails, it has no proven health benefits. Poaching for rhino horns threatens these magnificent creatures with extinction. Conservation efforts are crucial to protect rhinos and preserve biodiversity for future generations.",
    "quantity": 1
  },

  {
    "id": nanoid(6),
    "name": "snails",
    "image": "https://pixabay.com/get/g1843f48724450e52c5197ba5541712b3d6dd3fecb9cd5beda66f7f22cde6c1867d745d24d7507ed32843fb766c65089d_640.png",
    "category": "protein",
    "note": "Snails, often considered a delicacy, are a nutritious addition to your grocery list. Rich in protein, vitamins, and minerals, they are low in fat and calories. Commonly used in French cuisine as escargot, they can be prepared in various ways, including sautéing or in pasta dishes. When purchasing, opt for fresh, live snails for the best quality.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "pre-cooked corn",
    "image": "https://pixabay.com/get/ge4cb25e01b0bd0f24b9a65516ee6a52ecf5f410dbccea2460929ecb07891664ccc54e7b1e7cf0d9814423f7adfee2579_640.jpg",
    "category": "fruits & vegetables",
    "note": "Convenient grocery item that saves time in meal preparation. It's already cooked, making it ideal for salads, soups, and casseroles. Rich in fiber and essential nutrients, it adds a sweet crunch to dishes. Available in cans or frozen, pre-cooked corn is versatile and easy to incorporate into a variety of recipes. Enjoy it as a quick side or topping!",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "diet coke",
    "image": "https://pixabay.com/get/ged7d894b4a2d1dee5d9db649939f6abf4f9f4c5f70692d763ce7db7e43f5f631945eb5a5a766aff465f06314f8606f47_640.jpg",
    "category": "beverages",
    "note": "Sugar-free soft drink produced by The Coca-Cola Company. Launched in 1982, it offers a calorie-free alternative to regular Coca-Cola, sweetened with aspartame and/or acesulfame potassium. Known for its crisp, refreshing taste, Diet Coke is popular among those seeking to reduce sugar intake. It comes in various flavors, catering to diverse consumer preferences.",
    "quantity": 1
  },
  {
    "id": nanoid(6),
    "name": "gatorade",
    "image": "https://pixabay.com/get/g6e46aed14a9e5e3f367fb0d9bc9768c51b77479ed8d450d8124d28346f4890f16249f59203fd207eba6cd2a9fecb5eec_640.jpg",
    "category": "beverages",
    "note": "Gatorade is a popular sports beverage designed to replenish electrolytes, carbohydrates, and fluids lost during physical activity. Developed in 1965 for athletes, it contains essential electrolytes like sodium and potassium, helping to prevent dehydration and improve performance. Available in various flavors, Gatorade is widely consumed by athletes and fitness enthusiasts to enhance endurance and recovery during exercise.",
    "quantity": 1
  }
]

export default data