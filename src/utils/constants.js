import {SPOONACULAR_KEY} from '../env.js';
import {SPOONACULAR_VALUE} from '../env.js';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'recipes',
    url: '/recipes',
  }
];

/* export const recipes_url = `https://api.spoonacular.com/recipes/complexSearch?${SPOONACULAR_KEY}=${SPOONACULAR_VALUE}&diet=vegan`;
 */ 
export const single_recipe_url= `https://api.spoonacular.com/recipes/`;

export const recipes_url = {

  "results": [
      {
          "id": 782585,
          "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
          "image": "https://webknox.com/recipeImages/1747701-556x370.jpg",
          "imageType": "jpg",
          "featured": true
      },
      {
          "id": 716426,
          "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
          "image": "https://webknox.com/recipeImages/1747683-556x370.jpg",
          "imageType": "jpg",
          "featured": true
      },
      {
          "id": 716406,
          "title": "Asparagus and Pea Soup: Real Convenience Food",
          "image": "https://webknox.com/recipeImages/1697821-556x370.jpg",
          "imageType": "jpg",
          "featured": true
      },
      {
          "id": 644387,
          "title": "Garlicky Kale",
          "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 782601,
          "title": "Red Kidney Bean Jambalaya",
          "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 766453,
          "title": "Hummus and Za'atar",
          "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 716627,
          "title": "Easy Homemade Rice and Beans",
          "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 664147,
          "title": "Tuscan White Bean Soup with Olive Oil and Rosemary",
          "image": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 794349,
          "title": "Broccoli and Chickpea Rice Salad",
          "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 715769,
          "title": "Broccolini Quinoa Pilaf",
          "image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
          "imageType": "jpg"
      }
  ],
  "offset": 0,
  "number": 10,
  "totalResults": 689
};

export const testing_single_recipe_url= {
  "vegetarian": true,
  "vegan": true,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": true,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 17,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 94,
  "healthScore": 74,
  "creditsText": "pickfreshfoods.com",
  "sourceName": "pickfreshfoods.com",
  "pricePerServing": 414.24,
  "extendedIngredients": [
      {
          "id": 98840,
          "aisle": "Produce",
          "image": "broccolini.jpg",
          "consistency": "SOLID",
          "name": "broccolini",
          "nameClean": "broccolini",
          "original": "1 bunch broccolini, trimmed",
          "originalName": "broccolini, trimmed",
          "amount": 1,
          "unit": "bunch",
          "meta": [
              "trimmed"
          ],
          "measures": {
              "us": {
                  "amount": 1,
                  "unitShort": "bunch",
                  "unitLong": "bunch"
              },
              "metric": {
                  "amount": 1,
                  "unitShort": "bunch",
                  "unitLong": "bunch"
              }
          }
      },
      {
          "id": 10211215,
          "aisle": "Produce",
          "image": "garlic.jpg",
          "consistency": "SOLID",
          "name": "garlic clove",
          "nameClean": "whole garlic cloves",
          "original": "1 garlic clove, minced",
          "originalName": "garlic clove, minced",
          "amount": 1,
          "unit": "",
          "meta": [
              "minced"
          ],
          "measures": {
              "us": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
              },
              "metric": {
                  "amount": 1,
                  "unitShort": "",
                  "unitLong": ""
              }
          }
      },
      {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "1 tbsp olive oil",
          "originalName": "olive oil",
          "amount": 1,
          "unit": "tbsp",
          "meta": [],
          "measures": {
              "us": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
              },
              "metric": {
                  "amount": 1,
                  "unitShort": "Tbsp",
                  "unitLong": "Tbsp"
              }
          }
      },
      {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "½ cup onion",
          "originalName": "onion",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
              "us": {
                  "amount": 0.5,
                  "unitShort": "cups",
                  "unitLong": "cups"
              },
              "metric": {
                  "amount": 118.294,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
              }
          }
      },
      {
          "id": 20035,
          "aisle": "Pasta and Rice;Health Foods",
          "image": "uncooked-quinoa.png",
          "consistency": "SOLID",
          "name": "quinoa",
          "nameClean": "quinoa",
          "original": "1 cup quinoa, rinsed",
          "originalName": "quinoa, rinsed",
          "amount": 1,
          "unit": "cup",
          "meta": [
              "rinsed"
          ],
          "measures": {
              "us": {
                  "amount": 1,
                  "unitShort": "cup",
                  "unitLong": "cup"
              },
              "metric": {
                  "amount": 236.588,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
              }
          }
      },
      {
          "id": 6615,
          "aisle": "Canned and Jarred",
          "image": "chicken-broth.png",
          "consistency": "LIQUID",
          "name": "vegetable broth",
          "nameClean": "vegetable stock",
          "original": "2 cups vegetable broth",
          "originalName": "vegetable broth",
          "amount": 2,
          "unit": "cups",
          "meta": [],
          "measures": {
              "us": {
                  "amount": 2,
                  "unitShort": "cups",
                  "unitLong": "cups"
              },
              "metric": {
                  "amount": 473.176,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
              }
          }
      },
      {
          "id": 10112155,
          "aisle": "Nuts;Savory Snacks;Baking",
          "image": "walnuts.jpg",
          "consistency": "SOLID",
          "name": "walnuts",
          "nameClean": "walnut pieces",
          "original": "2 oz chopped walnuts",
          "originalName": "chopped walnuts",
          "amount": 2,
          "unit": "oz",
          "meta": [
              "chopped"
          ],
          "measures": {
              "us": {
                  "amount": 2,
                  "unitShort": "oz",
                  "unitLong": "ounces"
              },
              "metric": {
                  "amount": 56.699,
                  "unitShort": "g",
                  "unitLong": "grams"
              }
          }
      }
  ],
  "id": 715769,
  "title": "Broccolini Quinoa Pilaf",
  "readyInMinutes": 30,
  "servings": 2,
  "sourceUrl": "http://pickfreshfoods.com/broccolini-quinoa-pilaf/",
  "image": "https://spoonacular.com/recipeImages/715769-556x370.jpg",
  "imageType": "jpg",
  "summary": "Broccolini Quinoa Pilaf requires approximately <b>30 minutes</b> from start to finish. For <b>$4.14 per serving</b>, you get a main course that serves 2. One portion of this dish contains around <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>625 calories</b>. Head to the store and pick up vegetable broth, onion, olive oil, and a few other things to make it today. A few people made this recipe, and 94 would say it hit the spot. It is a <b>rather expensive</b> recipe for fans of Mediterranean food. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Pick Fresh Foods. With a spoonacular <b>score of 98%</b>, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/spring-broccolini-kale-quinoa-bowls-734866\">Spring Broccolini & Kale Quinoa Bowls</a>, <a href=\"https://spoonacular.com/recipes/orange-sesame-salmon-with-quinoa-broccolini-839832\">Orange-Sesame Salmon with Quinoa & Broccolini</a>, and <a href=\"https://spoonacular.com/recipes/black-pepper-goat-cheese-and-chard-quinoa-with-roasted-broccolini-625829\">Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini</a>.",
  "cuisines": [
      "Mediterranean",
      "Italian",
      "European"
  ],
  "dishTypes": [
      "side dish",
      "lunch",
      "main course",
      "main dish",
      "dinner"
  ],
  "diets": [
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "vegan"
  ],
  "occasions": [],
  "winePairing": {
      "pairedWines": [
          "chianti",
          "verdicchio",
          "trebbiano"
      ],
      "pairingText": "Chianti, Verdicchio, and Trebbiano are great choices for Italian. Italians know food and they know wine. Trebbiano and Verdicchio are Italian white wines that pair well with fish and white meat, while Chianti is a great Italian red for heavier, bolder dishes. You could try Castellani Chianti Annata. Reviewers quite like it with a 4.7 out of 5 star rating and a price of about 15 dollars per bottle.",
      "productMatches": [
          {
              "id": 472302,
              "title": "Castellani Chianti Annata",
              "description": "Bright ruby red colored. The nose is intense and fruity with a violet fragrance and a slight hint of cherries and red currant. The palate is dry and balanced, lightly tannic which turns into velvety softness.Pairs well with delicious pastas to spicy pasta dishes. Ideal with roasts, steaks, and grilled veal.Blend: 90% Sangiovese, 10% Ciliegiolo",
              "price": "$14.99",
              "imageUrl": "https://spoonacular.com/productImages/472302-312x231.jpg",
              "averageRating": 0.9400000000000001,
              "ratingCount": 5,
              "score": 0.8775000000000001,
              "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcastellani-chianti-annata-2017%2F522412"
          }
      ]
  },
  "instructions": "<ol><li>In a large pan with lid heat olive oil over medium high heat. Add onions and cook for 1 minute. Add garlic and cook until onions are translucent and garlic is fragrant.</li><li>Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.</li><li>Cover and reduce heat to low, cook for 15 minutes.</li><li>In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.</li><li>Uncover and toss broccolini and quinoa together.</li><li>Season to taste with salt and pepper.</li><li>Add walnuts and serve hot.</li></ol>",
  "analyzedInstructions": [
      {
          "name": "",
          "steps": [
              {
                  "number": 1,
                  "step": "In a large pan with lid heat olive oil over medium high heat.",
                  "ingredients": [
                      {
                          "id": 4053,
                          "name": "olive oil",
                          "localizedName": "olive oil",
                          "image": "olive-oil.jpg"
                      }
                  ],
                  "equipment": [
                      {
                          "id": 404645,
                          "name": "frying pan",
                          "localizedName": "frying pan",
                          "image": "pan.png"
                      }
                  ]
              },
              {
                  "number": 2,
                  "step": "Add onions and cook for 1 minute.",
                  "ingredients": [
                      {
                          "id": 11282,
                          "name": "onion",
                          "localizedName": "onion",
                          "image": "brown-onion.png"
                      }
                  ],
                  "equipment": [],
                  "length": {
                      "number": 1,
                      "unit": "minutes"
                  }
              },
              {
                  "number": 3,
                  "step": "Add garlic and cook until onions are translucent and garlic is fragrant.",
                  "ingredients": [
                      {
                          "id": 11215,
                          "name": "garlic",
                          "localizedName": "garlic",
                          "image": "garlic.png"
                      },
                      {
                          "id": 11282,
                          "name": "onion",
                          "localizedName": "onion",
                          "image": "brown-onion.png"
                      }
                  ],
                  "equipment": []
              },
              {
                  "number": 4,
                  "step": "Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper.",
                  "ingredients": [
                      {
                          "id": 1102047,
                          "name": "salt and pepper",
                          "localizedName": "salt and pepper",
                          "image": "salt-and-pepper.jpg"
                      },
                      {
                          "id": 98840,
                          "name": "broccolini",
                          "localizedName": "broccolini",
                          "image": "broccolini.jpg"
                      },
                      {
                          "id": 20035,
                          "name": "quinoa",
                          "localizedName": "quinoa",
                          "image": "uncooked-quinoa.png"
                      },
                      {
                          "id": 1006615,
                          "name": "broth",
                          "localizedName": "broth",
                          "image": "chicken-broth.png"
                      }
                  ],
                  "equipment": [
                      {
                          "id": 404645,
                          "name": "frying pan",
                          "localizedName": "frying pan",
                          "image": "pan.png"
                      }
                  ],
                  "length": {
                      "number": 18,
                      "unit": "minutes"
                  }
              },
              {
                  "number": 5,
                  "step": "Add walnuts and serve hot.",
                  "ingredients": [
                      {
                          "id": 12155,
                          "name": "walnuts",
                          "localizedName": "walnuts",
                          "image": "walnuts.jpg"
                      }
                  ],
                  "equipment": []
              }
          ]
      }
  ],
  "originalId": null,
  "spoonacularSourceUrl": "https://spoonacular.com/broccolini-quinoa-pilaf-715769"
};
