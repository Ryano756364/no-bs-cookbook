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

export const recipes_url = `https://api.spoonacular.com/recipes/complexSearch?${SPOONACULAR_KEY}=${SPOONACULAR_VALUE}`;

export const single_recipe_url= `https://api.spoonacular.com/recipes/`;

/* export const recipes_url = {

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
}; */

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

//Remember to update this to 50 prior to deployment
export const updated_recipes_url = `https://api.spoonacular.com/recipes/random?${SPOONACULAR_KEY}=${SPOONACULAR_VALUE}&number=50`;

export const testing_updated_recipes_url = {
    "recipes": [
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 62,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 10,
            "healthScore": 42,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 236.75,
            "extendedIngredients": [
                {
                    "id": 18369,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "baking powder",
                    "original": "5 1/2 teaspoons baking powder",
                    "originalName": "baking powder",
                    "amount": 5.5,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 5.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 5.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 9040,
                    "aisle": "Produce",
                    "image": "bananas.jpg",
                    "consistency": "SOLID",
                    "name": "but bananas",
                    "nameClean": "banana",
                    "original": "2 ripe but firm bananas, sliced thin",
                    "originalName": "ripe but firm bananas, sliced thin",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [
                        "firm",
                        "ripe",
                        "sliced",
                        "thin"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 4073,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "margarine",
                    "original": "1/2 cup butter or margarine - (¼ lb)",
                    "originalName": "1/2 cup butter or margarine",
                    "amount": 0.25,
                    "unit": "lb",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 113.398,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1014582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "canola oil",
                    "nameClean": "canola oil",
                    "original": "4 t. canola (or vegetable) oil",
                    "originalName": "canola (or vegetable) oil",
                    "amount": 4.0,
                    "unit": "t",
                    "meta": [
                        "(or vegetable)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2010,
                    "aisle": "Spices and Seasonings",
                    "image": "cinnamon.jpg",
                    "consistency": "SOLID",
                    "name": "cinnamon",
                    "nameClean": "cinnamon",
                    "original": "1/2 t. cinnamon",
                    "originalName": "cinnamon",
                    "amount": 0.5,
                    "unit": "t",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1017,
                    "aisle": "Cheese",
                    "image": "cream-cheese.jpg",
                    "consistency": "SOLID",
                    "name": "cream cheese",
                    "nameClean": "cream cheese",
                    "original": "8 ounces cream cheese",
                    "originalName": "cream cheese",
                    "amount": 8.0,
                    "unit": "ounces",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "3 eggs",
                    "originalName": "eggs",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "10 1/2 cups all-purpose flour",
                    "originalName": "all-purpose flour",
                    "amount": 10.5,
                    "unit": "cups",
                    "meta": [
                        "all-purpose"
                    ],
                    "measures": {
                        "us": {
                            "amount": 10.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 2.484,
                            "unitShort": "l",
                            "unitLong": "liters"
                        }
                    }
                },
                {
                    "id": 2025,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-nutmeg.jpg",
                    "consistency": "SOLID",
                    "name": "ground nutmeg",
                    "nameClean": "nutmeg",
                    "original": "dash of fresh ground nutmeg",
                    "originalName": "fresh ground nutmeg",
                    "amount": 1.0,
                    "unit": "dash",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        }
                    }
                },
                {
                    "id": 19296,
                    "aisle": "Nut butters, Jams, and Honey",
                    "image": "honey.png",
                    "consistency": "LIQUID",
                    "name": "honey",
                    "nameClean": "honey",
                    "original": "1 T. honey",
                    "originalName": "honey",
                    "amount": 1.0,
                    "unit": "T",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "lemon juice",
                    "nameClean": "lemon juice",
                    "original": "1/2 t. lemon juice",
                    "originalName": "lemon juice",
                    "amount": 0.5,
                    "unit": "t",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 19911,
                    "aisle": "Cereal",
                    "image": "maple-syrup.png",
                    "consistency": "LIQUID",
                    "name": "maple syrup",
                    "nameClean": "maple syrup",
                    "original": "maple syrup, for serving",
                    "originalName": "maple syrup, for serving",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [
                        "for serving"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "1 c. milk",
                    "originalName": "milk",
                    "amount": 1.0,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/2 teaspoon salt",
                    "originalName": "salt",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 18069,
                    "aisle": "Bakery/Bread",
                    "image": "white-bread.jpg",
                    "consistency": "SOLID",
                    "name": "sandwich bread",
                    "nameClean": "white bread",
                    "original": "8 slices of good quality white sandwich bread",
                    "originalName": "good quality white sandwich bread",
                    "amount": 8.0,
                    "unit": "slices",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        },
                        "metric": {
                            "amount": 8.0,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        }
                    }
                }
            ],
            "id": 633971,
            "title": "Banana & Cream Cheese Stuffed French Toast",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/ZJMSFPMM/banana-cream-cheese-stuffed-french-toast",
            "image": "https://spoonacular.com/recipeImages/633971-556x370.jpg",
            "imageType": "jpg",
            "summary": "You can never have too many breakfast recipes, so give Banana & Cream Cheese Stuffed French Toast a try. For <b>$2.37 per serving</b>, this recipe <b>covers 50%</b> of your daily requirements of vitamins and minerals. One serving contains <b>1983 calories</b>, <b>49g of protein</b>, and <b>57g of fat</b>. This recipe serves 4. A few people really liked this American dish. 10 people found this recipe to be yummy and satisfying. Head to the store and pick up eggs, cinnamon, butter, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 90%</b>. This score is excellent. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/banana-cream-cheese-stuffed-french-toast-1239253\">Banana & Cream Cheese Stuffed French Toast</a>, <a href=\"https://spoonacular.com/recipes/banana-cream-cheese-stuffed-french-toast-1462239\">Banana & Cream Cheese Stuffed French Toast</a>, and <a href=\"https://spoonacular.com/recipes/cream-cheese-stuffed-french-toast-1700321\">Cream Cheese Stuffed French Toast</a>.",
            "cuisines": [
                "American"
            ],
            "dishTypes": [
                "morning meal",
                "brunch",
                "breakfast"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "<ol><li>In a small bowl combine the softened cream cheese, honey, cinnamon, nutmeg and lemon juice, set aside while preparing the batter.</li><li>Whisk together all of the batter ingredients until thoroughly mixed. (This is a breeze if you use a blender.) Pour the batter into a wide, shallow dish (like a pie plate).</li><li>Spread the filling mixture equally over 1 side of each slice of bread, divide the sliced bananas between 4 slices of the bread, top with the remaining 4 slices, press lightly.</li><li>Melt 2 t. butter and 2 t. oil in a 12 inch nonstick skillet over medium heat until the butter foams and then subsides. Working with one sandwich at a time dip both sides in the batter and let the excess drip away, add to the hot pan, repeat with a second sandwich. Cook until golden brown on the first side, around 3-5 minutes, flip and repeat on the second side. Repeat this process with the remaining, oil, butter and sandwiches. To serve, cut into triangles and serve with maple syrup.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "In a small bowl combine the softened cream cheese, honey, cinnamon, nutmeg and lemon juice, set aside while preparing the batter.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                },
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 2010,
                                    "name": "cinnamon",
                                    "localizedName": "cinnamon",
                                    "image": "cinnamon.jpg"
                                },
                                {
                                    "id": 2025,
                                    "name": "nutmeg",
                                    "localizedName": "nutmeg",
                                    "image": "ground-nutmeg.jpg"
                                },
                                {
                                    "id": 19296,
                                    "name": "honey",
                                    "localizedName": "honey",
                                    "image": "honey.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Whisk together all of the batter ingredients until thoroughly mixed. (This is a breeze if you use a blender.)",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "breeze",
                                    "localizedName": "breeze",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Pour the batter into a wide, shallow dish (like a pie plate).",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Spread the filling mixture equally over 1 side of each slice of bread, divide the sliced bananas between 4 slices of the bread, top with the remaining 4 slices, press lightly.Melt 2 t. butter and 2 t. oil in a 12 inch nonstick skillet over medium heat until the butter foams and then subsides. Working with one sandwich at a time dip both sides in the batter and let the excess drip away, add to the hot pan, repeat with a second sandwich. Cook until golden brown on the first side, around 3-5 minutes, flip and repeat on the second side. Repeat this process with the remaining, oil, butter and sandwiches. To serve, cut into triangles and serve with maple syrup.",
                            "ingredients": [
                                {
                                    "id": 19911,
                                    "name": "maple syrup",
                                    "localizedName": "maple syrup",
                                    "image": "maple-syrup.png"
                                },
                                {
                                    "id": 9040,
                                    "name": "banana",
                                    "localizedName": "banana",
                                    "image": "bananas.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                },
                                {
                                    "id": 18064,
                                    "name": "bread",
                                    "localizedName": "bread",
                                    "image": "white-bread.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dip",
                                    "localizedName": "dip",
                                    "image": ""
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
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
                                "number": 5,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/banana-cream-cheese-stuffed-french-toast-633971"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 23,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 44,
            "healthScore": 1,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 138.63,
            "extendedIngredients": [
                {
                    "id": 14197,
                    "aisle": "Beverages",
                    "image": "cocoa-powder.png",
                    "consistency": "SOLID",
                    "name": "cocoa mix",
                    "nameClean": "hot cocoa mix",
                    "original": "2 pkg hot cocoa mix (like Swiss Miss)",
                    "originalName": "hot cocoa mix (like Swiss Miss)",
                    "amount": 2.0,
                    "unit": "pkg",
                    "meta": [
                        "hot",
                        "(like Swiss Miss)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "pkg",
                            "unitLong": "packages"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "pkg",
                            "unitLong": "packages"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "1 cup milk",
                    "originalName": "milk",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 1049,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "fluid-cream.jpg",
                    "consistency": "SOLID",
                    "name": "half and half",
                    "nameClean": "half and half",
                    "original": "1/2 cup half and half or light cream",
                    "originalName": "half and half or light cream",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "light"
                    ],
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
                    "id": 10014214,
                    "aisle": "Tea and Coffee",
                    "image": "instant-coffee-or-instant-espresso.png",
                    "consistency": "SOLID",
                    "name": "coffee",
                    "nameClean": "instant espresso",
                    "original": "1 tsp instant coffee or instant espresso",
                    "originalName": "instant coffee or instant espresso",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [
                        "instant"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 10119116,
                    "aisle": "Baking",
                    "image": "marshmallows-mini.png",
                    "consistency": "SOLID",
                    "name": "marshmallows",
                    "nameClean": "mini marshmallows",
                    "original": "1/2 cup mini marshmallows",
                    "originalName": "mini marshmallows",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "mini"
                    ],
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
                    "id": 14181,
                    "aisle": "Frozen;Baking;Condiments",
                    "image": "chocolate-syrup.jpg",
                    "consistency": "SOLID",
                    "name": "chocolate syrup",
                    "nameClean": "chocolate syrup",
                    "original": "1/4 cup chocolate syrup (I used U-Bet)",
                    "originalName": "chocolate syrup (I used U-Bet)",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "(I used U-Bet)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 42135,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "whipped-cream.jpg",
                    "consistency": "SOLID",
                    "name": "whipped cream",
                    "nameClean": "whipped topping",
                    "original": "whipped topping or whipped cream for garnish",
                    "originalName": "whipped topping or whipped cream for garnish",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [
                        "for garnish"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 93645,
                    "aisle": "Baking",
                    "image": "nonpareils.jpg",
                    "consistency": "SOLID",
                    "name": "sprinkles",
                    "nameClean": "sprinkles",
                    "original": "sprinkles or sifted cocoa for garnish",
                    "originalName": "sprinkles or sifted cocoa for garnish",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [
                        "sifted",
                        "for garnish"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }
            ],
            "id": 647433,
            "title": "Hot Cocaccino",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/S7FZXQFN/hot-cocaccino",
            "image": "https://spoonacular.com/recipeImages/647433-556x370.jpg",
            "imageType": "jpg",
            "summary": "Hot Cocaccino takes around <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>463 calories</b>, <b>8g of protein</b>, and <b>17g of fat</b> per serving. For <b>$1.39 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. If you have coffee, chocolate syrup, half and half, and a few other ingredients on hand, you can make it. It works well as a side dish. It is brought to you by Foodista. 44 people found this recipe to be flavorful and satisfying. With a spoonacular <b>score of 31%</b>, this dish is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/hot-cocaccino-1366821\">Hot Cocaccino</a>, <a href=\"https://spoonacular.com/recipes/beef-sukiyaki-hot-pot-harris-salat-japanese-hot-pots-cookbook-589946\">Beef Sukiyaki Hot Pot – Harris Salat Japanese Hot Pots Cookbook</a>, and <a href=\"https://spoonacular.com/recipes/hot-spiced-mexican-hot-chocolate-with-ice-cream-dusted-with-chili-powder-289096\">Hot Spiced Mexican Hot Chocolate with Ice Cream Dusted with Chili Powder</a>.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "instructions": "Heat milk and half and half in medium saucepan until very hot; remove from heat.  Add hot cocoa mix and instant coffee.  Stir well and pour into mugs or cups.\nTop with mini marshmallows, then drizzle chocolate syrup over marshmallows.  Top with whipped topping and spinkles/cocoa powder.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Heat milk and half and half in medium saucepan until very hot; remove from heat.",
                            "ingredients": [
                                {
                                    "id": 1049,
                                    "name": "half and half",
                                    "localizedName": "half and half",
                                    "image": "fluid-cream.jpg"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add hot cocoa mix and instant coffee.  Stir well and pour into mugs or cups.",
                            "ingredients": [
                                {
                                    "id": 14214,
                                    "name": "instant coffee",
                                    "localizedName": "instant coffee",
                                    "image": "instant-coffee-or-instant-espresso.png"
                                },
                                {
                                    "id": 14197,
                                    "name": "hot cocoa mix",
                                    "localizedName": "hot cocoa mix",
                                    "image": "cocoa-powder.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Top with mini marshmallows, then drizzle chocolate syrup over marshmallows.  Top with whipped topping and spinkles/cocoa powder.",
                            "ingredients": [
                                {
                                    "id": 10119116,
                                    "name": "mini marshmallows",
                                    "localizedName": "mini marshmallows",
                                    "image": "marshmallows-mini.png"
                                },
                                {
                                    "id": 14181,
                                    "name": "chocolate syrup",
                                    "localizedName": "chocolate syrup",
                                    "image": "chocolate-syrup.jpg"
                                },
                                {
                                    "id": 42135,
                                    "name": "whipped topping",
                                    "localizedName": "whipped topping",
                                    "image": "whipped-cream.jpg"
                                },
                                {
                                    "id": 19165,
                                    "name": "cocoa powder",
                                    "localizedName": "cocoa powder",
                                    "image": "cocoa-powder.png"
                                },
                                {
                                    "id": 19116,
                                    "name": "marshmallows",
                                    "localizedName": "marshmallows",
                                    "image": "normal-marshmallows.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/hot-cocaccino-647433"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 10,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 6,
            "healthScore": 20,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 644.21,
            "extendedIngredients": [
                {
                    "id": 15270,
                    "aisle": "Seafood",
                    "image": "shrimp.png",
                    "consistency": "SOLID",
                    "name": "shrimp",
                    "nameClean": "shrimp",
                    "original": "2 pounds large shrimp, shelled and deveined",
                    "originalName": "shrimp, shelled and deveined",
                    "amount": 2.0,
                    "unit": "pounds",
                    "meta": [
                        "shelled",
                        "deveined"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 907.185,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1039037,
                    "aisle": "Produce",
                    "image": "avocado.jpg",
                    "consistency": "SOLID",
                    "name": "hass avocados",
                    "nameClean": "hass avocado",
                    "original": "2 Hass avocados, pitted, peeled & cubed",
                    "originalName": "Hass avocados, pitted, peeled & cubed",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [
                        "pitted",
                        "cubed",
                        "peeled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 9176,
                    "aisle": "Produce",
                    "image": "mango.jpg",
                    "consistency": "SOLID",
                    "name": "mango",
                    "nameClean": "mango",
                    "original": "1 mango, peeled and diced",
                    "originalName": "mango, peeled and diced",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "diced",
                        "peeled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1029159,
                    "aisle": "Produce",
                    "image": "lime-wedge.jpg",
                    "consistency": "SOLID",
                    "name": "lime wedges",
                    "nameClean": "lime wedge",
                    "original": "Lime wedges, for serving",
                    "originalName": "Lime wedges, for serving",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [
                        "for serving"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 9176,
                    "aisle": "Produce",
                    "image": "mango.jpg",
                    "consistency": "SOLID",
                    "name": "mango",
                    "nameClean": "mango",
                    "original": "1 mango, peeled and finely diced (1 1/2 cups)",
                    "originalName": "mango, peeled and finely diced",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [
                        "diced",
                        "peeled",
                        "finely"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1022068,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "red-wine-vinegar.jpg",
                    "consistency": "LIQUID",
                    "name": "red wine vinegar",
                    "nameClean": "red wine vinegar",
                    "original": "1/4 cup red wine vinegar",
                    "originalName": "red wine vinegar",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9160,
                    "aisle": "Produce",
                    "image": "lime-juice.png",
                    "consistency": "LIQUID",
                    "name": "lime juice",
                    "nameClean": "lime juice",
                    "original": "2 tablespoons fresh lime juice",
                    "originalName": "fresh lime juice",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 10211216,
                    "aisle": "Produce",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ginger",
                    "nameClean": "fresh ginger",
                    "original": "1 tablespoon fresh ginger, grated",
                    "originalName": "fresh ginger, grated",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "fresh",
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "2 tablespoons sugar",
                    "originalName": "sugar",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1032046,
                    "aisle": "Condiments",
                    "image": "dijon-mustard.jpg",
                    "consistency": "LIQUID",
                    "name": "dijon mustard",
                    "nameClean": "dijon mustard",
                    "original": "1 teaspoon Dijon mustard",
                    "originalName": "Dijon mustard",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1014582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "canola oil",
                    "nameClean": "canola oil",
                    "original": "1/2 cup canola oil",
                    "originalName": "canola oil",
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
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "SOLID",
                    "name": "cilantro",
                    "nameClean": "cilantro",
                    "original": "1 tablespoon chopped cilantro",
                    "originalName": "chopped cilantro",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1009159,
                    "aisle": "Produce",
                    "image": "zest-lime.jpg",
                    "consistency": "SOLID",
                    "name": "lime zest",
                    "nameClean": "lime peel",
                    "original": "1/2 teaspoon finely grated lime zest",
                    "originalName": "finely grated lime zest",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [
                        "finely grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10011819,
                    "aisle": "Produce;Ethnic Foods",
                    "image": "habanero-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "habanero chile",
                    "nameClean": "habanero chili",
                    "original": "1 Scotch bonnet or habanero chile, seeded & diced",
                    "originalName": "Scotch bonnet or habanero chile, seeded & diced",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "diced",
                        "seeded"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10011282,
                    "aisle": "Produce",
                    "image": "red-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "red onion",
                    "original": "1/4 cup thinly sliced red onion",
                    "originalName": "thinly sliced red onion",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "red",
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "black pepper",
                    "original": "Salt and freshly ground black pepper",
                    "originalName": "Salt and freshly ground black pepper",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [
                        "black",
                        "freshly ground"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }
            ],
            "id": 633171,
            "title": "Avocado-Mango Salad With Grilled Shrimp",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/NSTFKPHS/avocado-mango-salad-with-grilled-shrimp",
            "image": "https://spoonacular.com/recipeImages/633171-556x370.jpg",
            "imageType": "jpg",
            "summary": "Avocado-Mango Salad With Grilled Shrimp might be a good recipe to expand your main course recipe box. Watching your figure? This gluten free, dairy free, and pescatarian recipe has <b>507 calories</b>, <b>49g of protein</b>, and <b>22g of fat</b> per serving. This recipe serves 4. For <b>$6.44 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. This recipe is liked by 6 foodies and cooks. Head to the store and pick up lime wedges, hass avocados, lime zest, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. Overall, this recipe earns a <b>solid spoonacular score of 75%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/avocado-mango-salad-with-grilled-shrimp-1373067\">Avocado-Mango Salad With Grilled Shrimp</a>, <a href=\"https://spoonacular.com/recipes/mango-avocado-and-grilled-shrimp-salad-with-a-peanut-dressing-249037\">Mango, Avocado and Grilled Shrimp Salad with a Peanut Dressing</a>, and <a href=\"https://spoonacular.com/recipes/mango-avocado-and-grilled-shrimp-salad-with-a-peanut-dressing-1294163\">Mango, Avocado and Grilled Shrimp Salad with a Peanut Dressing</a>.",
            "cuisines": [],
            "dishTypes": [
                "side dish",
                "lunch",
                "main course",
                "salad",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "pescatarian"
            ],
            "occasions": [
                "father's day",
                "4th of july",
                "summer"
            ],
            "instructions": "Preheat gas grill to high.\nMake the dressing: Combine all dressing ingredients (except oil) in a blender and blend until smooth. While blender is running, remove lid and pour in oil in a steady stream. Continue blending for several seconds, then remove and set aside.\nPrepare the shrimp: Rinse shrimp and pat dry with a papertowel. Add about 1/3 cup of dressing and toss to coat. Let sit for 15 to 20 minutes. String onto wooden or metal skewars for grilling. Grill over high heat for about 2 to 3 minutes per side. Remove from grill, let cool, them remove from skewars.\nIn a large bowl, combine mango, avocado and grilled shrimp. Add dressing to taste; toss lightly and serve.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat gas grill to high.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Make the dressing",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Combine all dressing ingredients (except oil) in a blender and blend until smooth. While blender is running, remove lid and pour in oil in a steady stream. Continue blending for several seconds, then remove and set aside.",
                            "ingredients": [
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Prepare the shrimp: Rinse shrimp and pat dry with a papertowel.",
                            "ingredients": [
                                {
                                    "id": 15270,
                                    "name": "shrimp",
                                    "localizedName": "shrimp",
                                    "image": "shrimp.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Add about 1/3 cup of dressing and toss to coat.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Let sit for 15 to 20 minutes. String onto wooden or metal skewars for grilling. Grill over high heat for about 2 to 3 minutes per side.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                }
                            ],
                            "length": {
                                "number": 17,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Remove from grill, let cool, them remove from skewars.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "In a large bowl, combine mango, avocado and grilled shrimp.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "grilled shrimp",
                                    "localizedName": "grilled shrimp",
                                    "image": "shrimp.png"
                                },
                                {
                                    "id": 9037,
                                    "name": "avocado",
                                    "localizedName": "avocado",
                                    "image": "avocado.jpg"
                                },
                                {
                                    "id": 9176,
                                    "name": "mango",
                                    "localizedName": "mango",
                                    "image": "mango.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 7,
                            "step": "Add dressing to taste; toss lightly and serve.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/avocado-mango-salad-with-grilled-shrimp-633171"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 90,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 19,
            "healthScore": 21,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 399.69,
            "extendedIngredients": [
                {
                    "id": 1011077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "milk",
                    "nameClean": "whole milk",
                    "original": "2 cups whole milk",
                    "originalName": "whole milk",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [
                        "whole"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
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
                    "id": 1053,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "fluid-cream.jpg",
                    "consistency": "LIQUID",
                    "name": "heavy cream",
                    "nameClean": "cream",
                    "original": "2 cups heavy cream",
                    "originalName": "heavy cream",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
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
                    "id": 2064,
                    "aisle": "Produce",
                    "image": "mint.jpg",
                    "consistency": "SOLID",
                    "name": "mint leaves",
                    "nameClean": "mint",
                    "original": "3/4 cup loosely packed mint leaves (no stems)",
                    "originalName": "loosely packed mint leaves (no stems)",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [
                        "loosely packed",
                        "(no stems)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10719335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "granulated sugar",
                    "nameClean": "granulated sugar",
                    "original": "1 cup granulated sugar",
                    "originalName": "granulated sugar",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 1125,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg-yolk.jpg",
                    "consistency": "SOLID",
                    "name": "egg yolks",
                    "nameClean": "egg yolk",
                    "original": "5 large egg yolks",
                    "originalName": "egg yolks",
                    "amount": 5.0,
                    "unit": "large",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 5.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        },
                        "metric": {
                            "amount": 5.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        }
                    }
                },
                {
                    "id": 19903,
                    "aisle": "Sweet Snacks",
                    "image": "dark-chocolate-pieces.jpg",
                    "consistency": "SOLID",
                    "name": "semi-sweet chocolate",
                    "nameClean": "semisweet chocolate",
                    "original": "4 ounces good quality semi-sweet chocolate cut into small chips",
                    "originalName": "good quality semi-sweet chocolate cut into small chips",
                    "amount": 4.0,
                    "unit": "ounces",
                    "meta": [
                        "cut into small chips"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 113.398,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }
            ],
            "id": 652002,
            "title": "Mint Chocolate Chip Ice Cream",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/CKJ7RVCC/mint-chocolate-chip-ice-cream",
            "image": "https://spoonacular.com/recipeImages/652002-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you have approximately <b>45 minutes</b> to spend in the kitchen, Mint Chocolate Chip Ice Cream might be an outstanding <b>gluten free</b> recipe to try. One serving contains <b>1818 calories</b>, <b>26g of protein</b>, and <b>127g of fat</b>. For <b>$4.0 per serving</b>, you get a dessert that serves 2. 19 people found this recipe to be yummy and satisfying. It is perfect for <b>Summer</b>. If you have granulated sugar, heavy cream, mint leaves, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. With a spoonacular <b>score of 74%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/ice-cream-sundays-fresh-mint-chocolate-chip-ice-cream-474124\">Ice Cream Sundays: Fresh Mint Chocolate Chip Ice Cream</a>, <a href=\"https://spoonacular.com/recipes/ice-cream-sundays-fresh-mint-chocolate-chip-ice-cream-1240333\">Ice Cream Sundays: Fresh Mint Chocolate Chip Ice Cream</a>, and <a href=\"https://spoonacular.com/recipes/mint-chocolate-chip-ice-cream-521374\">Mint Chocolate Chip Ice Cream</a>.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [
                "summer"
            ],
            "instructions": "In a large saucepan, add the milk, cream and mint. Bring the mixture to a simmer over med-low heat and then turn the heat off. Let the mixture steep for 20 minutes at room temperature.\nStrain the mixture through a fine mesh sieve into a bowl and return to the saucepan. Add 3/4 cup of the sugar and bring to a simmer, whisking occasionally to dissolve the sugar.\nIn a medium bowl, whisk the remaining sugar and egg yolks until the mixture is slightly thickened and light in color. Slowly, add 1/4 cup of the milk mixture to the eggs while whisking constantly. Continue adding the milk to the egg mixture 1/4 cup at a time until all the ingredients are combined.\nPrepare and ice bath in a large bowl and place a medium bowl in the ice bath. Place a fine mesh stainer over the bowl.\nTransfer the cream mixture to a large saucepan and cook over medium heat, stirring constantly and scraping the bottom and sides with a heatproof spatula until the custard thickens enough to coat the back of a spoon. Strain the custard into the bowl and allow to cool.\nRefrigerate the custard until cold or overnight.\nPour the custard into the freezer can of an electric ice cream maker and freeze according to the manufacturer's instructions. When the ice cream is the consistency of soft serve, add the chocolate chips and allow to blend. Transfer to an airtight storage container and freeze.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "In a large saucepan, add the milk, cream and mint. Bring the mixture to a simmer over med-low heat and then turn the heat off.",
                            "ingredients": [
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                },
                                {
                                    "id": 2064,
                                    "name": "mint",
                                    "localizedName": "mint",
                                    "image": "mint.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Let the mixture steep for 20 minutes at room temperature.",
                            "ingredients": [],
                            "equipment": [],
                            "length": {
                                "number": 20,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Strain the mixture through a fine mesh sieve into a bowl and return to the saucepan.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 405600,
                                    "name": "sieve",
                                    "localizedName": "sieve",
                                    "image": "strainer.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Add 3/4 cup of the sugar and bring to a simmer, whisking occasionally to dissolve the sugar.",
                            "ingredients": [
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "In a medium bowl, whisk the remaining sugar and egg yolks until the mixture is slightly thickened and light in color. Slowly, add 1/4 cup of the milk mixture to the eggs while whisking constantly. Continue adding the milk to the egg mixture 1/4 cup at a time until all the ingredients are combined.",
                            "ingredients": [
                                {
                                    "id": 1125,
                                    "name": "egg yolk",
                                    "localizedName": "egg yolk",
                                    "image": "egg-yolk.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Prepare and ice bath in a large bowl and place a medium bowl in the ice bath.",
                            "ingredients": [
                                {
                                    "id": 10014412,
                                    "name": "ice",
                                    "localizedName": "ice",
                                    "image": "ice-cubes.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 7,
                            "step": "Place a fine mesh stainer over the bowl.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Transfer the cream mixture to a large saucepan and cook over medium heat, stirring constantly and scraping the bottom and sides with a heatproof spatula until the custard thickens enough to coat the back of a spoon. Strain the custard into the bowl and allow to cool.",
                            "ingredients": [
                                {
                                    "id": 19170,
                                    "name": "custard",
                                    "localizedName": "custard",
                                    "image": "custard.png"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404642,
                                    "name": "spatula",
                                    "localizedName": "spatula",
                                    "image": "spatula-or-turner.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 9,
                            "step": "Refrigerate the custard until cold or overnight.",
                            "ingredients": [
                                {
                                    "id": 19170,
                                    "name": "custard",
                                    "localizedName": "custard",
                                    "image": "custard.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 10,
                            "step": "Pour the custard into the freezer can of an electric ice cream maker and freeze according to the manufacturer's instructions. When the ice cream is the consistency of soft serve, add the chocolate chips and allow to blend.",
                            "ingredients": [
                                {
                                    "id": 99278,
                                    "name": "chocolate chips",
                                    "localizedName": "chocolate chips",
                                    "image": "chocolate-chips.jpg"
                                },
                                {
                                    "id": 19095,
                                    "name": "ice cream",
                                    "localizedName": "ice cream",
                                    "image": "vanilla-ice-cream.png"
                                },
                                {
                                    "id": 19170,
                                    "name": "custard",
                                    "localizedName": "custard",
                                    "image": "custard.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404791,
                                    "name": "ice cream machine",
                                    "localizedName": "ice cream machine",
                                    "image": "ice-cream-machine.jpg"
                                }
                            ]
                        },
                        {
                            "number": 11,
                            "step": "Transfer to an airtight storage container and freeze.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/mint-chocolate-chip-ice-cream-652002"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 31,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 3229,
            "healthScore": 1,
            "creditsText": "Jen West",
            "sourceName": "Pink When",
            "pricePerServing": 53.91,
            "extendedIngredients": [
                {
                    "id": 18369,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "baking powder",
                    "original": "1/4 tsp Baking Powder",
                    "originalName": "Baking Powder",
                    "amount": 0.25,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "1/4 tsp Baking Soda",
                    "originalName": "Baking Soda",
                    "amount": 0.25,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "3/4 C Butter",
                    "originalName": "Butter",
                    "amount": 0.75,
                    "unit": "C",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        }
                    }
                },
                {
                    "id": 20027,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cornstarch",
                    "nameClean": "corn starch",
                    "original": "1/2 C Cornstarch",
                    "originalName": "Cornstarch",
                    "amount": 0.5,
                    "unit": "C",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "egg",
                    "nameClean": "egg",
                    "original": "1 Egg",
                    "originalName": "Egg",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1 1/2 C All-Purpose Flour",
                    "originalName": "All-Purpose Flour",
                    "amount": 1.5,
                    "unit": "C",
                    "meta": [
                        "all-purpose"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        }
                    }
                },
                {
                    "id": 10711111,
                    "aisle": "Baking",
                    "image": "food-coloring.png",
                    "consistency": "SOLID",
                    "name": "pink food coloring",
                    "nameClean": "food color",
                    "original": "1 drop of pink food coloring (optional)",
                    "originalName": "pink food coloring (optional)",
                    "amount": 1.0,
                    "unit": "drop",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "drop",
                            "unitLong": "drop"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "drop",
                            "unitLong": "drop"
                        }
                    }
                },
                {
                    "id": 99184,
                    "aisle": "Beverages",
                    "image": "lemonade.jpg",
                    "consistency": "SOLID",
                    "name": "pink lemonade kool-aid",
                    "nameClean": "lemonade",
                    "original": "1/2 – 3/4 tsp Pink Lemonade Kool-Aid",
                    "originalName": "1/2 – 3/4 tsp Pink Lemonade Kool-Aid",
                    "amount": 0.5,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 19336,
                    "aisle": "Baking",
                    "image": "powdered-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "powdered sugar",
                    "nameClean": "powdered sugar",
                    "original": "1/4 C Powdered Sugar",
                    "originalName": "Powdered Sugar",
                    "amount": 0.25,
                    "unit": "C",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1 1/4 C Sugar",
                    "originalName": "Sugar",
                    "amount": 1.25,
                    "unit": "C",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 1.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        }
                    }
                }
            ],
            "id": 715541,
            "title": "Pink Lemonade Crinkle Cookies",
            "readyInMinutes": 45,
            "servings": 5,
            "sourceUrl": "http://www.pinkwhen.com/pink-lemonade-crinkle-cookies/",
            "image": "https://spoonacular.com/recipeImages/715541-556x370.jpg",
            "imageType": "jpg",
            "summary": "Pink Lemonade Crinkle Cookies might be a good recipe to expand your dessert recipe box. This recipe serves 5. For <b>54 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>5g of protein</b>, <b>29g of fat</b>, and a total of <b>658 calories</b>. If you have baking powder, pink lemonade kool-aid, butter, and a few other ingredients on hand, you can make it. 3229 people were glad they tried this recipe. It is brought to you by Pink When. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so amazing. Try <a href=\"https://spoonacular.com/recipes/homemade-pink-lemonade-cookies-534398\">Homemade Pink Lemonade Cookies</a>, <a href=\"https://spoonacular.com/recipes/frosted-pink-lemonade-cookies-544764\">Frosted Pink Lemonade Cookies</a>, and <a href=\"https://spoonacular.com/recipes/sour-patch-pink-lemonade-cookies-631616\">Sour Patch Pink Lemonade Cookies</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "Prepare a cookie sheet by greasing with non-stick cooking spray. Preheat oven to 350. Cream butter and sugar together in your mixer, scraping the sides of your bowl. Add your egg and mix well. Mix in baking powder, baking soda, Kool-Aid and cornstarch. Once its well mixed (the Kool-Aid will be mixed once it turns your dough pink), add a drop of pink food coloring, if more color is desired. Next, start adding your flour a half cup at a time until its all added.Roll the dough into walnut-sized balls and roll in the powder sugar, giving them a light coating. Place 2 apart on a room-temp baking sheet (let your sheet cool in between batches if you are reusing the same one).Bake in the oven 9-10 minutes, they wont brown too much, so watch them closely. Over-baking will make them hard and crunchy!I hope you enjoy these! I will be baking another batch soon, we have a neighborhood barbecue coming up and I know these will be perfect!Want more Whistle and Ivy? Subscribe here! And dont forget to follow on Instagram and Pinterest.You may also like these Avocado Mint Chocolate Sugar Cookies or this Honey Kool-Aid TaffyUntil next time,JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow PinkWhen on Social Media, the PinkWhen blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First NameEmail AddressSubscribePowered by ConvertKit",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Prepare a cookie sheet by greasing with non-stick cooking spray. Preheat oven to 35",
                            "ingredients": [
                                {
                                    "id": 4679,
                                    "name": "cooking spray",
                                    "localizedName": "cooking spray",
                                    "image": "cooking-spray.png"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Cream butter and sugar together in your mixer, scraping the sides of your bowl.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add your egg and mix well.",
                            "ingredients": [
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Mix in baking powder, baking soda, Kool-Aid and cornstarch. Once its well mixed (the Kool-Aid will be mixed once it turns your dough pink), add a drop of pink food coloring, if more color is desired. Next, start adding your flour a half cup at a time until its all added.",
                            "ingredients": [
                                {
                                    "id": 18369,
                                    "name": "baking powder",
                                    "localizedName": "baking powder",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 10711111,
                                    "name": "food color",
                                    "localizedName": "food color",
                                    "image": "food-coloring.png"
                                },
                                {
                                    "id": 18372,
                                    "name": "baking soda",
                                    "localizedName": "baking soda",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 20027,
                                    "name": "corn starch",
                                    "localizedName": "corn starch",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Roll the dough into walnut-sized balls and roll in the powder sugar, giving them a light coating.",
                            "ingredients": [
                                {
                                    "id": 12155,
                                    "name": "walnuts",
                                    "localizedName": "walnuts",
                                    "image": "walnuts.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Place 2 apart on a room-temp baking sheet (let your sheet cool in between batches if you are reusing the same one).",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 7,
                            "step": "Bake in the oven 9-10 minutes, they wont brown too much, so watch them closely. Over-baking will make them hard and crunchy!I hope you enjoy these! I will be baking another batch soon, we have a neighborhood barbecue coming up and I know these will be perfect!Want more Whistle and Ivy? Subscribe here! And dont forget to follow on Instagram and Pinterest.You may also like these Avocado Mint Chocolate Sugar Cookies or this Honey Kool-Aid Taffy",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "sugar cookies",
                                    "localizedName": "sugar cookies",
                                    "image": "shortbread-cookies.jpg"
                                },
                                {
                                    "id": 19081,
                                    "name": "chocolate",
                                    "localizedName": "chocolate",
                                    "image": "milk-chocolate.jpg"
                                },
                                {
                                    "id": 9037,
                                    "name": "avocado",
                                    "localizedName": "avocado",
                                    "image": "avocado.jpg"
                                },
                                {
                                    "id": 19296,
                                    "name": "honey",
                                    "localizedName": "honey",
                                    "image": "honey.png"
                                },
                                {
                                    "id": 0,
                                    "name": "taffy",
                                    "localizedName": "taffy",
                                    "image": ""
                                },
                                {
                                    "id": 2064,
                                    "name": "mint",
                                    "localizedName": "mint",
                                    "image": "mint.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 8,
                            "step": "Until next time,JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow Pink",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "When on Social Media, the Pink",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 10,
                            "step": "When blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First Name",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 11,
                            "step": "Email",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 12,
                            "step": "Address",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 13,
                            "step": "Subscribe",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 14,
                            "step": "Powered by Convert",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 15,
                            "step": "Kit",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/pink-lemonade-crinkle-cookies-715541"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 16,
            "gaps": "no",
            "preparationMinutes": 5,
            "cookingMinutes": 6,
            "aggregateLikes": 641,
            "healthScore": 8,
            "creditsText": "pinkwhen.com",
            "sourceName": "pinkwhen.com",
            "pricePerServing": 144.53,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "4 tbsp butter",
                    "originalName": "butter",
                    "amount": 4.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 18009,
                    "aisle": "Frozen",
                    "image": "buttermilk-biscuits.jpg",
                    "consistency": "SOLID",
                    "name": "biscuits",
                    "nameClean": "buttermilk biscuits",
                    "original": "1 can of biscuits ( I used Pillsbury® Grands)",
                    "originalName": "biscuits ( I used Pillsbury® Grands)",
                    "amount": 1.0,
                    "unit": "can",
                    "meta": [
                        "pillsbury®",
                        "( I used Grands)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        }
                    }
                },
                {
                    "id": 6016,
                    "aisle": "Canned and Jarred",
                    "image": "cream-of-chicken-soup.jpg",
                    "consistency": "LIQUID",
                    "name": "condensed cream of chicken soup",
                    "nameClean": "condensed cream of chicken soup",
                    "original": "2 cans condensed cream of chicken soup",
                    "originalName": "condensed cream of chicken soup",
                    "amount": 2.0,
                    "unit": "cans",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cans",
                            "unitLong": "cans"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "cans",
                            "unitLong": "cans"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1 Tbsp flour",
                    "originalName": "flour",
                    "amount": 1.0,
                    "unit": "Tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
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
                    "original": "1 finely chopped onion",
                    "originalName": "finely chopped onion",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "parsley",
                    "nameClean": "parsley",
                    "original": "1 tsp parsley",
                    "originalName": "parsley",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "pepper",
                    "nameClean": "black pepper",
                    "original": "1 tsp pepper",
                    "originalName": "pepper",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2034,
                    "aisle": "Spices and Seasonings",
                    "image": "seasoning.jpg",
                    "consistency": "SOLID",
                    "name": "poultry seasoning",
                    "nameClean": "poultry seasoning",
                    "original": "2 tsp poultry seasoning",
                    "originalName": "poultry seasoning",
                    "amount": 2.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1055062,
                    "aisle": "Meat",
                    "image": "chicken-breasts.png",
                    "consistency": "SOLID",
                    "name": "chicken breasts",
                    "nameClean": "boneless skinless chicken breast",
                    "original": "3 boneless skinless chicken breasts",
                    "originalName": "boneless skinless chicken breasts",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [
                        "boneless",
                        "skinless"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "2 cups water",
                    "originalName": "water",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 715383,
            "title": "Slow Cooker Chicken and Dumplings",
            "readyInMinutes": 11,
            "servings": 6,
            "sourceUrl": "http://www.pinkwhen.com/slow-cooker-chicken-and-dumplings/",
            "image": "https://spoonacular.com/recipeImages/715383-556x370.jpg",
            "imageType": "jpg",
            "summary": "Slow Cooker Chicken and Dumplings is a main course that serves 6. One portion of this dish contains approximately <b>20g of protein</b>, <b>28g of fat</b>, and a total of <b>519 calories</b>. For <b>$1.45 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. A mixture of flour, chicken breasts, condensed cream of chicken soup, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes around <b>11 minutes</b>. 641 person have tried and liked this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 71%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-and-dumplings-1210663\">Slow Cooker Chicken and Dumplings</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-and-dumplings-1302033\">Slow Cooker Chicken and Dumplings</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-and-dumplings-1210365\">Slow Cooker Chicken and Dumplings</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "Place Slow Cooker on high.Add chicken breasts, butter, water, soup, flour, onion, poultry seasoning, pepper, and parsley. Stir and mix well. Cook on high for 4 hours. Take two forks and start shredding chicken in the mixture.After shredding chicken, tear small pieces of biscuit dough and place in slow cooker for remaining 2 hours. Stirring occasionally.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Place Slow Cooker on high.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404718,
                                    "name": "slow cooker",
                                    "localizedName": "slow cooker",
                                    "image": "slow-cooker.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add chicken breasts, butter, water, soup, flour, onion, poultry seasoning, pepper, and parsley. Stir and mix well. Cook on high for 4 hours. Take two forks and start shredding chicken in the mixture.After shredding chicken, tear small pieces of biscuit dough and place in slow cooker for remaining 2 hours. Stirring occasionally.",
                            "ingredients": [
                                {
                                    "id": 2034,
                                    "name": "poultry seasoning",
                                    "localizedName": "poultry seasoning",
                                    "image": "seasoning.jpg"
                                },
                                {
                                    "id": 5062,
                                    "name": "chicken breast",
                                    "localizedName": "chicken breast",
                                    "image": "chicken-breasts.png"
                                },
                                {
                                    "id": 18009,
                                    "name": "biscuits",
                                    "localizedName": "biscuits",
                                    "image": "buttermilk-biscuits.jpg"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 0,
                                    "name": "soup",
                                    "localizedName": "soup",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404718,
                                    "name": "slow cooker",
                                    "localizedName": "slow cooker",
                                    "image": "slow-cooker.jpg"
                                }
                            ],
                            "length": {
                                "number": 360,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-chicken-and-dumplings-715383"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 18,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 14,
            "healthScore": 3,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 183.61,
            "extendedIngredients": [
                {
                    "id": 9421,
                    "aisle": "Dried Fruits;Produce",
                    "image": "dates.jpg",
                    "consistency": "SOLID",
                    "name": "dates",
                    "nameClean": "medjool dates",
                    "original": "1 3/4 cups chopped pitted dates (about 15 large medjool dates)",
                    "originalName": "chopped pitted dates (about 15 large medjool dates)",
                    "amount": 1.75,
                    "unit": "cups",
                    "meta": [
                        "pitted",
                        "chopped",
                        "( 15 large medjool dates)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 414.029,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "3/4 cup water",
                    "originalName": "water",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19911,
                    "aisle": "Cereal",
                    "image": "maple-syrup.png",
                    "consistency": "LIQUID",
                    "name": "maple syrup",
                    "nameClean": "maple syrup",
                    "original": "cup maple syrup",
                    "originalName": "maple syrup",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 9216,
                    "aisle": "Produce",
                    "image": "orange-zest.png",
                    "consistency": "SOLID",
                    "name": "orange zest",
                    "nameClean": "orange zest",
                    "original": "A few strips of orange peels or zest",
                    "originalName": "A few of orange peels or zest",
                    "amount": 3.0,
                    "unit": "strips",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "strips",
                            "unitLong": "strips"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "strips",
                            "unitLong": "strips"
                        }
                    }
                },
                {
                    "id": 10719335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "granulated sugar",
                    "original": "2/3 cup white sugar",
                    "originalName": "white sugar",
                    "amount": 0.6666667,
                    "unit": "cup",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.667,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 157.725,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1/2 cup softened butter",
                    "originalName": "softened butter",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "softened"
                    ],
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
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1 cup of all-purpose flour (4.5 ounces)",
                    "originalName": "cup of all-purpose flour",
                    "amount": 4.5,
                    "unit": "ounces",
                    "meta": [
                        "all-purpose"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.5,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 127.573,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 8120,
                    "aisle": "Cereal",
                    "image": "rolled-oats.jpg",
                    "consistency": "SOLID",
                    "name": "rolled oats",
                    "nameClean": "rolled oats",
                    "original": "1 cup rolled oats (instant rolled oats is fine)",
                    "originalName": "rolled oats (instant rolled oats is fine)",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "instant",
                        "fine",
                        "( rolled oats is )"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "1/4 teaspoon baking soda",
                    "originalName": "baking soda",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/4 teaspoon salt",
                    "originalName": "salt",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 12220,
                    "aisle": "Health Foods;Baking",
                    "image": "flax-seeds.png",
                    "consistency": "SOLID",
                    "name": "ground flax seed",
                    "nameClean": "ground flaxseed",
                    "original": "2 tablespoons ground flax seed (optional)",
                    "originalName": "ground flax seed (optional)",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 653977,
            "title": "Orange Zest Maple Date Bars",
            "readyInMinutes": 45,
            "servings": 8,
            "sourceUrl": "https://www.foodista.com/recipe/YFWBSYDM/orange-zest-maple-date-bars",
            "image": "https://spoonacular.com/recipeImages/653977-556x370.jpg",
            "imageType": "jpg",
            "summary": "Orange Zest Maple Date Bars is a <b>lacto ovo vegetarian</b> dessert. This recipe makes 8 servings with <b>470 calories</b>, <b>4g of protein</b>, and <b>13g of fat</b> each. For <b>$1.84 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. 14 people found this recipe to be delicious and satisfying. It is brought to you by Foodista. A mixture of orange zest, butter, ground flax seed, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>not so excellent spoonacular score of 35%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/maple-whipped-sweet-potatoes-with-orange-zest-620297\">Maple Whipped Sweet Potatoes with Orange Zest</a>, <a href=\"https://spoonacular.com/recipes/maple-date-bars-56517\">Maple-Date Bars</a>, and <a href=\"https://spoonacular.com/recipes/maple-date-bars-616272\">Maple-Date Bars</a>.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "Pit the dates and chop them up into little pieces. In a medium sauce pan, combine water, dates and maple syrup and bring to a boil, stirring often. Once at a boil, add the citrus peels and stir. Turn the heat down to medium and cook down until most of the water is gone. When it starts to look like jam, its done. Place sauce pan in a freezer to quickly cool down the mixture.\nWhen date jam is cooled, preheat the oven to 400F and begin to prepare the rest of the recipe.\nCombine flour, baking soda, salt and oats in a bowl and whisk together.\nIn another large mixing bowl, beat sugar and butter until creamy.\nAdd the dry ingredients to the butter and cream and mix with a spatula or large wooden spoon until completely mixed. The texture will look quite crumbly.\nCoat  a 13x9-inch metal baking pan with cooking spray. Then begin layering your ingredients carefully.\nA.Layer half of the crumb mixture and press down in the pan to make the bottom layer crust.\nB.CAREFULLY spread your date jam on top of the crumb crust using a spatula sprayed with some oil.\nC.Finally, sprinkle the remainder of the crumb mixture on top of the date jam.\nBake for about 20-30 minutes, until the top is golden.\nCool completely before cutting.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Pit the dates and chop them up into little pieces. In a medium sauce pan, combine water, dates and maple syrup and bring to a boil, stirring often. Once at a boil, add the citrus peels and stir. Turn the heat down to medium and cook down until most of the water is gone. When it starts to look like jam, its done.",
                            "ingredients": [
                                {
                                    "id": 19911,
                                    "name": "maple syrup",
                                    "localizedName": "maple syrup",
                                    "image": "maple-syrup.png"
                                },
                                {
                                    "id": 9087,
                                    "name": "dates",
                                    "localizedName": "dates",
                                    "image": "dates.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 19297,
                                    "name": "jam",
                                    "localizedName": "jam",
                                    "image": "strawberry-jam.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Place sauce pan in a freezer to quickly cool down the mixture.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "When date jam is cooled, preheat the oven to 400F and begin to prepare the rest of the recipe.",
                            "ingredients": [
                                {
                                    "id": 9087,
                                    "name": "dates",
                                    "localizedName": "dates",
                                    "image": "dates.jpg"
                                },
                                {
                                    "id": 19297,
                                    "name": "jam",
                                    "localizedName": "jam",
                                    "image": "strawberry-jam.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 400.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Combine flour, baking soda, salt and oats in a bowl and whisk together.",
                            "ingredients": [
                                {
                                    "id": 18372,
                                    "name": "baking soda",
                                    "localizedName": "baking soda",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 8120,
                                    "name": "oats",
                                    "localizedName": "oats",
                                    "image": "rolled-oats.jpg"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "In another large mixing bowl, beat sugar and butter until creamy.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Add the dry ingredients to the butter and cream and mix with a spatula or large wooden spoon until completely mixed. The texture will look quite crumbly.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404732,
                                    "name": "wooden spoon",
                                    "localizedName": "wooden spoon",
                                    "image": "wooden-spoon.jpg"
                                },
                                {
                                    "id": 404642,
                                    "name": "spatula",
                                    "localizedName": "spatula",
                                    "image": "spatula-or-turner.jpg"
                                }
                            ]
                        },
                        {
                            "number": 7,
                            "step": "Coat  a 13x9-inch metal baking pan with cooking spray. Then begin layering your ingredients carefully.",
                            "ingredients": [
                                {
                                    "id": 4679,
                                    "name": "cooking spray",
                                    "localizedName": "cooking spray",
                                    "image": "cooking-spray.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Layer half of the crumb mixture and press down in the pan to make the bottom layer crust.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
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
                            "number": 9,
                            "step": "B.CAREFULLY spread your date jam on top of the crumb crust using a spatula sprayed with some oil.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                },
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                },
                                {
                                    "id": 9087,
                                    "name": "dates",
                                    "localizedName": "dates",
                                    "image": "dates.jpg"
                                },
                                {
                                    "id": 19297,
                                    "name": "jam",
                                    "localizedName": "jam",
                                    "image": "strawberry-jam.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404642,
                                    "name": "spatula",
                                    "localizedName": "spatula",
                                    "image": "spatula-or-turner.jpg"
                                }
                            ]
                        },
                        {
                            "number": 10,
                            "step": "C.Finally, sprinkle the remainder of the crumb mixture on top of the date jam.",
                            "ingredients": [
                                {
                                    "id": 9087,
                                    "name": "dates",
                                    "localizedName": "dates",
                                    "image": "dates.jpg"
                                },
                                {
                                    "id": 19297,
                                    "name": "jam",
                                    "localizedName": "jam",
                                    "image": "strawberry-jam.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 11,
                            "step": "Bake for about 20-30 minutes, until the top is golden.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 30,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 12,
                            "step": "Cool completely before cutting.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/orange-zest-maple-date-bars-653977"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 7,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 53.34,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "2 tablespoons (30 g) melted butter",
                    "originalName": "tablespoons melted butter",
                    "amount": 30.0,
                    "unit": "g",
                    "meta": [
                        "melted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.058,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 30.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "3 eggs, well beaten",
                    "originalName": "eggs, well beaten",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [
                        "well beaten"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1/4 cup (30 g) flour",
                    "originalName": "1/4 cup flour",
                    "amount": 30.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.058,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 30.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2025,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-nutmeg.jpg",
                    "consistency": "SOLID",
                    "name": "nutmeg",
                    "nameClean": "nutmeg",
                    "original": "1 1/2 teaspoons (7 g) nutmeg",
                    "originalName": "1/2 teaspoons nutmeg",
                    "amount": 7.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.247,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 7.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 18334,
                    "aisle": "Refrigerated;Frozen;Baking",
                    "image": "pie-crust.jpg",
                    "consistency": "SOLID",
                    "name": "prebaked pie crust",
                    "nameClean": "refrigerated pie crust",
                    "original": "1 prebaked pie crust",
                    "originalName": "prebaked pie crust",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 9307,
                    "aisle": "Produce",
                    "image": "rhubarb.jpg",
                    "consistency": "SOLID",
                    "name": "rhubarb",
                    "nameClean": "rhubarb",
                    "original": "4 cups (around 600 g) raw rhubarb, chopped into bite-sized pieces (can be 1 1/2 1 1/2 cups (300 g) sugar",
                    "originalName": "cups (around 600 g) raw rhubarb, chopped into bite-sized pieces (can be 1 1/2 1 1/2 cups sugar",
                    "amount": 150.0,
                    "unit": "g",
                    "meta": [
                        "raw",
                        "chopped",
                        "(around 600 g)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 5.291,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 150.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "a dash of salt",
                    "originalName": "salt",
                    "amount": 1.0,
                    "unit": "dash",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "dash",
                            "unitLong": "dash"
                        }
                    }
                }
            ],
            "id": 641410,
            "title": "Delicious Rhubarb Custard Pie",
            "readyInMinutes": 75,
            "servings": 8,
            "sourceUrl": "http://www.foodista.com/recipe/GFM7C4M4/delicious-rhubarb-custard-pie",
            "image": "https://spoonacular.com/recipeImages/641410-556x370.jpg",
            "imageType": "jpg",
            "summary": "Delicious Rhubarb Custard Pie requires approximately <b>1 hour and 15 minutes</b> from start to finish. One serving contains <b>170 calories</b>, <b>4g of protein</b>, and <b>11g of fat</b>. For <b>53 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. 7 people have made this recipe and would make it again. A mixture of salt, eggs, flour, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. It can be enjoyed any time, but it is especially good for <b>Mother's Day</b>. Overall, this recipe earns a <b>not so outstanding spoonacular score of 20%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/rhubarb-custard-pie-698186\">Rhubarb Custard Pie</a>, <a href=\"https://spoonacular.com/recipes/rhubarb-custard-pie-i-606661\">Rhubarb Custard Pie I</a>, and <a href=\"https://spoonacular.com/recipes/rhubarb-custard-pie-1448301\">Rhubarb Custard Pie</a>.",
            "cuisines": [],
            "dishTypes": [],
            "diets": [],
            "occasions": [
                "spring",
                "mother's day"
            ],
            "instructions": "<ol><li>Combine all the ingredients except the eggs and butter in a large bowl.</li><li>Put the mixture into a pre-baked pie crust.</li><li>Pour the beaten eggs over the rhubarb mixture.</li><li>Drizzle the melted butter over the top of the pie. Make sure all the rhubarb is covered with the eggs/butter.</li><li>Bake at 400 F (220 C) for 50 minutes. Since the crust has already been baked, you might want to tent some aluminum foil around the edges of the pie so that the exposed part of the crust doesn't get too brown.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Combine all the ingredients except the eggs and butter in a large bowl.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Put the mixture into a pre-baked pie crust.",
                            "ingredients": [
                                {
                                    "id": 18334,
                                    "name": "pie crust",
                                    "localizedName": "pie crust",
                                    "image": "pie-crust.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Pour the beaten eggs over the rhubarb mixture.",
                            "ingredients": [
                                {
                                    "id": 9307,
                                    "name": "rhubarb",
                                    "localizedName": "rhubarb",
                                    "image": "rhubarb.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Drizzle the melted butter over the top of the pie. Make sure all the rhubarb is covered with the eggs/butter.",
                            "ingredients": [
                                {
                                    "id": 9307,
                                    "name": "rhubarb",
                                    "localizedName": "rhubarb",
                                    "image": "rhubarb.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Bake at 400 F (220 C) for 50 minutes. Since the crust has already been baked, you might want to tent some aluminum foil around the edges of the pie so that the exposed part of the crust doesn't get too brown.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404765,
                                    "name": "aluminum foil",
                                    "localizedName": "aluminum foil",
                                    "image": "aluminum-foil.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 400.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ],
                            "length": {
                                "number": 50,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/delicious-rhubarb-custard-pie-641410"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 33,
            "gaps": "no",
            "preparationMinutes": 10,
            "cookingMinutes": 22,
            "aggregateLikes": 5551,
            "healthScore": 10,
            "creditsText": "Jen West",
            "sourceName": "Pink When",
            "pricePerServing": 211.24,
            "extendedIngredients": [
                {
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "1½ cups brown sugar",
                    "originalName": "brown sugar",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "2 eggs mixed with 1 tablespoon of water",
                    "originalName": "eggs mixed with 1 tablespoon of water",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [
                        "mixed",
                        "with 1 tablespoon of water"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "¾ cup all-purpose flour",
                    "originalName": "all-purpose flour",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [
                        "all-purpose"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1022020,
                    "aisle": "Spices and Seasonings",
                    "image": "garlic-powder.png",
                    "consistency": "SOLID",
                    "name": "garlic powder",
                    "nameClean": "garlic powder",
                    "original": "½ teaspoon garlic powder",
                    "originalName": "garlic powder",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2031,
                    "aisle": "Spices and Seasonings",
                    "image": "chili-powder.jpg",
                    "consistency": "SOLID",
                    "name": "ground cayenne pepper",
                    "nameClean": "ground cayenne pepper",
                    "original": "¼ teaspoon ground cayenne pepper",
                    "originalName": "ground cayenne pepper",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1082047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "kosher salt",
                    "nameClean": "kosher salt",
                    "original": "½ teaspoon kosher salt",
                    "originalName": "kosher salt",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10018079,
                    "aisle": "Bakery/Bread;Ethnic Foods;Oil, Vinegar, Salad Dressing;Baking",
                    "image": "panko.jpg",
                    "consistency": "SOLID",
                    "name": "panko bread crumbs",
                    "nameClean": "panko",
                    "original": "1 cup panko bread crumbs",
                    "originalName": "panko bread crumbs",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 98878,
                    "aisle": "Condiments",
                    "image": "hot-sauce-or-tabasco.png",
                    "consistency": "SOLID",
                    "name": "cayenne pepper sauce",
                    "nameClean": "buffalo sauce",
                    "original": "½ cup cayenne pepper sauce (like Frank's Red Hot)",
                    "originalName": "cayenne pepper sauce (like Frank's Red Hot)",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "red",
                        "hot",
                        "(like Frank's )"
                    ],
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
                    "id": 4639,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "ranch-dressing.jpg",
                    "consistency": "LIQUID",
                    "name": "ranch",
                    "nameClean": "ranch dressing",
                    "original": "ranch, for serving",
                    "originalName": "ranch, for serving",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [
                        "for serving"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1055062,
                    "aisle": "Meat",
                    "image": "chicken-breasts.png",
                    "consistency": "SOLID",
                    "name": "chicken breast",
                    "nameClean": "boneless skinless chicken breast",
                    "original": "1 pound boneless and skinless chicken breast, cut into strips",
                    "originalName": "boneless and skinless chicken breast, cut into strips",
                    "amount": 1.0,
                    "unit": "pound",
                    "meta": [
                        "boneless",
                        "skinless",
                        "cut into strips"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "unsalted butter",
                    "original": "2 tablespoons unsalted butter",
                    "originalName": "unsalted butter",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [
                        "unsalted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 715527,
            "title": "Sweet and Sticky Chicken Strips",
            "readyInMinutes": 32,
            "servings": 4,
            "sourceUrl": "http://www.pinkwhen.com/sweet-and-sticky-chicken-strips/",
            "image": "https://spoonacular.com/recipeImages/715527-556x370.jpg",
            "imageType": "jpg",
            "summary": "You can never have too many main course recipes, so give Sweet and Sticky Chicken Strips a try. One portion of this dish contains roughly <b>32g of protein</b>, <b>25g of fat</b>, and a total of <b>800 calories</b>. This recipe serves 4 and costs $2.11 per serving. 5551 person have tried and liked this recipe. This recipe from Pink When requires brown sugar, eggs, ranch, and chicken breast. From preparation to the plate, this recipe takes about <b>32 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 77%</b>. Try <a href=\"https://spoonacular.com/recipes/sweet-and-sticky-chicken-strips-1636441\">Sweet and Sticky Chicken Strips</a>, <a href=\"https://spoonacular.com/recipes/sweet-sticky-honey-soy-sauce-chicken-strips-1242883\">Sweet & Sticky Honey Soy Sauce Chicken Strips</a>, and <a href=\"https://spoonacular.com/recipes/sweet-sticky-honey-soy-sauce-chicken-strips-627472\">Sweet & Sticky Honey Soy Sauce Chicken Strips</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "Preheat your oven to 450 degrees F and line a large baking sheet with foil. Spray it generously with non-stick spray. Set aside.To one shallow bowl, add the flour. To a second shallow bowl, add the egg wash (2 eggs mixed with 1 tablespoon of water); and to a third shallow bowl, combine the bread crumbs, salt, garlic powder and cayenne pepper.Dredge the chicken strips in the flour, shaking to get rid of any excess. Transfer to the egg wash and fully coat. Finally, place the chicken strips in the panko bread crumb mixture and press to adhere where necessary. Place the chicken strips on the prepared baking sheet and spray generously with a non-stick spray. Bake for 20-22 minutes or until crispy, brown and cooked through.While the chicken is cooking, prepare your sauce. In a medium saucepan, whisk together the brown sugar, cayenne pepper sauce and butter. Bring to a boil, stirring constantly, and then remove from heat.Once the chicken has cooked, toss it in the sauce. Serve immediately with ranch. Enjoy!",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat your oven to 450 degrees F and line a large baking sheet with foil. Spray it generously with non-stick spray. Set aside.To one shallow bowl, add the flour. To a second shallow bowl, add the egg wash (2 eggs mixed with 1 tablespoon of water); and to a third shallow bowl, combine the bread crumbs, salt, garlic powder and cayenne pepper.Dredge the chicken strips in the flour, shaking to get rid of any excess.",
                            "ingredients": [
                                {
                                    "id": 2031,
                                    "name": "cayenne pepper",
                                    "localizedName": "cayenne pepper",
                                    "image": "chili-powder.jpg"
                                },
                                {
                                    "id": 1015062,
                                    "name": "chicken tenders",
                                    "localizedName": "chicken tenders",
                                    "image": "chicken-tenders-or-fingers.png"
                                },
                                {
                                    "id": 1022020,
                                    "name": "garlic powder",
                                    "localizedName": "garlic powder",
                                    "image": "garlic-powder.png"
                                },
                                {
                                    "id": 18079,
                                    "name": "breadcrumbs",
                                    "localizedName": "breadcrumbs",
                                    "image": "breadcrumbs.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404765,
                                    "name": "aluminum foil",
                                    "localizedName": "aluminum foil",
                                    "image": "aluminum-foil.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 450.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Transfer to the egg wash and fully coat. Finally, place the chicken strips in the panko bread crumb mixture and press to adhere where necessary.",
                            "ingredients": [
                                {
                                    "id": 1015062,
                                    "name": "chicken tenders",
                                    "localizedName": "chicken tenders",
                                    "image": "chicken-tenders-or-fingers.png"
                                },
                                {
                                    "id": 18064,
                                    "name": "bread",
                                    "localizedName": "bread",
                                    "image": "white-bread.jpg"
                                },
                                {
                                    "id": 10018079,
                                    "name": "panko",
                                    "localizedName": "panko",
                                    "image": "panko.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Place the chicken strips on the prepared baking sheet and spray generously with a non-stick spray.",
                            "ingredients": [
                                {
                                    "id": 1015062,
                                    "name": "chicken tenders",
                                    "localizedName": "chicken tenders",
                                    "image": "chicken-tenders-or-fingers.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Bake for 20-22 minutes or until crispy, brown and cooked through.While the chicken is cooking, prepare your sauce. In a medium saucepan, whisk together the brown sugar, cayenne pepper sauce and butter. Bring to a boil, stirring constantly, and then remove from heat.Once the chicken has cooked, toss it in the sauce.",
                            "ingredients": [
                                {
                                    "id": 2031,
                                    "name": "cayenne pepper",
                                    "localizedName": "cayenne pepper",
                                    "image": "chili-powder.jpg"
                                },
                                {
                                    "id": 19334,
                                    "name": "brown sugar",
                                    "localizedName": "brown sugar",
                                    "image": "dark-brown-sugar.png"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                }
                            ],
                            "length": {
                                "number": 22,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Serve immediately with ranch. Enjoy!",
                            "ingredients": [
                                {
                                    "id": 4639,
                                    "name": "ranch dressing",
                                    "localizedName": "ranch dressing",
                                    "image": "ranch-dressing.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/sweet-and-sticky-chicken-strips-715527"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 4,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 20,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 9.94,
            "extendedIngredients": [
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "egg",
                    "nameClean": "egg",
                    "original": "1 egg, beaten",
                    "originalName": "egg, beaten",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "beaten"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "4 1/2 cups flour",
                    "originalName": "flour",
                    "amount": 4.5,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 1.065,
                            "unitShort": "l",
                            "unitLong": "liters"
                        }
                    }
                },
                {
                    "id": 1053,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "fluid-cream.jpg",
                    "consistency": "LIQUID",
                    "name": "heavy cream",
                    "nameClean": "cream",
                    "original": "1/2 cup heavy cream",
                    "originalName": "heavy cream",
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
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "oil",
                    "nameClean": "cooking oil",
                    "original": "Oil for deep frying",
                    "originalName": "Oil for deep frying",
                    "amount": 60.0,
                    "unit": "servings",
                    "meta": [
                        "for deep frying"
                    ],
                    "measures": {
                        "us": {
                            "amount": 60.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 60.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 19336,
                    "aisle": "Baking",
                    "image": "powdered-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "powdered sugar",
                    "nameClean": "powdered sugar",
                    "original": "Powdered sugar",
                    "originalName": "Powdered sugar",
                    "amount": 60.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 60.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 60.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/2 teaspoon salt",
                    "originalName": "salt",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 4615,
                    "aisle": "Oil, Vinegar, Salad Dressing;Baking",
                    "image": "shortening.jpg",
                    "consistency": "SOLID",
                    "name": "shortening",
                    "nameClean": "shortening",
                    "original": "2 tablespoons shortening",
                    "originalName": "shortening",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "2 tablespoons sugar",
                    "originalName": "sugar",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "1/2 cup boiling water",
                    "originalName": "boiling water",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "boiling"
                    ],
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
                    "id": 18375,
                    "aisle": "Baking",
                    "image": "yeast-granules.jpg",
                    "consistency": "SOLID",
                    "name": "yeast",
                    "nameClean": "dry yeast",
                    "original": "1 pkg. yeast",
                    "originalName": "yeast",
                    "amount": 1.0,
                    "unit": "pkg",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "pkg",
                            "unitLong": "package"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "pkg",
                            "unitLong": "package"
                        }
                    }
                }
            ],
            "id": 635741,
            "title": "Bourbon Street Beignets",
            "readyInMinutes": 45,
            "servings": 60,
            "sourceUrl": "http://www.foodista.com/recipe/5MF8X8YW/bourbon-street-beignets",
            "image": "https://spoonacular.com/recipeImages/635741-556x370.jpg",
            "imageType": "jpg",
            "summary": "You can never have too many hor d'oeuvre recipes, so give Bourbon Street Beignets a try. This recipe serves 60 and costs 10 cents per serving. One serving contains <b>103 calories</b>, <b>1g of protein</b>, and <b>4g of fat</b>. This recipe from Foodista requires egg, flour, shortening, and sugar. 20 people were impressed by this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. With a spoonacular <b>score of 11%</b>, this dish is not so outstanding. <a href=\"https://spoonacular.com/recipes/apple-cider-beignets-with-butter-bourbon-dipping-sauce-318835\">Apple Cider Beignets with Butter-Bourbon Dipping Sauce</a>, <a href=\"https://spoonacular.com/recipes/bourbon-street-sundaes-698005\">Bourbon Street Sundaes</a>, and <a href=\"https://spoonacular.com/recipes/bourbon-street-buffalo-wings-745888\">Bourbon Street Buffalo Wings</a> are very similar to this recipe.",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "<ol><li>Dissolve yeast in warm water according to package instructions; set aside. </li><li>Place sugar, shortening, salt and hot water in bowl. Stir until shortening is melted and sugar is dissolved; cool to lukewarm. Add cream, egg, 3 cups flour and yeast to sugar-shortening mixture. Attach bowl and dough hook. Turn to speed \"2\" and mix 2 minutes. </li><li>Add remaining flour, 1/2 cup at a time, until dough clings to hook and cleans sides of bowl, about 5 minutes longer. </li><li>Place dough on lightly floured board and roll into a 10x24 inch rectangle. Using a sharp knife, cut dough into 2-inch squares. </li><li>In large heavy saucepan or deep fat fryer, heat oil to 360 degrees. Fry doughnuts, turning to brown on both sides, about 3 minutes. </li><li>Drain on absorbent towels and sprinkle with powdered sugar.  </li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Dissolve yeast in warm water according to package instructions; set aside.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 18375,
                                    "name": "yeast",
                                    "localizedName": "yeast",
                                    "image": "yeast-granules.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Place sugar, shortening, salt and hot water in bowl. Stir until shortening is melted and sugar is dissolved; cool to lukewarm.",
                            "ingredients": [
                                {
                                    "id": 4615,
                                    "name": "shortening",
                                    "localizedName": "shortening",
                                    "image": "shortening.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add cream, egg, 3 cups flour and yeast to sugar-shortening mixture. Attach bowl and dough hook. Turn to speed \"2\" and mix 2 minutes.",
                            "ingredients": [
                                {
                                    "id": 4615,
                                    "name": "shortening",
                                    "localizedName": "shortening",
                                    "image": "shortening.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 18375,
                                    "name": "yeast",
                                    "localizedName": "yeast",
                                    "image": "yeast-granules.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 2,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Add remaining flour, 1/2 cup at a time, until dough clings to hook and cleans sides of bowl, about 5 minutes longer.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Place dough on lightly floured board and roll into a 10x24 inch rectangle. Using a sharp knife, cut dough into 2-inch squares. In large heavy saucepan or deep fat fryer, heat oil to 360 degrees. Fry doughnuts, turning to brown on both sides, about 3 minutes.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 12135,
                                    "name": "nuts",
                                    "localizedName": "nuts",
                                    "image": "nuts-mixed.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404745,
                                    "name": "knife",
                                    "localizedName": "knife",
                                    "image": "chefs-knife.jpg"
                                }
                            ],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 6,
                            "step": "Drain on absorbent towels and sprinkle with powdered sugar.",
                            "ingredients": [
                                {
                                    "id": 19336,
                                    "name": "powdered sugar",
                                    "localizedName": "powdered sugar",
                                    "image": "powdered-sugar.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/bourbon-street-beignets-635741"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 8,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 115,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 16.47,
            "extendedIngredients": [
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "unsalted butter",
                    "original": "1 cup Unsalted Butter (softened)",
                    "originalName": "Unsalted Butter (softened)",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "unsalted",
                        "softened",
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 16097,
                    "aisle": "Nut butters, Jams, and Honey",
                    "image": "peanut-butter.png",
                    "consistency": "SOLID",
                    "name": "crunchy peanut butter",
                    "nameClean": "crunchy peanut butter",
                    "original": "1½ cups Crunchy Peanut Butter (or Sunbutter if allergic to peanuts)",
                    "originalName": "Crunchy Peanut Butter (or Sunbutter if allergic to peanuts)",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [
                        "(or Sunbutter if allergic to peanuts)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1 cup Sugar",
                    "originalName": "Sugar",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "1 cup Brown Sugar (packed)",
                    "originalName": "Brown Sugar (packed)",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "packed",
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 1016168,
                    "aisle": "Condiments",
                    "image": "hot-sauce-or-tabasco.png",
                    "consistency": "LIQUID",
                    "name": "sriracha",
                    "nameClean": "sriracha",
                    "original": "¼ c Sriracha",
                    "originalName": "Sriracha",
                    "amount": 0.25,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "2 Eggs",
                    "originalName": "Eggs",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "LIQUID",
                    "name": "vanilla extract",
                    "nameClean": "vanilla extract",
                    "original": "1 tsp Vanilla extract",
                    "originalName": "Vanilla extract",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "2¾ to 3 cups All-Purpose Flour (finished dough should be soft, but not sticky)",
                    "originalName": "All-Purpose Flour (finished dough should be soft, but not sticky)",
                    "amount": 2.75,
                    "unit": "cups",
                    "meta": [
                        "all-purpose",
                        "soft",
                        "(finished dough should be , but not sticky)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 650.617,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 18369,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "baking powder",
                    "original": "1 teaspoon Baking Powder",
                    "originalName": "Baking Powder",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "½ teaspoon Salt",
                    "originalName": "Salt",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "1½ teaspoons baking soda",
                    "originalName": "baking soda",
                    "amount": 1.5,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10719335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "granulated sugar",
                    "nameClean": "granulated sugar",
                    "original": "Granulated sugar for dipping dough balls into.",
                    "originalName": "Granulated sugar for dipping dough balls into",
                    "amount": 60.0,
                    "unit": "servings",
                    "meta": [
                        "for dipping dough balls into."
                    ],
                    "measures": {
                        "us": {
                            "amount": 60.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 60.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 93743,
                    "aisle": "Sweet Snacks",
                    "image": "hersheys-kisses-or-chocolate-kisses.jpg",
                    "consistency": "SOLID",
                    "name": "add a hershey's chocolate kiss on top as done",
                    "nameClean": "hersheys kisses brand milk chocolates",
                    "original": "Optional: 1-2 cups Chocolate Chips to add to dough. OR Add a Hershey's Chocolate Kiss on top as done for Peanut Butter Blossoms. Doesn't change baking time.",
                    "originalName": "Optional: Chocolate Chips to add to dough. OR Add a Hershey's Chocolate Kiss on top as done for Peanut Butter Blossoms. Doesn't change baking time",
                    "amount": 1.0,
                    "unit": "cups",
                    "meta": [
                        "for peanut butter blossoms. doesn't change baking time."
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 655335,
            "title": "Peanut Butter Sriracha Cookies",
            "readyInMinutes": 45,
            "servings": 60,
            "sourceUrl": "https://www.foodista.com/recipe/YGQH8YZV/peanut-butter-sriracha-cookies",
            "image": "https://spoonacular.com/recipeImages/655335-556x370.jpg",
            "imageType": "jpg",
            "summary": "Peanut Butter Sriracha Cookies is a <b>lacto ovo vegetarian</b> dessert. This recipe serves 60. One portion of this dish contains about <b>3g of protein</b>, <b>8g of fat</b>, and a total of <b>180 calories</b>. For <b>16 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. 115 people were glad they tried this recipe. A mixture of flour, crunchy peanut butter, eggs, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 15%</b>, this dish is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/healthy-peanut-butter-surprise-cookies-fudgy-brownie-cookies-with-a-peanut-butter-center-1400161\">Healthy Peanut Butter Surprise Cookies (Fudgy Brownie Cookies with a Peanut Butter Center!)</a>, <a href=\"https://spoonacular.com/recipes/healthy-peanut-butter-surprise-cookies-fudgy-brownie-cookies-with-a-peanut-butter-center-523094\">Healthy Peanut Butter Surprise Cookies (Fudgy Brownie Cookies with a Peanut Butter Center!)</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-sriracha-popcorn-balls-617080\">Peanut Butter-Sriracha Popcorn Balls</a>.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "Cream together butter, peanut butter and sugars.\nSlowly add in sriracha, eggs and vanilla. Beat until combined.\nIn another bowl mix together flour, baking powder, baking soda and salt.\nGently mix flour into peanut butter mixture until well combined. Place batter into refrigerator for 1 hour to chill.\nPre-heat oven to 375 degrees.\nRoll dough into approx 1 sized balls or use a Medium sized cookie scoop/Size 40  1tbs portion. Dip the top of dough ball into granulated sugar and place onto cookie sheet.\nFlatten each ball with a fork, making a criss-cross pattern. Bake for 8-10 minutes or just until the cookies begin to brown. Do NOT over-bake!\nCool on wire racks and enjoy!",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Cream together butter, peanut butter and sugars.",
                            "ingredients": [
                                {
                                    "id": 16098,
                                    "name": "peanut butter",
                                    "localizedName": "peanut butter",
                                    "image": "peanut-butter.png"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Slowly add in sriracha, eggs and vanilla. Beat until combined.",
                            "ingredients": [
                                {
                                    "id": 1016168,
                                    "name": "sriracha",
                                    "localizedName": "sriracha",
                                    "image": "hot-sauce-or-tabasco.png"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "In another bowl mix together flour, baking powder, baking soda and salt.",
                            "ingredients": [
                                {
                                    "id": 18369,
                                    "name": "baking powder",
                                    "localizedName": "baking powder",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 18372,
                                    "name": "baking soda",
                                    "localizedName": "baking soda",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Gently mix flour into peanut butter mixture until well combined.",
                            "ingredients": [
                                {
                                    "id": 16098,
                                    "name": "peanut butter",
                                    "localizedName": "peanut butter",
                                    "image": "peanut-butter.png"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Place batter into refrigerator for 1 hour to chill.",
                            "ingredients": [],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 6,
                            "step": "Pre-heat oven to 375 degrees.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 7,
                            "step": "Roll dough into approx 1 sized balls or use a Medium sized cookie scoop/Size 40  1tbs portion. Dip the top of dough ball into granulated sugar and place onto cookie sheet.",
                            "ingredients": [
                                {
                                    "id": 10719335,
                                    "name": "granulated sugar",
                                    "localizedName": "granulated sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "dip",
                                    "localizedName": "dip",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Flatten each ball with a fork, making a criss-cross pattern.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Bake for 8-10 minutes or just until the cookies begin to brown. Do NOT over-bake!",
                            "ingredients": [
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 10,
                            "step": "Cool on wire racks and enjoy!",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/peanut-butter-sriracha-cookies-655335"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 13,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 8,
            "healthScore": 14,
            "creditsText": "coffeebean",
            "license": "spoonacular's terms",
            "sourceName": "spoonacular",
            "pricePerServing": 159.28,
            "extendedIngredients": [
                {
                    "id": 19165,
                    "aisle": "Baking",
                    "image": "cocoa-powder.png",
                    "consistency": "SOLID",
                    "name": "cocoa powder",
                    "nameClean": "cacao powder",
                    "original": "1 tablespoon cocoa powder",
                    "originalName": "cocoa powder",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1012,
                    "aisle": "Cheese",
                    "image": "cottage-cheese.jpg",
                    "consistency": "SOLID",
                    "name": "cottage cheese",
                    "nameClean": "cottage cheese",
                    "original": "1 cup quark or cottage cheese",
                    "originalName": "quark or cottage cheese",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "3 eggs",
                    "originalName": "eggs",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 19911,
                    "aisle": "Cereal",
                    "image": "maple-syrup.png",
                    "consistency": "LIQUID",
                    "name": "maple syrup",
                    "nameClean": "maple syrup",
                    "original": "maple syrup",
                    "originalName": "maple syrup",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 8120,
                    "aisle": "Cereal",
                    "image": "rolled-oats.jpg",
                    "consistency": "SOLID",
                    "name": "rolled oats",
                    "nameClean": "rolled oats",
                    "original": "1 cup rolled oats",
                    "originalName": "rolled oats",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 157259,
            "title": "Cocoa Protein Pancakes",
            "author": "coffeebean",
            "readyInMinutes": 15,
            "servings": 2,
            "sourceUrl": "http://spoonacular.com/-1383233228884",
            "image": "https://spoonacular.com/recipeImages/157259-556x370.jpg",
            "imageType": "jpg",
            "summary": "Cocoa Protein Pancakes is a <b>gluten free and lacto ovo vegetarian</b> recipe with 2 servings. For <b>$1.59 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. One serving contains <b>410 calories</b>, <b>26g of protein</b>, and <b>14g of fat</b>. It works well as a breakfast. Head to the store and pick up maple syrup, cottage cheese, rolled oats, and a few other things to make it today. It is brought to you by spoonacular user <a href=\"/profile/coffeebean\">coffeebean</a>. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/cocoa-protein-pancakes-1636193\">Cocoa Protein Pancakes</a>, <a href=\"https://spoonacular.com/recipes/cocoa-protein-pancakes-1201837\">Cocoa Protein Pancakes</a>, and <a href=\"https://spoonacular.com/recipes/cocoa-protein-pancakes-1497417\">Cocoa Protein Pancakes</a>.",
            "cuisines": [],
            "dishTypes": [
                "morning meal",
                "brunch",
                "breakfast"
            ],
            "diets": [
                "gluten free",
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "<p><strong>1.</strong> Blend the rolled oats in a blender or food processor until you have a fine powder. Mix in the cocoa powder.<br></p><p> <strong>2.</strong> Blend the ground oats/cocoa powder with the cottage cheese (or quark, if you can find it) and eggs.</p><p> <strong>3.</strong> Pour the thick batter into a hot, oiled skillet and use the back of a spoon to form round pancakes.</p><p> <strong>4</strong>. Flip the pancakes once the sides are firm and turning brown.<strong>.</strong></p><p> <strong>5.  </strong>Serve with maple syrup.</p>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Blend the rolled oats in a blender or food processor until you have a fine powder.",
                            "ingredients": [
                                {
                                    "id": 8120,
                                    "name": "rolled oats",
                                    "localizedName": "rolled oats",
                                    "image": "rolled-oats.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Mix in the cocoa powder.",
                            "ingredients": [
                                {
                                    "id": 19165,
                                    "name": "cocoa powder",
                                    "localizedName": "cocoa powder",
                                    "image": "cocoa-powder.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Blend the ground oats/cocoa powder with the cottage cheese (or quark, if you can find it) and eggs.",
                            "ingredients": [
                                {
                                    "id": 1012,
                                    "name": "cottage cheese",
                                    "localizedName": "cottage cheese",
                                    "image": "cottage-cheese.jpg"
                                },
                                {
                                    "id": 19165,
                                    "name": "cocoa powder",
                                    "localizedName": "cocoa powder",
                                    "image": "cocoa-powder.png"
                                },
                                {
                                    "id": 93676,
                                    "name": "quark",
                                    "localizedName": "quark",
                                    "image": "white-cream-fluffy.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 8120,
                                    "name": "oats",
                                    "localizedName": "oats",
                                    "image": "rolled-oats.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Pour the thick batter into a hot, oiled skillet and use the back of a spoon to form round pancakes.",
                            "ingredients": [],
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
                            "number": 5,
                            "step": "Flip the pancakes once the sides are firm and turning brown..",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Serve with maple syrup.",
                            "ingredients": [
                                {
                                    "id": 19911,
                                    "name": "maple syrup",
                                    "localizedName": "maple syrup",
                                    "image": "maple-syrup.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/cocoa-protein-pancakes-157259"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 27,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 12,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 139.47,
            "extendedIngredients": [
                {
                    "id": 4073,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "margarine",
                    "original": "1/4 cup Butter or margarine",
                    "originalName": "Butter or margarine",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1053,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "fluid-cream.jpg",
                    "consistency": "LIQUID",
                    "name": "cream",
                    "nameClean": "cream",
                    "original": "1 1/2 cups cream",
                    "originalName": "cream",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1032,
                    "aisle": "Cheese",
                    "image": "parmesan.jpg",
                    "consistency": "SOLID",
                    "name": "parmesan cheese",
                    "nameClean": "grated parmesan cheese",
                    "original": "1 cup grated Parmesan cheese",
                    "originalName": "grated Parmesan cheese",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 11353,
                    "aisle": "Produce",
                    "image": "russet-or-idaho-potatoes.png",
                    "consistency": "SOLID",
                    "name": "russet potatoes",
                    "nameClean": "russet potato",
                    "original": "2 pounds russet potatoes, peeled and cubed",
                    "originalName": "russet potatoes, peeled and cubed",
                    "amount": 2.0,
                    "unit": "pounds",
                    "meta": [
                        "cubed",
                        "peeled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 907.185,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "1/4 teaspoon salt and pepper",
                    "originalName": "salt and pepper",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                }
            ],
            "id": 654679,
            "title": "Parmesan Mashed Potatoes",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/WRQP2BQF/parmesan-mashed-potatoes",
            "image": "https://spoonacular.com/recipeImages/654679-556x370.jpg",
            "imageType": "jpg",
            "summary": "The recipe Parmesan Mashed Potatoes can be made <b>in around 45 minutes</b>. This recipe makes 4 servings with <b>690 calories</b>, <b>15g of protein</b>, and <b>51g of fat</b> each. For <b>$1.39 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. <b>Thanksgiving</b> will be even more special with this recipe. 9 people have made this recipe and would make it again. It is brought to you by Foodista. Head to the store and pick up butter, cream, russet potatoes, and a few other things to make it today. It works well as a reasonably priced side dish. It is a good option if you're following a <b>gluten free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 48%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/parmesan-mashed-potatoes-298926\">Parmesan Mashed Potatoes</a>, <a href=\"https://spoonacular.com/recipes/parmesan-garlic-mashed-potatoes-1149223\">Parmesan Garlic Mashed Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/parmesan-rosemary-mashed-potatoes-446118\">Parmesan-Rosemary Mashed Potatoes</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [
                "thanksgiving",
                "christmas"
            ],
            "instructions": "<ol><li>Place potatoes in a medium pot and cover with cold water. Bring to a boil, heat to a simmer. Add a generous pinch of salt and continue to simmer until potatoes are fork tender, about 20 minutes. Heat cream, salt and pepper and butter in a medium saucepan over medium heat until steaming hot, about 6 minutes.</li><li>When potatoes are done, drain and return potatoes to pot to dry slightly. Optional: Run potatoes through food mill or potato ricer into pot.</li><li>Add potatoes to the cream and butter mixture. Stir in parmesan cheese, taste for seasoning.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Place potatoes in a medium pot and cover with cold water. Bring to a boil, heat to a simmer.",
                            "ingredients": [
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add a generous pinch of salt and continue to simmer until potatoes are fork tender, about 20 minutes.",
                            "ingredients": [
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 20,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Heat cream, salt and pepper and butter in a medium saucepan over medium heat until steaming hot, about 6 minutes.When potatoes are done, drain and return potatoes to pot to dry slightly. Optional: Run potatoes through food mill or potato ricer into pot.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404790,
                                    "name": "potato ricer",
                                    "localizedName": "potato ricer",
                                    "image": "potato-ricer.jpg"
                                },
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Add potatoes to the cream and butter mixture. Stir in parmesan cheese, taste for seasoning.",
                            "ingredients": [
                                {
                                    "id": 1033,
                                    "name": "parmesan",
                                    "localizedName": "parmesan",
                                    "image": "parmesan.jpg"
                                },
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/parmesan-mashed-potatoes-654679"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 14,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 22,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 243.23,
            "extendedIngredients": [
                {
                    "id": 11959,
                    "aisle": "Produce",
                    "image": "arugula-or-rocket-salad.jpg",
                    "consistency": "SOLID",
                    "name": "arugula",
                    "nameClean": "arugula",
                    "original": "arugula",
                    "originalName": "arugula",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 2069,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "balsamic-vinegar.jpg",
                    "consistency": "LIQUID",
                    "name": "balsamic vinegar",
                    "nameClean": "balsamic vinegar",
                    "original": "1 tablespoon red balsamic vinegar",
                    "originalName": "red balsamic vinegar",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "red"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 2054,
                    "aisle": "Canned and Jarred",
                    "image": "capers.jpg",
                    "consistency": "SOLID",
                    "name": "capers",
                    "nameClean": "capers",
                    "original": "1 tablespoon capers, chopped",
                    "originalName": "capers, chopped",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1009195,
                    "aisle": "Canned and Jarred",
                    "image": "calamata-or-kalamata-olives.jpg",
                    "consistency": "SOLID",
                    "name": "kalamata olives",
                    "nameClean": "kalamata olives",
                    "original": "6 black kalamata black olives, pitted and chopped",
                    "originalName": "black kalamata black olives, pitted and chopped",
                    "amount": 6.0,
                    "unit": "",
                    "meta": [
                        "black",
                        "pitted",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 4025,
                    "aisle": "Condiments",
                    "image": "mayonnaise.png",
                    "consistency": "LIQUID",
                    "name": "mayonnaise",
                    "nameClean": "mayonnaise",
                    "original": "2 tablespoons mayonnaise",
                    "originalName": "mayonnaise",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
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
                    "original": "3 tablespoons olive oil",
                    "originalName": "olive oil",
                    "amount": 3.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 10311297,
                    "aisle": "Produce",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "parsley",
                    "nameClean": "flat leaf parsley",
                    "original": "1 tablespoon Italian parsley, chopped",
                    "originalName": "Italian parsley, chopped",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "italian",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10211529,
                    "aisle": "Produce",
                    "image": "roma-tomatoes.png",
                    "consistency": "SOLID",
                    "name": "roma tomato",
                    "nameClean": "italian tomato",
                    "original": "1 Roma tomato,seeded and diced",
                    "originalName": "Roma tomato,seeded and diced",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "diced",
                        "seeded"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 21052,
                    "aisle": "Produce",
                    "image": "mixed-greens-or-mesclun.jpg",
                    "consistency": "SOLID",
                    "name": "spring salad",
                    "nameClean": "mesclun",
                    "original": "mixed spring salad",
                    "originalName": "mixed spring salad",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [
                        "mixed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11677,
                    "aisle": "Produce",
                    "image": "shallots.jpg",
                    "consistency": "SOLID",
                    "name": "shallot",
                    "nameClean": "shallot",
                    "original": "1 small shallot, finely chopped",
                    "originalName": "shallot, finely chopped",
                    "amount": 1.0,
                    "unit": "small",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "small",
                            "unitLong": "small"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "small",
                            "unitLong": "small"
                        }
                    }
                },
                {
                    "id": 15124,
                    "aisle": "Canned and Jarred",
                    "image": "canned-tuna.png",
                    "consistency": "SOLID",
                    "name": "albacore solid tuna",
                    "nameClean": "albacore tuna packed in oil",
                    "original": "1 7 oz can Albacore solid white tuna",
                    "originalName": "Albacore solid white tuna",
                    "amount": 7.0,
                    "unit": "oz",
                    "meta": [
                        "white",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 7.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 198.447,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1/2 teaspoon sugar",
                    "originalName": "sugar",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1002068,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vinegar-(white).jpg",
                    "consistency": "LIQUID",
                    "name": "white wine vinegar",
                    "nameClean": "white wine vinegar",
                    "original": "2 tablespoons white wine vinegar",
                    "originalName": "white wine vinegar",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 651453,
            "title": "Mediterrean Tuna Salad",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "http://www.foodista.com/recipe/56LBK6DL/mediterrean-tuna-salad",
            "image": "https://spoonacular.com/recipeImages/651453-556x370.jpg",
            "imageType": "jpg",
            "summary": "Mediterrean Tuna Salad requires about <b>45 minutes</b> from start to finish. One serving contains <b>522 calories</b>, <b>28g of protein</b>, and <b>42g of fat</b>. For <b>$2.43 per serving</b>, you get a main course that serves 2. Only a few people made this recipe, and 9 would say it hit the spot. A mixture of arugula, olive oil, roma tomato, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, and pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 73%</b>. This score is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/mediterrean-tuna-salad-1247823\">Mediterrean Tuna Salad</a>, <a href=\"https://spoonacular.com/recipes/mediterrean-tuna-salad-1375193\">Mediterrean Tuna Salad</a>, and <a href=\"https://spoonacular.com/recipes/mediterrean-tuna-salad-1262937\">Mediterrean Tuna Salad</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "pescatarian"
            ],
            "occasions": [],
            "instructions": "<ol><li>In a small bowl or ramekin, add the finely chopped shallot and cover with white wine vinegar and 1/2 teaspoon of sugar.</li><li>Set aside and let marinate while preparing the tuna.</li><li>Drain the tuna removing any excess water.</li><li>In a bowl, add the tuna and with a fork; break into bite size pieces.</li><li>Add the remaining ingredients and mix well.</li><li>Serve on a bed of mixed salad, tossed with olive oil and red balsamic vinaigrette. The ratio for the vinaigrette is 1 part vinegar to 3 parts oil.</li><li>Garnish with whole kalamata olives and  parsley.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "In a small bowl or ramekin, add the finely chopped shallot and cover with white wine vinegar and 1/2 teaspoon of sugar.Set aside and let marinate while preparing the tuna.",
                            "ingredients": [
                                {
                                    "id": 1002068,
                                    "name": "white wine vinegar",
                                    "localizedName": "white wine vinegar",
                                    "image": "vinegar-(white).jpg"
                                },
                                {
                                    "id": 11677,
                                    "name": "shallot",
                                    "localizedName": "shallot",
                                    "image": "shallots.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 10015121,
                                    "name": "tuna",
                                    "localizedName": "tuna",
                                    "image": "canned-tuna.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404781,
                                    "name": "ramekin",
                                    "localizedName": "ramekin",
                                    "image": "ramekin.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Drain the tuna removing any excess water.In a bowl, add the tuna and with a fork; break into bite size pieces.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 10015121,
                                    "name": "tuna",
                                    "localizedName": "tuna",
                                    "image": "canned-tuna.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the remaining ingredients and mix well.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Serve on a bed of mixed salad, tossed with olive oil and red balsamic vinaigrette. The ratio for the vinaigrette is 1 part vinegar to 3 parts oil.",
                            "ingredients": [
                                {
                                    "id": 99249,
                                    "name": "balsamic vinaigrette",
                                    "localizedName": "balsamic vinaigrette",
                                    "image": "vinaigrette.jpg"
                                },
                                {
                                    "id": 21052,
                                    "name": "mixed greens",
                                    "localizedName": "mixed greens",
                                    "image": "mixed-greens-or-mesclun.jpg"
                                },
                                {
                                    "id": 4135,
                                    "name": "vinaigrette",
                                    "localizedName": "vinaigrette",
                                    "image": "vinaigrette.jpg"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2053,
                                    "name": "vinegar",
                                    "localizedName": "vinegar",
                                    "image": "vinegar-(white).jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Garnish with whole kalamata olives and  parsley.",
                            "ingredients": [
                                {
                                    "id": 1009195,
                                    "name": "kalamata olives",
                                    "localizedName": "kalamata olives",
                                    "image": "calamata-or-kalamata-olives.jpg"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/mediterrean-tuna-salad-651453"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "GAPS_FULL",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 7,
            "healthScore": 7,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 83.9,
            "extendedIngredients": [
                {
                    "id": 2048,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "apple-cider-vinegar.jpg",
                    "consistency": "LIQUID",
                    "name": "apple cider vinegar",
                    "nameClean": "apple cider vinegar",
                    "original": "1 tablespoon apple cider vinegar",
                    "originalName": "apple cider vinegar",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10211215,
                    "aisle": "Produce",
                    "image": "garlic.jpg",
                    "consistency": "SOLID",
                    "name": "garlic cloves",
                    "nameClean": "whole garlic cloves",
                    "original": "3 garlic cloves thinly sliced",
                    "originalName": "garlic cloves thinly sliced",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11052,
                    "aisle": "Produce",
                    "image": "green-beans-or-string-beans.jpg",
                    "consistency": "SOLID",
                    "name": "green beans",
                    "nameClean": "green beans",
                    "original": "1 1/2 pounds green beans, trimmed",
                    "originalName": "green beans, trimmed",
                    "amount": 1.5,
                    "unit": "pounds",
                    "meta": [
                        "trimmed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 680.389,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "2 tablespoons extra-virgin olive oil",
                    "originalName": "extra-virgin olive oil",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [
                        "extra-virgin"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Slavosalt seasoning – or salt and pepper",
                    "originalName": "Slavosalt seasoning – or salt and pepper",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "unsalted butter",
                    "original": "2 tablespoon unsalted butter + ½ teaspoon",
                    "originalName": "unsalted butter + ½ teaspoon",
                    "amount": 2.0,
                    "unit": "tablespoon",
                    "meta": [
                        "unsalted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1012069,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vinegar-(white).jpg",
                    "consistency": "LIQUID",
                    "name": "balsamic vinegar",
                    "nameClean": "white balsamic vinegar",
                    "original": "1 tablespoon white balsamic vinegar",
                    "originalName": "white balsamic vinegar",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10511282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "yellow onion",
                    "original": "½ yellow onion, sliced",
                    "originalName": "yellow onion, sliced",
                    "amount": 0.5,
                    "unit": "",
                    "meta": [
                        "yellow",
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                }
            ],
            "id": 645416,
            "title": "Green Beans with Garlic Chips",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/4D3H7QM3/green-beans-with-garlic-chips",
            "image": "https://spoonacular.com/recipeImages/645416-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>American</b> recipes to your recipe box, Green Beans with Garlic Chips might be a recipe you should try. This side dish has <b>178 calories</b>, <b>3g of protein</b>, and <b>13g of fat</b> per serving. This gluten free, lacto ovo vegetarian, and primal recipe serves 4 and costs <b>84 cents per serving</b>. Only a few people made this recipe, and 7 would say it hit the spot. From preparation to the plate, this recipe takes about <b>45 minutes</b>. This recipe from Foodista requires balsamic vinegar, butter, green beans, and olive oil. With a spoonacular <b>score of 43%</b>, this dish is good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/sauteed-green-beans-with-garlic-chips-395227\">Sauteed Green Beans with Garlic Chips</a>, <a href=\"https://spoonacular.com/recipes/garlic-green-beans-433417\">Garlic Green Beans</a>, and <a href=\"https://spoonacular.com/recipes/garlic-green-beans-32721\">Garlic Green Beans</a>.",
            "cuisines": [
                "American"
            ],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free",
                "lacto ovo vegetarian",
                "primal"
            ],
            "occasions": [],
            "instructions": "<ol><li>Heat the oil with the garlic in a heavy skillet over medium heat. Cook stirring occasionally, until the garlic is golden. Remove the garlic from the skillet with a slotted spoon and transfer to a paper towel.</li><li>Add the butter to the oil in the skillet and heat over medium heat. Add the onions, salt and pepper and saut, until the onions are translucent and starting to turn golden.</li><li>Add the beans and continue cooking stirring occasionally. Stir in both vinegars and season with salt and pepper to taste.</li><li>Transfer the beans to a serving dish and sprinkle with the garlic chips.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Heat the oil with the garlic in a heavy skillet over medium heat. Cook stirring occasionally, until the garlic is golden.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
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
                            "step": "Remove the garlic from the skillet with a slotted spoon and transfer to a paper towel.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404636,
                                    "name": "slotted spoon",
                                    "localizedName": "slotted spoon",
                                    "image": "slotted-spoon.jpg"
                                },
                                {
                                    "id": 405895,
                                    "name": "paper towels",
                                    "localizedName": "paper towels",
                                    "image": "paper-towels.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the butter to the oil in the skillet and heat over medium heat.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
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
                            "number": 4,
                            "step": "Add the onions, salt and pepper and saut, until the onions are translucent and starting to turn golden.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
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
                            "number": 5,
                            "step": "Add the beans and continue cooking stirring occasionally. Stir in both vinegars and season with salt and pepper to taste.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Transfer the beans to a serving dish and sprinkle with the garlic chips.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                },
                                {
                                    "id": 11408,
                                    "name": "french fries",
                                    "localizedName": "french fries",
                                    "image": "french-fries-isolated.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/green-beans-with-garlic-chips-645416"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 26,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 10,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 110.76,
            "extendedIngredients": [
                {
                    "id": 10018192,
                    "aisle": "Sweet Snacks",
                    "image": "no.jpg",
                    "consistency": "SOLID",
                    "name": "cookie crumbs",
                    "nameClean": "cookie crumbs",
                    "original": "1-1 1/2 cups dry chocolate cake or cookie crumbs, depending on how much crust you like",
                    "originalName": "dry chocolate cake or cookie crumbs, depending on how much crust you like",
                    "amount": 1.0,
                    "unit": "cups",
                    "meta": [
                        "dry"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 1017,
                    "aisle": "Cheese",
                    "image": "cream-cheese.jpg",
                    "consistency": "SOLID",
                    "name": "cream cheese",
                    "nameClean": "cream cheese",
                    "original": "2 pounds cream cheese, at room temperature",
                    "originalName": "cream cheese, at room temperature",
                    "amount": 2.0,
                    "unit": "pounds",
                    "meta": [
                        "at room temperature"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 907.185,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "2 eggs",
                    "originalName": "eggs",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10719335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "granulated sugar",
                    "nameClean": "granulated sugar",
                    "original": "1 1/2 cups granulated sugar",
                    "originalName": "granulated sugar",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 18632,
                    "aisle": "Baking",
                    "image": "brownie-isolated.png",
                    "consistency": "SOLID",
                    "name": "brownies",
                    "nameClean": "brownie mix",
                    "original": "@16 1/2- 3/4 inch brownies",
                    "originalName": "brownies",
                    "amount": 16.5,
                    "unit": "inch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 16.5,
                            "unitShort": "inch",
                            "unitLong": "inches"
                        },
                        "metric": {
                            "amount": 16.5,
                            "unitShort": "inch",
                            "unitLong": "inches"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "A pinch of salt",
                    "originalName": "salt",
                    "amount": 1.0,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1/2 cup sugar (add another 1/4 to 1/2 cup if you like it sweet)",
                    "originalName": "sugar (add another 1/4 to 1/2 cup if you like it sweet)",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "sweet"
                    ],
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
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "unsalted butter",
                    "original": "1/2 cup unsalted butter",
                    "originalName": "unsalted butter",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "unsalted"
                    ],
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
                    "id": 1052050,
                    "aisle": "Baking",
                    "image": "vanilla.jpg",
                    "consistency": "SOLID",
                    "name": "vanilla",
                    "nameClean": "vanilla",
                    "original": "1 teaspoon vanilla",
                    "originalName": "vanilla",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                }
            ],
            "id": 636325,
            "title": "Brownie Cheesecake",
            "readyInMinutes": 45,
            "servings": 12,
            "sourceUrl": "http://www.foodista.com/recipe/DHPVY2XZ/brownie-cheesecake",
            "image": "https://spoonacular.com/recipeImages/636325-556x370.jpg",
            "imageType": "jpg",
            "summary": "Brownie Cheesecake is an American dessert. For <b>$1.11 per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>6g of protein</b>, <b>37g of fat</b>, and a total of <b>530 calories</b>. This recipe serves 12. Head to the store and pick up brownies, cream cheese, butter, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. 10 people were glad they tried this recipe. All things considered, we decided this recipe <b>deserves a spoonacular score of 16%</b>. This score is rather bad. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/brownie-cheesecake-131400\">Brownie Cheesecake</a>, <a href=\"https://spoonacular.com/recipes/brownie-cheesecake-1419647\">Brownie Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/brownie-cheesecake-127653\">Brownie Cheesecake</a>.",
            "cuisines": [
                "American"
            ],
            "dishTypes": [
                "dessert"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "<ol><li>Mix the crumbs, sugar and butter together in a large mixing bowl, until the crumbs clump together when gathered in your fist</li><li>Pat the crumbs in an even layer in the bottom of an 8 x 3 inch springform pan</li><li>Place the pan in a 325 degree oven and bake for 10 minutes, until the crust is firm.</li><li>Allow the crust to cool completely on a rack.</li><li>Wrap the pan with the crust twice with heavy duty aluminum foil</li><li>Place the sugar, then the cream cheese, vanilla and salt in the large bowl of a stand mixer. Mix on low speed, until the cream cheese is completely smooth. BTW, I use Philadelphia Cream Cheese as I find it the smoothest.</li><li>Add the eggs, one at a time, mixing them in completely after each addition.</li><li>Pour one third of the cream cheese mixture into the prepared pan. Add a third of the browinies, then pour in another third of the cream cheese mixture. Repeat with anothe third of the brownies, then pour on the remianign cream cheese mixture. Stick the rest of the brownies into the top of the cheesckae, pushing them down into the mixture slightly.</li><li>Place the preapred and filled pan in a larger pan, then pour in enough hot water to come up to half of the pan's height.</li><li>Bake at 325 degrees for about 1 1/4 to 1/2 hours, or until it is mostly set. Turn of the oven, then leave the cheesecake in the oven,placing  a large wooden spoon in the oven door, so that it remains slightly open. Allow the cheeecake to cool in the open oven for about an hour, then cool completley on a rack. When it's cool, wrap it very well, and cool in the refrigerator for several hours.</li><li>To unmold the cake, wipe the sides and bottom of the pan with a hot, damp towel. Run a thin metal spatula around the edge of the pan. Release the spring, then lift the cake still on the on the removable bottom from the sides of the pan. Flip the cake gently onto a cardboard round or flat platter, remove the bottom, then flip it over onto another cardboard round or flat serving platter.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Mix the crumbs, sugar and butter together in a large mixing bowl, until the crumbs clump together when gathered in your fist",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Pat the crumbs in an even layer in the bottom of an 8 x 3 inch springform pan",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404650,
                                    "name": "springform pan",
                                    "localizedName": "springform pan",
                                    "image": "cake-pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Place the pan in a 325 degree oven and bake for 10 minutes, until the crust is firm.Allow the crust to cool completely on a rack.Wrap the pan with the crust twice with heavy duty aluminum foil",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                },
                                {
                                    "id": 10018364,
                                    "name": "wrap",
                                    "localizedName": "wrap",
                                    "image": "flour-tortilla.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404765,
                                    "name": "aluminum foil",
                                    "localizedName": "aluminum foil",
                                    "image": "aluminum-foil.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Place the sugar, then the cream cheese, vanilla and salt in the large bowl of a stand mixer.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404665,
                                    "name": "stand mixer",
                                    "localizedName": "stand mixer",
                                    "image": "stand-mixer.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Mix on low speed, until the cream cheese is completely smooth. BTW, I use Philadelphia Cream Cheese as I find it the smoothest.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Add the eggs, one at a time, mixing them in completely after each addition.",
                            "ingredients": [
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Pour one third of the cream cheese mixture into the prepared pan.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
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
                            "number": 8,
                            "step": "Add a third of the browinies, then pour in another third of the cream cheese mixture. Repeat with anothe third of the brownies, then pour on the remianign cream cheese mixture. Stick the rest of the brownies into the top of the cheesckae, pushing them down into the mixture slightly.",
                            "ingredients": [
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Place the preapred and filled pan in a larger pan, then pour in enough hot water to come up to half of the pan's height.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
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
                            "number": 10,
                            "step": "Bake at 325 degrees for about 1 1/4 to 1/2 hours, or until it is mostly set. Turn of the oven, then leave the cheesecake in the oven,placing  a large wooden spoon in the oven door, so that it remains slightly open. Allow the cheeecake to cool in the open oven for about an hour, then cool completley on a rack. When it's cool, wrap it very well, and cool in the refrigerator for several hours.To unmold the cake, wipe the sides and bottom of the pan with a hot, damp towel. Run a thin metal spatula around the edge of the pan. Release the spring, then lift the cake still on the on the removable bottom from the sides of the pan. Flip the cake gently onto a cardboard round or flat platter, remove the bottom, then flip it over onto another cardboard round or flat serving platter.",
                            "ingredients": [
                                {
                                    "id": 10018364,
                                    "name": "wrap",
                                    "localizedName": "wrap",
                                    "image": "flour-tortilla.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404732,
                                    "name": "wooden spoon",
                                    "localizedName": "wooden spoon",
                                    "image": "wooden-spoon.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404642,
                                    "name": "spatula",
                                    "localizedName": "spatula",
                                    "image": "spatula-or-turner.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 120,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/brownie-cheesecake-636325"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 7,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 127,
            "healthScore": 49,
            "creditsText": "Jen West",
            "sourceName": "Pink When",
            "pricePerServing": 221.91,
            "extendedIngredients": [
                {
                    "id": 12061,
                    "aisle": "Nuts",
                    "image": "almonds.jpg",
                    "consistency": "SOLID",
                    "name": "roasted almonds",
                    "nameClean": "almonds",
                    "original": "1 cup roasted almonds",
                    "originalName": "roasted almonds",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 12061,
                    "aisle": "Nuts",
                    "image": "almonds.jpg",
                    "consistency": "SOLID",
                    "name": "almonds",
                    "nameClean": "almonds",
                    "original": "1 tablespoon slice almonds",
                    "originalName": "almonds",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10011959,
                    "aisle": "Produce",
                    "image": "arugula-or-rocket-salad.jpg",
                    "consistency": "SOLID",
                    "name": "baby arugula",
                    "nameClean": "baby arugula",
                    "original": "2 cups baby arugula",
                    "originalName": "baby arugula",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
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
                    "id": 2044,
                    "aisle": "Produce",
                    "image": "fresh-basil.jpg",
                    "consistency": "SOLID",
                    "name": "basil leaves",
                    "nameClean": "fresh basil",
                    "original": "4 basil leaves",
                    "originalName": "basil leaves",
                    "amount": 4.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "SOLID",
                    "name": "cilantro",
                    "nameClean": "cilantro",
                    "original": "½ cup cilantro",
                    "originalName": "cilantro",
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
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "½ cup extra virgin olive oil (more as needed)",
                    "originalName": "extra virgin olive oil (more as needed)",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "as needed",
                        "(more )"
                    ],
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
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "3 cloves of garlic",
                    "originalName": "garlic",
                    "amount": 3.0,
                    "unit": "cloves",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        }
                    }
                },
                {
                    "id": 21052,
                    "aisle": "Produce",
                    "image": "mixed-greens-or-mesclun.jpg",
                    "consistency": "SOLID",
                    "name": "micro greens",
                    "nameClean": "mesclun",
                    "original": "1 cup micro greens or sprouts",
                    "originalName": "micro greens or sprouts",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 9156,
                    "aisle": "Produce",
                    "image": "zest-lemon.jpg",
                    "consistency": "SOLID",
                    "name": "lemon zest",
                    "nameClean": "lemon peel",
                    "original": "zest from 1 lemon",
                    "originalName": "zest from lemon",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 12151,
                    "aisle": "Nuts;Savory Snacks",
                    "image": "pistachios.jpg",
                    "consistency": "SOLID",
                    "name": "pistachios",
                    "nameClean": "pistachio nuts",
                    "original": "½ cup shelled pistachios",
                    "originalName": "shelled pistachios",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "shelled"
                    ],
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
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "salt and black pepper",
                    "originalName": "salt and black pepper",
                    "amount": 6.0,
                    "unit": "servings",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 10011300,
                    "aisle": "Produce",
                    "image": "sugar-snap-peas.jpg",
                    "consistency": "SOLID",
                    "name": "snap peas",
                    "nameClean": "sugar snap peas",
                    "original": "1 pound snap peas",
                    "originalName": "snap peas",
                    "amount": 1.0,
                    "unit": "pound",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 93711,
                    "aisle": "Produce",
                    "image": "yellow-wax-beans.png",
                    "consistency": "SOLID",
                    "name": "wax beans",
                    "nameClean": "wax beans",
                    "original": "1 pound green or wax beans",
                    "originalName": "green or wax beans",
                    "amount": 1.0,
                    "unit": "pound",
                    "meta": [
                        "green"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1001116,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "plain-yogurt.jpg",
                    "consistency": "LIQUID",
                    "name": "yogurt",
                    "nameClean": "plain yogurt",
                    "original": "½ cup plain yogurt or sour cream",
                    "originalName": "plain yogurt or sour cream",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "plain",
                        "sour"
                    ],
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
                }
            ],
            "id": 765011,
            "title": "Snap Pea and Green Bean Salad with Arugula Pesto",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.pinkwhen.com/snap-pea-green-bean-salad-arugula-pesto/",
            "image": "https://spoonacular.com/recipeImages/765011-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>gluten free, lacto ovo vegetarian, and primal</b> recipes to your recipe box, Snap Pean and Green Bean Salad with Arugula Pesto might be a recipe you should try. This side dish has <b>314 calories</b>, <b>12g of protein</b>, and <b>22g of fat</b> per serving. This recipe serves 6. For <b>$2.22 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is liked by 127 foodies and cooks. Head to the store and pick up wax beans, basil leaves, cilantro, and a few other things to make it today. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is amazing. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-875123\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>, <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-1229543\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>, and <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-1295733\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free",
                "lacto ovo vegetarian",
                "primal"
            ],
            "occasions": [],
            "instructions": "Bring a large pot of salted water to a boil.While your water is coming to a boil, prepare your arugula pesto and cilantro cream drizzle.In the bowl of your food processor, add the almonds, pistachios, garlic, lemon zest, baby arugula and basil leaves. Pulse 8-9 times until completely broken up. With the food processor running, slowly pour in the olive oil until the pesto just comes together. Season to taste with salt and black pepper and transfer to a large bowl.In the same food processor bowl (wipe clean if you wish), combine the yogurt and cilantro. Pulse until the two ingredients come together. Season to taste with salt and black pepper and set aside.Have an ice bath ready. Add the snap peas and beans to the boiling water and blanch for about 1 minute and 30 seconds. Drain and transfer immediately to the ice bath to cool down. Drain again once the veggies are cool, and pat them dry. Add the veggies to the bowl with the pesto and toss to coat.Pour the veggies onto a large platter and drizzle with the cilantro cream. Top with micro greens and sliced almonds. Enjoy immediately or place in the refrigerator to chill.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Bring a large pot of salted water to a boil.While your water is coming to a boil, prepare your arugula pesto and cilantro cream drizzle.In the bowl of your food processor, add the almonds, pistachios, garlic, lemon zest, baby arugula and basil leaves. Pulse 8-9 times until completely broken up. With the food processor running, slowly pour in the olive oil until the pesto just comes together. Season to taste with salt and black pepper and transfer to a large bowl.In the same food processor bowl (wipe clean if you wish), combine the yogurt and cilantro. Pulse until the two ingredients come together. Season to taste with salt and black pepper and set aside.Have an ice bath ready.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 10011959,
                                    "name": "baby arugula",
                                    "localizedName": "baby arugula",
                                    "image": "arugula-or-rocket-salad.jpg"
                                },
                                {
                                    "id": 2044,
                                    "name": "fresh basil",
                                    "localizedName": "fresh basil",
                                    "image": "fresh-basil.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 12151,
                                    "name": "pistachio nuts",
                                    "localizedName": "pistachio nuts",
                                    "image": "pistachios.jpg"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 11165,
                                    "name": "cilantro",
                                    "localizedName": "cilantro",
                                    "image": "cilantro.png"
                                },
                                {
                                    "id": 12061,
                                    "name": "almonds",
                                    "localizedName": "almonds",
                                    "image": "almonds.jpg"
                                },
                                {
                                    "id": 11959,
                                    "name": "arugula",
                                    "localizedName": "arugula",
                                    "image": "arugula-or-rocket-salad.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 1116,
                                    "name": "yogurt",
                                    "localizedName": "yogurt",
                                    "image": "plain-yogurt.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                },
                                {
                                    "id": 93698,
                                    "name": "pesto",
                                    "localizedName": "pesto",
                                    "image": "basil-pesto.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 10014412,
                                    "name": "ice",
                                    "localizedName": "ice",
                                    "image": "ice-cubes.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add the snap peas and beans to the boiling water and blanch for about 1 minute and 30 seconds.",
                            "ingredients": [
                                {
                                    "id": 10011300,
                                    "name": "sugar snap peas",
                                    "localizedName": "sugar snap peas",
                                    "image": "sugar-snap-peas.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
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
                            "step": "Drain and transfer immediately to the ice bath to cool down.",
                            "ingredients": [
                                {
                                    "id": 10014412,
                                    "name": "ice",
                                    "localizedName": "ice",
                                    "image": "ice-cubes.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Drain again once the veggies are cool, and pat them dry.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Add the veggies to the bowl with the pesto and toss to coat.",
                            "ingredients": [
                                {
                                    "id": 93698,
                                    "name": "pesto",
                                    "localizedName": "pesto",
                                    "image": "basil-pesto.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Pour the veggies onto a large platter and drizzle with the cilantro cream. Top with micro greens and sliced almonds. Enjoy immediately or place in the refrigerator to chill.",
                            "ingredients": [
                                {
                                    "id": 10112061,
                                    "name": "sliced almonds",
                                    "localizedName": "sliced almonds",
                                    "image": "almonds.jpg"
                                },
                                {
                                    "id": 11165,
                                    "name": "cilantro",
                                    "localizedName": "cilantro",
                                    "image": "cilantro.png"
                                },
                                {
                                    "id": 21052,
                                    "name": "greens",
                                    "localizedName": "greens",
                                    "image": "mixed-greens-or-mesclun.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/snap-pea-and-green-bean-salad-with-arugula-pesto-765011"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 6,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 29,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 50.6,
            "extendedIngredients": [
                {
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "1/4 teaspoon baking soda",
                    "originalName": "baking soda",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1/2 cup butter, cut into cubes",
                    "originalName": "butter, cut into cubes",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "cut into cubes"
                    ],
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
                    "id": 98861,
                    "aisle": "Nut butters, Jams, and Honey;Ethnic Foods;Frozen;Baking",
                    "image": "dulce-de-leche.png",
                    "consistency": "SOLID",
                    "name": "dulce de leche",
                    "nameClean": "dulce de leche",
                    "original": "dulce de leche",
                    "originalName": "dulce de leche",
                    "amount": 24.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 24.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 24.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "3 eggs",
                    "originalName": "eggs",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1 1/4 cups flour",
                    "originalName": "flour",
                    "amount": 1.25,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 295.735,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10014214,
                    "aisle": "Tea and Coffee",
                    "image": "instant-coffee-or-instant-espresso.png",
                    "consistency": "SOLID",
                    "name": "espresso powder",
                    "nameClean": "instant espresso",
                    "original": "1 tablespoon instant espresso powder",
                    "originalName": "instant espresso powder",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "instant"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 19903,
                    "aisle": "Sweet Snacks",
                    "image": "dark-chocolate-pieces.jpg",
                    "consistency": "SOLID",
                    "name": "semisweet chocolate chip",
                    "nameClean": "semisweet chocolate",
                    "original": "1 1/4 cups semisweet chocolate chip",
                    "originalName": "semisweet chocolate chip",
                    "amount": 1.25,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 295.735,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1/2 cup sugar",
                    "originalName": "sugar",
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
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "LIQUID",
                    "name": "vanilla extract",
                    "nameClean": "vanilla extract",
                    "original": "1 tablespoon vanilla extract",
                    "originalName": "vanilla extract",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                }
            ],
            "id": 641726,
            "title": "Dulce De Leche Brownies",
            "readyInMinutes": 45,
            "servings": 24,
            "sourceUrl": "http://www.foodista.com/recipe/CCFXB5VM/dulce-de-leche-brownies",
            "image": "https://spoonacular.com/recipeImages/641726-556x370.jpg",
            "imageType": "jpg",
            "summary": "Forget going out to eat or ordering takeout every time you crave American food. Try making Dulce De Leche Brownies at home. This recipe makes 24 servings with <b>137 calories</b>, <b>2g of protein</b>, and <b>8g of fat</b> each. For <b>51 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. It works best as a dessert, and is done in around <b>45 minutes</b>. It is brought to you by Foodista. 29 people found this recipe to be delicious and satisfying. Head to the store and pick up vanillan extract, butter, sugar, and a few other things to make it today. With a spoonacular <b>score of 15%</b>, this dish is not so awesome. <a href=\"https://spoonacular.com/recipes/sweet-salty-brownies-dark-chocolate-fudge-brownies-with-dulce-de-leche-583948\">Sweet & Salty Brownies: Dark Chocolate Fudge Brownies with Dulce De Leche</a>, <a href=\"https://spoonacular.com/recipes/russian-dulce-de-leche-waffle-cake-and-instant-pot-dulce-de-leche-1062236\">Russian Dulce De Leche Waffle Cake and Instant Pot Dulce De Leche</a>, and <a href=\"https://spoonacular.com/recipes/dulce-de-leche-brownies-622907\">Dulce de Leche Brownies</a> are very similar to this recipe.",
            "cuisines": [
                "American"
            ],
            "dishTypes": [
                "dessert"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "<ol><li>Preheat the oven to 350 degrees.</li><li>Grease a 13X9 baking dish.</li><li>In a saucepan melt butter and 1 cup semi-sweet chocolate, stirring constantly over very low heat until the chocolate is melted. Stir in eggs one at a time, then stir in the sugar, vanilla, espresso powder, baking soda, and flour.</li><li>Stir in remaining chocolate chips.</li><li>Pour the batter into baking dish.</li><li>Use a knife or spatula to swirl the Dulce de Leche creating a marbled effect.</li><li>Bake for 35 to 45 minutes. The brownies center will be slightly firm when they are done. Remove from the oven and allow cool completely.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat the oven to 350 degrees.Grease a 13X9 baking dish.In a saucepan melt butter and 1 cup semi-sweet chocolate, stirring constantly over very low heat until the chocolate is melted. Stir in eggs one at a time, then stir in the sugar, vanilla, espresso powder, baking soda, and flour.Stir in remaining chocolate chips.",
                            "ingredients": [
                                {
                                    "id": 19903,
                                    "name": "semisweet chocolate",
                                    "localizedName": "semisweet chocolate",
                                    "image": "dark-chocolate-pieces.jpg"
                                },
                                {
                                    "id": 99278,
                                    "name": "chocolate chips",
                                    "localizedName": "chocolate chips",
                                    "image": "chocolate-chips.jpg"
                                },
                                {
                                    "id": 10014214,
                                    "name": "instant espresso",
                                    "localizedName": "instant espresso",
                                    "image": "instant-coffee-or-instant-espresso.png"
                                },
                                {
                                    "id": 18372,
                                    "name": "baking soda",
                                    "localizedName": "baking soda",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 19081,
                                    "name": "chocolate",
                                    "localizedName": "chocolate",
                                    "image": "milk-chocolate.jpg"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                },
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Pour the batter into baking dish.Use a knife or spatula to swirl the Dulce de Leche creating a marbled effect.",
                            "ingredients": [
                                {
                                    "id": 98861,
                                    "name": "dulce de leche",
                                    "localizedName": "dulce de leche",
                                    "image": "dulce-de-leche.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                },
                                {
                                    "id": 404642,
                                    "name": "spatula",
                                    "localizedName": "spatula",
                                    "image": "spatula-or-turner.jpg"
                                },
                                {
                                    "id": 404745,
                                    "name": "knife",
                                    "localizedName": "knife",
                                    "image": "chefs-knife.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Bake for 35 to 45 minutes. The brownies center will be slightly firm when they are done.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 35,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Remove from the oven and allow cool completely.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/dulce-de-leche-brownies-641726"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 7,
            "healthScore": 5,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 143.91,
            "extendedIngredients": [
                {
                    "id": 5062,
                    "aisle": "Meat",
                    "image": "chicken-breasts.png",
                    "consistency": "SOLID",
                    "name": "chicken breast",
                    "nameClean": "chicken breast",
                    "original": "250 g of Chicken Breast",
                    "originalName": "Chicken Breast",
                    "amount": 250.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 8.818,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 250.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 12118,
                    "aisle": "Canned and Jarred;Milk, Eggs, Other Dairy",
                    "image": "coconut-milk.png",
                    "consistency": "LIQUID",
                    "name": "coconut milk",
                    "nameClean": "coconut milk",
                    "original": "1 cup coconut milk",
                    "originalName": "coconut milk",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 1002013,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-coriander.jpg",
                    "consistency": "SOLID",
                    "name": "coriander powder",
                    "nameClean": "ground coriander",
                    "original": "1/2 teaspoon of coriander powder",
                    "originalName": "coriander powder",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1012014,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-cumin.jpg",
                    "consistency": "SOLID",
                    "name": "cumin powder",
                    "nameClean": "ground cumin",
                    "original": "1/2 teaspoon of cumin powder",
                    "originalName": "cumin powder",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10111215,
                    "aisle": "Produce;Ethnic Foods",
                    "image": "garlic-paste.png",
                    "consistency": "SOLID",
                    "name": "ginger/garlic paste",
                    "nameClean": "garlic paste",
                    "original": "2 teaspoons of Ginger/Garlic Paste",
                    "originalName": "Ginger/Garlic Paste",
                    "amount": 2.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 93740,
                    "aisle": "Gluten Free;Health Foods",
                    "image": "almond-meal-or-almond-flour.jpg",
                    "consistency": "SOLID",
                    "name": "ground almond",
                    "nameClean": "almond meal",
                    "original": "2 teaspoons of ground almond",
                    "originalName": "ground almond",
                    "amount": 2.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "oil",
                    "nameClean": "cooking oil",
                    "original": "1 tablespoon of Oil",
                    "originalName": "Oil",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 2033,
                    "aisle": "Spices and Seasonings;Baking",
                    "image": "poppyseed.png",
                    "consistency": "SOLID",
                    "name": "poppy seeds",
                    "nameClean": "poppy seeds",
                    "original": "½ teaspoon of poppy seeds",
                    "originalName": "poppy seeds",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 9299,
                    "aisle": "Dried Fruits;Produce;Baking",
                    "image": "raisins.jpg",
                    "consistency": "SOLID",
                    "name": "raisins",
                    "nameClean": "raisins",
                    "original": "3 -4 raisins",
                    "originalName": "raisins",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 teaspoon salt",
                    "originalName": "salt",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                }
            ],
            "id": 652834,
            "title": "My Chicken Korma",
            "readyInMinutes": 45,
            "servings": 3,
            "sourceUrl": "http://www.foodista.com/recipe/DYMLK2QG/my-chicken-korma",
            "image": "https://spoonacular.com/recipeImages/652834-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>gluten free, dairy free, whole 30, and ketogenic</b> recipes to your collection, My Chicken Korma might be a recipe you should try. This main course has <b>315 calories</b>, <b>20g of protein</b>, and <b>25g of fat</b> per serving. This recipe serves 3. For <b>$1.44 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. 7 people found this recipe to be flavorful and satisfying. Head to the store and pick up oil, ginger/garlic paste, salt, and a few other things to make it today. It is brought to you by Foodista. This recipe is typical of Indian cuisine. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 41%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-korma-how-to-make-veg-korma-487584\">vegetable korma , how to make veg korma</a>, <a href=\"https://spoonacular.com/recipes/vegetable-korma-how-to-make-veg-korma-1265641\">vegetable korma , how to make veg korma</a>, and <a href=\"https://spoonacular.com/recipes/vegetable-korma-how-to-make-veg-korma-1262709\">vegetable korma , how to make veg korma</a>.",
            "cuisines": [
                "Indian",
                "Asian"
            ],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "whole 30",
                "ketogenic"
            ],
            "occasions": [],
            "instructions": "<ol><li>Cut the chicken breasts into small pieces.</li><li>Heat Oil in a pan. Add the ginger/garlic paste to the oil and fry it for about 3 mins at a low heat. Then add cumin, coriander, almond and poppy seeds. Fry the masala for about 3-4 mins at a low heat.</li><li>Add the chicken pieces to the masala and continue to fry for another 5 mins at a low heat, stirring carefully and folding the masala from across the pan.</li><li>Add the coconut milk, stir the chicken pieces and ensure they are covered with coconut milk. Add salt to taste and the raisins.</li><li>Cover the pan and let the chicken cook with occasional stirring.</li><li>Serve with basmati rice.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Cut the chicken breasts into small pieces.",
                            "ingredients": [
                                {
                                    "id": 5062,
                                    "name": "chicken breast",
                                    "localizedName": "chicken breast",
                                    "image": "chicken-breasts.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Heat Oil in a pan.",
                            "ingredients": [
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
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
                            "number": 3,
                            "step": "Add the ginger/garlic paste to the oil and fry it for about 3 mins at a low heat. Then add cumin, coriander, almond and poppy seeds. Fry the masala for about 3-4 mins at a low heat.",
                            "ingredients": [
                                {
                                    "id": 10111215,
                                    "name": "garlic paste",
                                    "localizedName": "garlic paste",
                                    "image": "garlic-paste.png"
                                },
                                {
                                    "id": 2033,
                                    "name": "poppy seeds",
                                    "localizedName": "poppy seeds",
                                    "image": "poppyseed.png"
                                },
                                {
                                    "id": 1012013,
                                    "name": "coriander",
                                    "localizedName": "coriander",
                                    "image": "ground-coriander.jpg"
                                },
                                {
                                    "id": 12061,
                                    "name": "almonds",
                                    "localizedName": "almonds",
                                    "image": "almonds.jpg"
                                },
                                {
                                    "id": 11216,
                                    "name": "ginger",
                                    "localizedName": "ginger",
                                    "image": "ginger.png"
                                },
                                {
                                    "id": 1002014,
                                    "name": "cumin",
                                    "localizedName": "cumin",
                                    "image": "ground-cumin.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 7,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Add the chicken pieces to the masala and continue to fry for another 5 mins at a low heat, stirring carefully and folding the masala from across the pan.",
                            "ingredients": [
                                {
                                    "id": 1005006,
                                    "name": "chicken pieces",
                                    "localizedName": "chicken pieces",
                                    "image": "chicken-parts.jpg"
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
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Add the coconut milk, stir the chicken pieces and ensure they are covered with coconut milk.",
                            "ingredients": [
                                {
                                    "id": 1005006,
                                    "name": "chicken pieces",
                                    "localizedName": "chicken pieces",
                                    "image": "chicken-parts.jpg"
                                },
                                {
                                    "id": 12118,
                                    "name": "coconut milk",
                                    "localizedName": "coconut milk",
                                    "image": "coconut-milk.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Add salt to taste and the raisins.Cover the pan and let the chicken cook with occasional stirring.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 9299,
                                    "name": "raisins",
                                    "localizedName": "raisins",
                                    "image": "raisins.jpg"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
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
                            "number": 7,
                            "step": "Serve with basmati rice.",
                            "ingredients": [
                                {
                                    "id": 10020444,
                                    "name": "basmati rice",
                                    "localizedName": "basmati rice",
                                    "image": "rice-white-long-grain-or-basmatii-cooked.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/my-chicken-korma-652834"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 12,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 49,
            "healthScore": 20,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 329.59,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1 tablespoon butter",
                    "originalName": "butter",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 5062,
                    "aisle": "Meat",
                    "image": "chicken-breasts.png",
                    "consistency": "SOLID",
                    "name": "chicken breasts halves",
                    "nameClean": "chicken breast",
                    "original": "4 boneless chicken breasts halves",
                    "originalName": "boneless chicken breasts halves",
                    "amount": 4.0,
                    "unit": "",
                    "meta": [
                        "boneless"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1022020,
                    "aisle": "Spices and Seasonings",
                    "image": "garlic-powder.png",
                    "consistency": "SOLID",
                    "name": "garlic powder",
                    "nameClean": "garlic powder",
                    "original": "2 teaspoons garlic powder",
                    "originalName": "garlic powder",
                    "amount": 2.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 99250,
                    "aisle": "Cheese",
                    "image": "cream-cheese.jpg",
                    "consistency": "SOLID",
                    "name": "alouette garlic & herbs spreadable cheese",
                    "nameClean": "garlic herb spreadable cheese",
                    "original": "1 package (6.5 oz.) Alouette Garlic & Herbs Spreadable Cheese",
                    "originalName": "package Alouette Garlic & Herbs Spreadable Cheese",
                    "amount": 6.5,
                    "unit": "oz",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6.5,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 184.272,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "1 tablespoon milk",
                    "originalName": "milk",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 2028,
                    "aisle": "Spices and Seasonings",
                    "image": "paprika.jpg",
                    "consistency": "SOLID",
                    "name": "paprika",
                    "nameClean": "paprika",
                    "original": "8 teaspoons paprika",
                    "originalName": "paprika",
                    "amount": 8.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 8.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                }
            ],
            "id": 632244,
            "title": "Alouette Chicken Paprika",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/62BLCZVT/alouette-chicken-paprika",
            "image": "https://spoonacular.com/recipeImages/632244-556x370.jpg",
            "imageType": "jpg",
            "summary": "Alouette Chicken Paprika takes around <b>45 minutes</b> from beginning to end. One serving contains <b>461 calories</b>, <b>51g of protein</b>, and <b>25g of fat</b>. This recipe serves 4 and costs $3.3 per serving. This recipe is liked by 49 foodies and cooks. A mixture of butter, alouette garlic & herbs spreadable cheese, paprika, and a handful of other ingredients are all it takes to make this recipe so tasty. A couple people really liked this main course. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free and primal</b> diet. With a spoonacular <b>score of 95%</b>, this dish is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/chicken-alouette-1300127\">Chicken Alouette</a>, <a href=\"https://spoonacular.com/recipes/chicken-alouette-135800\">Chicken Alouette</a>, and <a href=\"https://spoonacular.com/recipes/alouette-summer-vegetables-105199\">Alouette Summer Vegetables</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "primal"
            ],
            "occasions": [],
            "instructions": "<ol><li>Coat chicken with a mixture of 6 tsp. of paprika and all of the garlic powder.</li><li>Saut chicken in butter over medium heat about 5 minutes on each side.</li><li>Cover and simmer 15 minutes on low heat. Remove chicken from skillet, reserving liquid.</li><li>Combine milk, Alouette Spreadable Cheese and remaining paprika in a small mixing bowl.</li><li>Pour Alouette Garlic & Herbs Spreadable Cheese mixture into skillet, stirring well with reserved liquid.</li><li>To serve, pour sauce over chicken. Use remaining sauce over rice, pasta or potatoes.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Coat chicken with a mixture of 6 tsp. of paprika and all of the garlic powder.Saut chicken in butter over medium heat about 5 minutes on each side.Cover and simmer 15 minutes on low heat.",
                            "ingredients": [
                                {
                                    "id": 1022020,
                                    "name": "garlic powder",
                                    "localizedName": "garlic powder",
                                    "image": "garlic-powder.png"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 2028,
                                    "name": "paprika",
                                    "localizedName": "paprika",
                                    "image": "paprika.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 20,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Remove chicken from skillet, reserving liquid.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
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
                            "number": 3,
                            "step": "Combine milk, Alouette",
                            "ingredients": [
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Spreadable Cheese and remaining paprika in a small mixing bowl.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "spreadable cheese",
                                    "localizedName": "spreadable cheese",
                                    "image": ""
                                },
                                {
                                    "id": 2028,
                                    "name": "paprika",
                                    "localizedName": "paprika",
                                    "image": "paprika.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Pour Alouette Garlic & Herbs",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 1002044,
                                    "name": "herbs",
                                    "localizedName": "herbs",
                                    "image": "mixed-fresh-herbs.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Spreadable Cheese mixture into skillet, stirring well with reserved liquid.To serve, pour sauce over chicken. Use remaining sauce over rice, pasta or potatoes.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "spreadable cheese",
                                    "localizedName": "spreadable cheese",
                                    "image": ""
                                },
                                {
                                    "id": 11352,
                                    "name": "potato",
                                    "localizedName": "potato",
                                    "image": "potatoes-yukon-gold.png"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 20420,
                                    "name": "pasta",
                                    "localizedName": "pasta",
                                    "image": "fusilli.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
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
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/alouette-chicken-paprika-632244"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 9,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 55,
            "healthScore": 32,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 220.3,
            "extendedIngredients": [
                {
                    "id": 10123,
                    "aisle": "Meat",
                    "image": "raw-bacon.png",
                    "consistency": "SOLID",
                    "name": "bacon",
                    "nameClean": "applewood smoked bacon",
                    "original": "6 slices of bacon",
                    "originalName": "bacon",
                    "amount": 6.0,
                    "unit": "slices",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "pepper",
                    "nameClean": "black pepper",
                    "original": "freshly ground black pepper",
                    "originalName": "freshly ground black pepper",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [
                        "black",
                        "freshly ground"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1002047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "coarse salt",
                    "nameClean": "coarse salt",
                    "original": "coarse salt",
                    "originalName": "coarse salt",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 99226,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "fresh-sage.png",
                    "consistency": "SOLID",
                    "name": "sage",
                    "nameClean": "sage",
                    "original": "10 leaves fresh sage",
                    "originalName": "fresh sage",
                    "amount": 10.0,
                    "unit": "leaves",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 10.0,
                            "unitShort": "leaf",
                            "unitLong": "leaves"
                        },
                        "metric": {
                            "amount": 10.0,
                            "unitShort": "leaf",
                            "unitLong": "leaves"
                        }
                    }
                },
                {
                    "id": 1022020,
                    "aisle": "Spices and Seasonings",
                    "image": "garlic-powder.png",
                    "consistency": "SOLID",
                    "name": "garlic powder",
                    "nameClean": "garlic powder",
                    "original": "1 pinch garlic powder",
                    "originalName": "garlic powder",
                    "amount": 1.0,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 10218,
                    "aisle": "Meat",
                    "image": "pork-tenderloin-raw.png",
                    "consistency": "SOLID",
                    "name": "pork tenderloin",
                    "nameClean": "pork tenderloin",
                    "original": "2 pounds pork tenderloin",
                    "originalName": "pork tenderloin",
                    "amount": 2.0,
                    "unit": "pounds",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 907.185,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }
            ],
            "id": 633344,
            "title": "Bacon Wrapped Pork Tenderloin",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/LJ8B3NK7/bacon-wrapped-pork-tenderloin",
            "image": "https://spoonacular.com/recipeImages/633344-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>gluten free, dairy free, paleolithic, and primal</b> recipes to your repertoire, Bacon Wrapped Pork Tenderloin might be a recipe you should try. For <b>$2.2 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. This recipe makes 4 servings with <b>410 calories</b>, <b>51g of protein</b>, and <b>21g of fat</b> each. It works best as a main course, and is done in approximately <b>45 minutes</b>. Head to the store and pick up bacon, pepper, coarse salt, and a few other things to make it today. 55 people found this recipe to be scrumptious and satisfying. It is brought to you by Foodista. With a spoonacular <b>score of 95%</b>, this dish is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/bacon-wrapped-pork-tenderloin-269108\">Bacon-Wrapped Pork Tenderloin</a>, <a href=\"https://spoonacular.com/recipes/bacon-wrapped-pork-tenderloin-422625\">Bacon Wrapped Pork Tenderloin</a>, and <a href=\"https://spoonacular.com/recipes/bacon-wrapped-pork-tenderloin-253608\">Bacon Wrapped Pork Tenderloin</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal",
                "whole 30"
            ],
            "occasions": [],
            "instructions": "<ol><li>Remove about an inch off the tapered end of each tenderloin to make a perfect cylinder.</li><li>Season with salt, pepper, and a pinch of garlic powder.</li><li>Lay the bacon strips in a overlapping line on a sheet of cling wrap.  Place sage leaves all over bacon (about 9-10 leaves).</li><li>Place 1 piece of tenderloin across the short ends of the bacon and roll to cover with the bacon.</li><li>Repeat with the other tenderloin segments.</li><li>Preheat oven to 425 F.</li><li>Place the tenderloin in non-stick pan and sear on all sides over medium-high heat.</li><li>Transfer the pan to the preheated oven and cook for 8-10 minutes, turning the pieces after 5 minutes to ensure even cooking.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Remove about an inch off the tapered end of each tenderloin to make a perfect cylinder.Season with salt, pepper, and a pinch of garlic powder.",
                            "ingredients": [
                                {
                                    "id": 1022020,
                                    "name": "garlic powder",
                                    "localizedName": "garlic powder",
                                    "image": "garlic-powder.png"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Lay the bacon strips in a overlapping line on a sheet of cling wrap.",
                            "ingredients": [
                                {
                                    "id": 10123,
                                    "name": "bacon",
                                    "localizedName": "bacon",
                                    "image": "raw-bacon.png"
                                },
                                {
                                    "id": 10018364,
                                    "name": "wrap",
                                    "localizedName": "wrap",
                                    "image": "flour-tortilla.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Place sage leaves all over bacon (about 9-10 leaves).",
                            "ingredients": [
                                {
                                    "id": 99226,
                                    "name": "sage",
                                    "localizedName": "sage",
                                    "image": "fresh-sage.png"
                                },
                                {
                                    "id": 10123,
                                    "name": "bacon",
                                    "localizedName": "bacon",
                                    "image": "raw-bacon.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Place 1 piece of tenderloin across the short ends of the bacon and roll to cover with the bacon.Repeat with the other tenderloin segments.Preheat oven to 425 F.",
                            "ingredients": [
                                {
                                    "id": 10123,
                                    "name": "bacon",
                                    "localizedName": "bacon",
                                    "image": "raw-bacon.png"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 425.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Place the tenderloin in non-stick pan and sear on all sides over medium-high heat.",
                            "ingredients": [],
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
                            "number": 6,
                            "step": "Transfer the pan to the preheated oven and cook for 8-10 minutes, turning the pieces after 5 minutes to ensure even cooking.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/bacon-wrapped-pork-tenderloin-633344"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 16,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 34,
            "healthScore": 8,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 190.73,
            "extendedIngredients": [
                {
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "4 tablespoons brown sugar",
                    "originalName": "brown sugar",
                    "amount": 4.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 5100,
                    "aisle": "Meat",
                    "image": "chicken-wings.png",
                    "consistency": "SOLID",
                    "name": "chicken wings",
                    "nameClean": "chicken wings",
                    "original": "40 oz chicken wings",
                    "originalName": "chicken wings",
                    "amount": 40.0,
                    "unit": "oz",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 40.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 1.134,
                            "unitShort": "kgs",
                            "unitLong": "kgs"
                        }
                    }
                },
                {
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "SOLID",
                    "name": "cilantro",
                    "nameClean": "cilantro",
                    "original": "1/2 cup Cilantro, Roughly Chopped",
                    "originalName": "Cilantro, Roughly Chopped",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "roughly chopped"
                    ],
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
                    "id": 1022020,
                    "aisle": "Spices and Seasonings",
                    "image": "garlic-powder.png",
                    "consistency": "SOLID",
                    "name": "garlic powder",
                    "nameClean": "garlic powder",
                    "original": "2 tbsp Garlic Powder",
                    "originalName": "Garlic Powder",
                    "amount": 2.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2021,
                    "aisle": "Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ground ginger",
                    "nameClean": "ginger powder",
                    "original": "2 tbsp Ground Ginger",
                    "originalName": "Ground Ginger",
                    "amount": 2.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 19296,
                    "aisle": "Nut butters, Jams, and Honey",
                    "image": "honey.png",
                    "consistency": "LIQUID",
                    "name": "honey",
                    "nameClean": "honey",
                    "original": "4 teaspoons honey",
                    "originalName": "honey",
                    "amount": 4.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 9159,
                    "aisle": "Produce",
                    "image": "lime.jpg",
                    "consistency": "SOLID",
                    "name": "lime",
                    "nameClean": "lime",
                    "original": "1/2 lime",
                    "originalName": "lime",
                    "amount": 0.5,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 6970,
                    "aisle": "Canned and Jarred",
                    "image": "chicken-broth.png",
                    "consistency": "LIQUID",
                    "name": "chicken broth",
                    "nameClean": "low sodium chicken broth",
                    "original": "1/4 cup Low Sodium Chicken Broth",
                    "originalName": "Low Sodium Chicken Broth",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "low sodium"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
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
                    "original": "2 tbsp Olive Oil",
                    "originalName": "Olive Oil",
                    "amount": 2.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2026,
                    "aisle": "Spices and Seasonings",
                    "image": "onion-powder.jpg",
                    "consistency": "SOLID",
                    "name": "onion powder",
                    "nameClean": "onion powder",
                    "original": "1 tbsp Onion Powder",
                    "originalName": "Onion Powder",
                    "amount": 1.0,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and Pepper",
                    "originalName": "Salt and Pepper",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1016168,
                    "aisle": "Condiments",
                    "image": "hot-sauce-or-tabasco.png",
                    "consistency": "LIQUID",
                    "name": "sriracha",
                    "nameClean": "sriracha",
                    "original": "1/4 cup Sriracha",
                    "originalName": "Sriracha",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 633651,
            "title": "Baked Honey Sriracha Chicken Wings",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/VK2D4Q2P/baked-honey-sriracha-chicken-wings",
            "image": "https://spoonacular.com/recipeImages/633651-556x370.jpg",
            "imageType": "jpg",
            "summary": "Forget going out to eat or ordering takeout every time you crave American food. Try making Baked Honey Sriracha Chicken Wings at home. This gluten free and dairy free recipe serves 4 and costs <b>$1.91 per serving</b>. One serving contains <b>506 calories</b>, <b>30g of protein</b>, and <b>32g of fat</b>. 34 people have tried and liked this recipe. This recipe from Foodista requires brown sugar, chicken wings, sriracha, and ground ginger. It works well as a hor d'oeuvre. From preparation to the plate, this recipe takes about <b>45 minutes</b>. With a spoonacular <b>score of 57%</b>, this dish is good. <a href=\"https://spoonacular.com/recipes/baked-honey-sriracha-chicken-wings-590767\">Baked Honey-Sriracha Chicken Wings</a>, <a href=\"https://spoonacular.com/recipes/honey-baked-sriracha-chicken-wings-163041\">Honey-Baked Sriracha Chicken Wings</a>, and <a href=\"https://spoonacular.com/recipes/baked-honey-sriracha-wings-1522195\">Baked Honey Sriracha Wings</a> are very similar to this recipe.",
            "cuisines": [
                "American"
            ],
            "dishTypes": [
                "antipasti",
                "lunch",
                "main course",
                "starter",
                "snack",
                "appetizer",
                "main dish",
                "antipasto",
                "hor d'oeuvre",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [],
            "instructions": "<ol><li>Directions:</li><li>1. Preheat oven to 425 degrees Fahrenheit. Place chicken on baking sheets ( you will need 2). Add olive oil, salt and pepper to chicken. Toss chicken on baking sheet. Place in a single layer, making sure that no chicken touch. Cook for 10 minutes, then flip and cook for 10 more.</li><li>2. Preheat broiler.Take chicken out. Spoon about 1 TBSP of sauce over each wing. Place in oven and cook until turned slightly browned, about 5 minutes. Flip the chicken so that all have skin side up. Pour the rest of the sauce over chicken. Place back in broiler and cook till skin is crispy, about 10 minutes.</li><li>3. Once done, toss chicken with sauce created on pan. Serve and garnish with cilantro.</li><li>ENJOY!</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 425 degrees Fahrenheit.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 425.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Place chicken on baking sheets ( you will need 2).",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add olive oil, salt and pepper to chicken. Toss chicken on baking sheet.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Place in a single layer, making sure that no chicken touch. Cook for 10 minutes, then flip and cook for 10 more.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Preheat broiler.Take chicken out. Spoon about 1 TBSP of sauce over each wing.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405914,
                                    "name": "broiler",
                                    "localizedName": "broiler",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Place in oven and cook until turned slightly browned, about 5 minutes. Flip the chicken so that all have skin side up.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Pour the rest of the sauce over chicken.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 8,
                            "step": "Place back in broiler and cook till skin is crispy, about 10 minutes.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 405914,
                                    "name": "broiler",
                                    "localizedName": "broiler",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 9,
                            "step": "Once done, toss chicken with sauce created on pan.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
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
                            "number": 10,
                            "step": "Serve and garnish with cilantro.ENJOY!",
                            "ingredients": [
                                {
                                    "id": 11165,
                                    "name": "cilantro",
                                    "localizedName": "cilantro",
                                    "image": "cilantro.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/baked-honey-sriracha-chicken-wings-633651"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 41,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 8,
            "healthScore": 53,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 617.9,
            "extendedIngredients": [
                {
                    "id": 10011457,
                    "aisle": "Produce",
                    "image": "spinach.jpg",
                    "consistency": "SOLID",
                    "name": "spinach",
                    "nameClean": "spinach",
                    "original": "250g fresh spinach, cleaned",
                    "originalName": "fresh spinach, cleaned",
                    "amount": 250.0,
                    "unit": "g",
                    "meta": [
                        "fresh",
                        "cleaned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8.818,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 250.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11260,
                    "aisle": "Produce",
                    "image": "mushrooms-white.jpg",
                    "consistency": "SOLID",
                    "name": "mushrooms",
                    "nameClean": "fresh mushrooms",
                    "original": "4 large mushrooms (about 400g), stems separated from caps",
                    "originalName": "large mushrooms (about , stems separated from caps",
                    "amount": 400.0,
                    "unit": "g",
                    "meta": [
                        "separated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 14.11,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 400.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "½ Tbs butter",
                    "originalName": "butter",
                    "amount": 0.5,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
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
                    "original": "½ onion, chopped",
                    "originalName": "onion, chopped",
                    "amount": 0.5,
                    "unit": "",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1036,
                    "aisle": "Cheese",
                    "image": "ricotta.png",
                    "consistency": "SOLID",
                    "name": "ricotta cheese",
                    "nameClean": "ricotta cheese",
                    "original": "250g ricotta cheese",
                    "originalName": "ricotta cheese",
                    "amount": 250.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 8.818,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 250.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1004,
                    "aisle": "Cheese",
                    "image": "blue-cheese.png",
                    "consistency": "SOLID",
                    "name": "cheese",
                    "nameClean": "blue cheese",
                    "original": "50 g blue cheese",
                    "originalName": "blue cheese",
                    "amount": 50.0,
                    "unit": "g",
                    "meta": [
                        "blue"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.764,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 50.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "pepper",
                    "nameClean": "black pepper",
                    "original": "¼ tsp black pepper",
                    "originalName": "black pepper",
                    "amount": 0.25,
                    "unit": "tsp",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11156,
                    "aisle": "Produce",
                    "image": "fresh-chives.jpg",
                    "consistency": "SOLID",
                    "name": "chives",
                    "nameClean": "chives",
                    "original": "Fresh chives, chopped",
                    "originalName": "Fresh chives, chopped",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [
                        "fresh",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 18079,
                    "aisle": "Pasta and Rice",
                    "image": "breadcrumbs.jpg",
                    "consistency": "SOLID",
                    "name": "breadcrumbs",
                    "nameClean": "breadcrumbs",
                    "original": "2 Tbs homemade breadcrumbs",
                    "originalName": "homemade breadcrumbs",
                    "amount": 2.0,
                    "unit": "Tbs",
                    "meta": [
                        "homemade"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        }
                    }
                },
                {
                    "id": 1033,
                    "aisle": "Cheese",
                    "image": "parmesan.jpg",
                    "consistency": "SOLID",
                    "name": "parmesan cheese",
                    "nameClean": "parmesan",
                    "original": "2 Tbs Parmesan cheese, grated",
                    "originalName": "Parmesan cheese, grated",
                    "amount": 2.0,
                    "unit": "Tbs",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
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
                    "original": "2 Tbs olive oil",
                    "originalName": "olive oil",
                    "amount": 2.0,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        }
                    }
                },
                {
                    "id": 93803,
                    "aisle": "Pasta and Rice;Ethnic Foods",
                    "image": "dry-udon-noodles.png",
                    "consistency": "SOLID",
                    "name": "rice pasta",
                    "nameClean": "chow mein noodles",
                    "original": "400g Chow Mein Noodles or rice pasta",
                    "originalName": "Chow Mein Noodles or rice pasta",
                    "amount": 400.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 14.11,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 400.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "3 cloves garlic, crushed",
                    "originalName": "garlic, crushed",
                    "amount": 3.0,
                    "unit": "cloves",
                    "meta": [
                        "crushed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        }
                    }
                },
                {
                    "id": 1056,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "sour-cream.jpg",
                    "consistency": "SOLID",
                    "name": "cream",
                    "nameClean": "sour cream",
                    "original": "2 Tbs sour cream",
                    "originalName": "sour cream",
                    "amount": 2.0,
                    "unit": "Tbs",
                    "meta": [
                        "sour"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        }
                    }
                },
                {
                    "id": 1012047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "sea salt",
                    "nameClean": "coarse sea salt",
                    "original": "¼ tsp sea salt",
                    "originalName": "sea salt",
                    "amount": 0.25,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "parsley",
                    "nameClean": "parsley",
                    "original": "Parsley for sprinkling, chopped",
                    "originalName": "Parsley for sprinkling, chopped",
                    "amount": 2.0,
                    "unit": "servings",
                    "meta": [
                        "chopped",
                        "for sprinkling, "
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }
            ],
            "id": 662054,
            "title": "Stuffed mushrooms and Chow Mein noodles",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/JFLYX2JY/stuffed-mushrooms-and-chow-mein-noodles",
            "image": "https://spoonacular.com/recipeImages/662054-556x370.jpg",
            "imageType": "jpg",
            "summary": "You can never have too many main course recipes, so give Stuffed mushrooms and Chow Mein noodles a try. This recipe makes 2 servings with <b>1345 calories</b>, <b>62g of protein</b>, and <b>49g of fat</b> each. For <b>$6.18 per serving</b>, this recipe <b>covers 51%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 8 fans. Only a few people really liked this Chinese dish. Head to the store and pick up pepper, olive oil, chives, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. With a spoonacular <b>score of 88%</b>, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/chicken-chow-mein-with-noodles-111260\">Chicken Chow Mein With Noodles</a>, <a href=\"https://spoonacular.com/recipes/easy-chicken-chow-mein-noodles-841416\">Easy Chicken Chow Mein Noodles</a>, and <a href=\"https://spoonacular.com/recipes/turkey-casserole-with-chow-mein-noodles-381477\">Turkey Casserole with Chow Mein Noodles</a>.",
            "cuisines": [
                "Chinese",
                "Asian"
            ],
            "dishTypes": [
                "side dish",
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "Blanch the spinach in a very little water in the microwave oven for 3 minutes on MAX. Drain and coarsely chop. Chop mushroom stems in a blender.\nMelt the butter over low heat, add the onion and cook for 1 minute. Add chopped mushroom stems, and saut for 4-5 minutes, stirring often.\nAdd chopped spinach; stir well and saut 2 more minutes. Remove from the heat.\nMix and combine with a fork in a separate bowl ricotta, blue cheese, chives and pepper into a fine mixture, almost a paste.\nAdd chopped stalks and spinach mixture, stir and combine thoroughly.\nUsing a small teaspoon, place mounds of filling on the top of each mushroom cap, pressing slightly to get it down into the cavity.\nMix breadcrumbs and grated Parmesan cheese, sprinkle evenly over each mushroom. Drizzle each filled cap with olive oil.\nPlace the mushroom caps on a baking sheet lined with parchment paper or silicon sheet, and bake in the oven at 180C for 20 minutes or until the cheese browns a little. Allow to cool for 5 minutes or so before serving.\nMeanwhile cook the Chow Mein or rice noodles as directed on the package; drain.\nMix and combine garlic, sour cream and salt and stir into the cooked pasta.\nSprinkle with chopped parsley and served with stuffed mushrooms.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Blanch the spinach in a very little water in the microwave oven for 3 minutes on MAX.",
                            "ingredients": [
                                {
                                    "id": 10011457,
                                    "name": "spinach",
                                    "localizedName": "spinach",
                                    "image": "spinach.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404762,
                                    "name": "microwave",
                                    "localizedName": "microwave",
                                    "image": "microwave.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and coarsely chop. Chop mushroom stems in a blender.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Melt the butter over low heat, add the onion and cook for 1 minute.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
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
                            "number": 4,
                            "step": "Add chopped mushroom stems, and saut for 4-5 minutes, stirring often.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Add chopped spinach; stir well and saut 2 more minutes.",
                            "ingredients": [
                                {
                                    "id": 10011457,
                                    "name": "spinach",
                                    "localizedName": "spinach",
                                    "image": "spinach.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 2,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 6,
                            "step": "Remove from the heat.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Mix and combine with a fork in a separate bowl ricotta, blue cheese, chives and pepper into a fine mixture, almost a paste.",
                            "ingredients": [
                                {
                                    "id": 1004,
                                    "name": "blue cheese",
                                    "localizedName": "blue cheese",
                                    "image": "blue-cheese.png"
                                },
                                {
                                    "id": 1036,
                                    "name": "ricotta cheese",
                                    "localizedName": "ricotta cheese",
                                    "image": "ricotta.png"
                                },
                                {
                                    "id": 11156,
                                    "name": "chives",
                                    "localizedName": "chives",
                                    "image": "fresh-chives.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Add chopped stalks and spinach mixture, stir and combine thoroughly.",
                            "ingredients": [
                                {
                                    "id": 10011457,
                                    "name": "spinach",
                                    "localizedName": "spinach",
                                    "image": "spinach.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Using a small teaspoon, place mounds of filling on the top of each mushroom cap, pressing slightly to get it down into the cavity.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 19142,
                                    "name": "mounds bar",
                                    "localizedName": "mounds bar",
                                    "image": "almond-joy.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 10,
                            "step": "Mix breadcrumbs and grated Parmesan cheese, sprinkle evenly over each mushroom.",
                            "ingredients": [
                                {
                                    "id": 1032,
                                    "name": "grated parmesan cheese",
                                    "localizedName": "grated parmesan cheese",
                                    "image": "parmesan.jpg"
                                },
                                {
                                    "id": 18079,
                                    "name": "breadcrumbs",
                                    "localizedName": "breadcrumbs",
                                    "image": "breadcrumbs.jpg"
                                },
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 11,
                            "step": "Drizzle each filled cap with olive oil.",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 12,
                            "step": "Place the mushroom caps on a baking sheet lined with parchment paper or silicon sheet, and bake in the oven at 180C for 20 minutes or until the cheese browns a little. Allow to cool for 5 minutes or so before serving.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404770,
                                    "name": "baking paper",
                                    "localizedName": "baking paper",
                                    "image": "baking-paper.jpg"
                                },
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 180.0,
                                        "unit": "Celsius"
                                    }
                                }
                            ],
                            "length": {
                                "number": 25,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 13,
                            "step": "Meanwhile cook the Chow Mein or rice noodles as directed on the package; drain.",
                            "ingredients": [
                                {
                                    "id": 20133,
                                    "name": "rice noodles",
                                    "localizedName": "rice noodles",
                                    "image": "dried-rice-noodles.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 14,
                            "step": "Mix and combine garlic, sour cream and salt and stir into the cooked pasta.",
                            "ingredients": [
                                {
                                    "id": 20421,
                                    "name": "cooked pasta",
                                    "localizedName": "cooked pasta",
                                    "image": "fusilli.jpg"
                                },
                                {
                                    "id": 1056,
                                    "name": "sour cream",
                                    "localizedName": "sour cream",
                                    "image": "sour-cream.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 15,
                            "step": "Sprinkle with chopped parsley and served with stuffed mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/stuffed-mushrooms-and-chow-mein-noodles-662054"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 3,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 1,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 107.8,
            "extendedIngredients": [
                {
                    "id": 10716050,
                    "aisle": "Pasta and Rice;Canned and Jarred",
                    "image": "cooked-cannellini-beans.png",
                    "consistency": "SOLID",
                    "name": "cannellini beans",
                    "nameClean": "cannellini beans",
                    "original": "3 cups cooked cannellini beans, with the liquid that clings to them",
                    "originalName": "cooked cannellini beans, with the liquid that clings to them",
                    "amount": 3.0,
                    "unit": "cups",
                    "meta": [
                        "with the liquid that clings to them",
                        "cooked"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 709.764,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "1 tablespoon extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 11957,
                    "aisle": "Produce",
                    "image": "fennel.png",
                    "consistency": "SOLID",
                    "name": "fennel",
                    "nameClean": "fennel",
                    "original": "1 cup chopped fennel, fronds reserved",
                    "originalName": "chopped fennel, fronds reserved",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 10311297,
                    "aisle": "Produce",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "flat parsley",
                    "nameClean": "flat leaf parsley",
                    "original": "Minced flat-leaf parsley",
                    "originalName": "Minced flat parsley",
                    "amount": 1.0,
                    "unit": "leaf",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        }
                    }
                },
                {
                    "id": 10011282,
                    "aisle": "Produce",
                    "image": "red-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "red onion",
                    "original": "1/2 cup chopped red onion",
                    "originalName": "chopped red onion",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "red",
                        "chopped"
                    ],
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
                    "id": 2037,
                    "aisle": "Ethnic Foods;Spices and Seasonings;Gourmet",
                    "image": "saffron.jpg",
                    "consistency": "SOLID",
                    "name": "saffron threads",
                    "nameClean": "saffron",
                    "original": "1/4 teaspoon saffron threads",
                    "originalName": "saffron threads",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "black pepper",
                    "original": "Salt and freshly ground black pepper",
                    "originalName": "Salt and freshly ground black pepper",
                    "amount": 6.0,
                    "unit": "servings",
                    "meta": [
                        "black",
                        "freshly ground"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
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
                    "original": "vegetable broth, as needed",
                    "originalName": "vegetable broth, as needed",
                    "amount": 6.0,
                    "unit": "servings",
                    "meta": [
                        "as needed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "2 tablespoons boiling water",
                    "originalName": "boiling water",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [
                        "boiling"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 636901,
            "title": "Cannellini Bean Side Dish With Fennel, Red Onion, and Saffron",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/ML5WHHCX/cannellini-beans-with-fennel-red-onion-and-saffron",
            "image": "https://spoonacular.com/recipeImages/636901-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipes to your repertoire, Cannellini Bean Side Dish With Fennel, Red Onion, and Saffron might be a recipe you should try. This recipe makes 6 servings with <b>107 calories</b>, <b>5g of protein</b>, and <b>2g of fat</b> each. For <b>$1.08 per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. A mixture of cannellini beans, extra virgin olive oil, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so scrumptious. 9 people found this recipe to be tasty and satisfying. It is brought to you by Foodista. It works well as a reasonably priced side dish. From preparation to the plate, this recipe takes about <b>45 minutes</b>. With a spoonacular <b>score of 22%</b>, this dish is not so super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/creamy-cannellini-bean-side-dish-640607\">Creamy Cannellini Bean Side Dish</a>, <a href=\"https://spoonacular.com/recipes/cannellini-bean-red-onion-and-arugula-salad-313335\">Cannellini Bean, Red Onion, and Arugula Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-bean-parsley-tomato-red-onion-salad-890246\">Cannellini Bean, Parsley, Tomato, Red Onion Salad</a>.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "occasions": [],
            "instructions": "<ol><li>Combine saffron and boiling water in small heat-proof bowl or measuring cup; set aside for 5 minutes.</li><li>Heat oil in large nonstick skillet; add fennel and onion. Cook, stirring occasionally, until tender, about 5 minutes.</li><li>Add beans and saffron mixture to skillet and stir to blend. Season to taste with salt and pepper. If mixture seems dry, add bean cooking liquid or vegetable broth to achieve desired consistency. Sprinkle with parsley or fennel fronds and serve immediately.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Combine saffron and boiling water in small heat-proof bowl or measuring cup; set aside for 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 2037,
                                    "name": "saffron",
                                    "localizedName": "saffron",
                                    "image": "saffron.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404766,
                                    "name": "measuring cup",
                                    "localizedName": "measuring cup",
                                    "image": "measuring-cup.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Heat oil in large nonstick skillet; add fennel and onion. Cook, stirring occasionally, until tender, about 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 11957,
                                    "name": "fennel",
                                    "localizedName": "fennel",
                                    "image": "fennel.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
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
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Add beans and saffron mixture to skillet and stir to blend. Season to taste with salt and pepper. If mixture seems dry, add bean cooking liquid or vegetable broth to achieve desired consistency.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 6615,
                                    "name": "vegetable broth",
                                    "localizedName": "vegetable broth",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 2037,
                                    "name": "saffron",
                                    "localizedName": "saffron",
                                    "image": "saffron.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
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
                            "number": 4,
                            "step": "Sprinkle with parsley or fennel fronds and serve immediately.",
                            "ingredients": [
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 11957,
                                    "name": "fennel",
                                    "localizedName": "fennel",
                                    "image": "fennel.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-side-dish-with-fennel-red-onion-and-saffron-636901"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 2,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 171,
            "healthScore": 2,
            "creditsText": "Afrolems",
            "license": "CC BY 4.0",
            "sourceName": "Afrolems",
            "pricePerServing": 77.7,
            "extendedIngredients": [
                {
                    "id": 2004,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "bay-leaves.jpg",
                    "consistency": "SOLID",
                    "name": "scent leaves",
                    "nameClean": "bay leaves",
                    "original": "1 tablespoon of chopped Scent leaves",
                    "originalName": "chopped Scent leaves",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 23572,
                    "aisle": "Frozen;Meat",
                    "image": "beef-cubes-raw.png",
                    "consistency": "SOLID",
                    "name": "beef",
                    "nameClean": "beef",
                    "original": "8 Pieces of medium Beef (Seasoned and Boiled)",
                    "originalName": "medium Beef (Seasoned and Boiled)",
                    "amount": 8.0,
                    "unit": "Pieces",
                    "meta": [
                        "boiled",
                        "(Seasoned and )"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 8.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11124,
                    "aisle": "Produce",
                    "image": "sliced-carrot.png",
                    "consistency": "SOLID",
                    "name": "carrots",
                    "nameClean": "carrot",
                    "original": "7 medium pieces of Carrots",
                    "originalName": "Carrots",
                    "amount": 7.0,
                    "unit": "medium pieces",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 7.0,
                            "unitShort": "medium pieces",
                            "unitLong": "medium pieces"
                        },
                        "metric": {
                            "amount": 7.0,
                            "unitShort": "medium pieces",
                            "unitLong": "medium pieces"
                        }
                    }
                },
                {
                    "id": 2015,
                    "aisle": "Spices and Seasonings",
                    "image": "curry-powder.jpg",
                    "consistency": "SOLID",
                    "name": "curry",
                    "nameClean": "curry powder",
                    "original": "1/2 teaspoon of Curry",
                    "originalName": "Curry",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "1 clove of Garlic",
                    "originalName": "Garlic",
                    "amount": 1.0,
                    "unit": "clove",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        }
                    }
                },
                {
                    "id": 11216,
                    "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ginger",
                    "nameClean": "ginger",
                    "original": "1 teaspoon of grated Ginger",
                    "originalName": "grated Ginger",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 99186,
                    "aisle": "Meat",
                    "image": "diced-ham.jpg",
                    "consistency": "SOLID",
                    "name": "seasoning cubes",
                    "nameClean": "diced ham",
                    "original": "Seasoning cubes",
                    "originalName": "Seasoning cubes",
                    "amount": 1.0,
                    "unit": "serving",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "bulb of onion",
                    "nameClean": "onion",
                    "original": "1 small bulb of Onion",
                    "originalName": "bulb of Onion",
                    "amount": 1.0,
                    "unit": "small",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "small",
                            "unitLong": "small"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "small",
                            "unitLong": "small"
                        }
                    }
                },
                {
                    "id": 10011583,
                    "aisle": "Frozen",
                    "image": "mixed-vegetables.png",
                    "consistency": "SOLID",
                    "name": "cooking spoons of blended tatashe-pepper mix",
                    "nameClean": "pepper and onion mix",
                    "original": "2 cooking spoons of Blended Tatashe-Pepper Mix (Bell peppers and scotch bonnet peppers)",
                    "originalName": "cooking spoons of Blended Tatashe-Pepper Mix (Bell peppers and scotch bonnet peppers)",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [
                        "(Bell peppers and scotch bonnet peppers)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 4669,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "cooking spoons of vegetable oil",
                    "nameClean": "vegetable oil",
                    "original": "2 Cooking spoons of Vegetable Oil",
                    "originalName": "Cooking spoons of Vegetable Oil",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                }
            ],
            "id": 769754,
            "title": "Beef Carrot Stew",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "http://www.afrolems.com/2016/05/26/beef-carrot-stew/",
            "image": "https://spoonacular.com/recipeImages/769754-556x370.jpg",
            "imageType": "jpg",
            "summary": "Beef Carrot Stew could be just the <b>gluten free, dairy free, and whole 30</b> recipe you've been looking for. This recipe serves 1. This hor d'oeuvre has <b>87 calories</b>, <b>3g of protein</b>, and <b>4g of fat</b> per serving. For <b>78 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. 171 person have made this recipe and would make it again. From preparation to the plate, this recipe takes about <b>45 minutes</b>. If you have garlic, beef, carrots, and a few other ingredients on hand, you can make it. It is perfect for <b>Autumn</b>. It is brought to you by Afrolems. With a spoonacular <b>score of 34%</b>, this dish is rather bad. Similar recipes are <a href=\"https://spoonacular.com/recipes/oven-braised-beef-stew-with-carrot-parsnip-and-lancinato-kale-43670\">Oven-braised Beef Stew With Carrot, Parsnip, And Lancinato Kale</a>, <a href=\"https://spoonacular.com/recipes/a-winters-walk-beef-and-carrot-stew-with-herb-crusted-dumplings-101808\">A Winter's Walk Beef and Carrot Stew With Herb Crusted Dumplings</a>, and <a href=\"https://spoonacular.com/recipes/ronis-beef-stew-yes-beef-stew-506493\">Roni’s Beef Stew, Yes, BEEF Stew</a>.",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "soup",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "whole 30"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "instructions": "Scrape, wash and boil your carrots till soft.Place in a blender without water and grind till completely shredded.In a pot, heat up your oil and fry your onions, garlic and ginger.Pour in your Tatashe-pepper mix and your beef and allow to simmer on low heat for about 10-15 minutes.Season with curry, seasoning cubes and anything else you may wish to add.Pour in your carrots and stir in and allow to simmer on low heat for another 3-5 minutes.Add your chopped scent leaves and stir in and serve hot with rice, yam, plantain, pasta or any other accompaniment of your choice. ",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Scrape, wash and boil your carrots till soft.",
                            "ingredients": [
                                {
                                    "id": 11124,
                                    "name": "carrot",
                                    "localizedName": "carrot",
                                    "image": "sliced-carrot.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Place in a blender without water and grind till completely shredded.In a pot, heat up your oil and fry your onions, garlic and ginger.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11216,
                                    "name": "ginger",
                                    "localizedName": "ginger",
                                    "image": "ginger.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Pour in your Tatashe-pepper mix and your beef and allow to simmer on low heat for about 10-15 minutes.Season with curry, seasoning cubes and anything else you may wish to add.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "seasoning cube",
                                    "localizedName": "seasoning cube",
                                    "image": "stock-cube.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Pour in your carrots and stir in and allow to simmer on low heat for another 3-5 minutes.",
                            "ingredients": [
                                {
                                    "id": 11124,
                                    "name": "carrot",
                                    "localizedName": "carrot",
                                    "image": "sliced-carrot.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Add your chopped scent leaves and stir in and serve hot with rice, yam, plantain, pasta or any other accompaniment of your choice. ",
                            "ingredients": [
                                {
                                    "id": 99295,
                                    "name": "plantain",
                                    "localizedName": "plantain",
                                    "image": "plantains.jpg"
                                },
                                {
                                    "id": 20420,
                                    "name": "pasta",
                                    "localizedName": "pasta",
                                    "image": "fusilli.jpg"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                },
                                {
                                    "id": 11601,
                                    "name": "yam",
                                    "localizedName": "yam",
                                    "image": "sweet-potato.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/beef-carrot-stew-769754"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 6,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 73,
            "healthScore": 7,
            "creditsText": "Afrolems",
            "license": "CC BY 4.0",
            "sourceName": "Afrolems",
            "pricePerServing": 51.09,
            "extendedIngredients": [
                {
                    "id": 9087,
                    "aisle": "Dried Fruits;Produce",
                    "image": "dates.jpg",
                    "consistency": "SOLID",
                    "name": "dates",
                    "nameClean": "dates",
                    "original": "2 pieces of dates (remove the seeds)",
                    "originalName": "dates (remove the seeds)",
                    "amount": 2.0,
                    "unit": "pieces",
                    "meta": [
                        "(remove the seeds)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1214,
                    "aisle": "Baking",
                    "image": "evaporated-milk.png",
                    "consistency": "SOLID",
                    "name": "evaporated milk",
                    "nameClean": "evaporated milk",
                    "original": "7 tablespoons of evaporated milk",
                    "originalName": "evaporated milk",
                    "amount": 7.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 7.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 7.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11216,
                    "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ginger",
                    "nameClean": "ginger",
                    "original": "1/4 teaspoon of grated ginger",
                    "originalName": "grated ginger",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10114412,
                    "aisle": "Frozen",
                    "image": "crushed-ice.png",
                    "consistency": "SOLID",
                    "name": "ice",
                    "nameClean": "crushed ice cubes",
                    "original": "1/4 cup of crushed ice.",
                    "originalName": "crushed ice",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "crushed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9326,
                    "aisle": "Produce",
                    "image": "watermelon.png",
                    "consistency": "SOLID",
                    "name": "blended watermelon",
                    "nameClean": "watermelon",
                    "original": "1 cup of blended watermelon",
                    "originalName": "blended watermelon",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 716252,
            "title": "Milky Watermelon Drink",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "http://www.afrolems.com/2016/01/29/milky-watermelon-drink/",
            "image": "https://spoonacular.com/recipeImages/716252-556x370.jpg",
            "imageType": "jpg",
            "summary": "Milky Watermelon Drink might be a good recipe to expand your beverage recipe box. One portion of this dish contains approximately <b>8g of protein</b>, <b>8g of fat</b>, and a total of <b>193 calories</b>. This recipe serves 1. For <b>51 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up dates, blended watermelon, ice, and a few other things to make it today. It will be a hit at your <b>Summer</b> event. 73 people have tried and liked this recipe. It is brought to you by Afrolems. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes about <b>45 minutes</b>. With a spoonacular <b>score of 58%</b>, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/watermelon-mocktail-drink-716380\">Watermelon Mocktail Drink</a>, <a href=\"https://spoonacular.com/recipes/quick-watermelon-summer-drink-582115\">Quick Watermelon Summer Drink</a>, and <a href=\"https://spoonacular.com/recipes/watermelon-iced-tea-drink-recipe-27499\">Watermelon Iced Tea Drink Recipe</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "beverage",
                "drink"
            ],
            "diets": [
                "gluten free",
                "lacto ovo vegetarian"
            ],
            "occasions": [
                "summer"
            ],
            "instructions": "Blend all ingredients together till smooth and serve chilled.P:S – If you are wondering where to buy dates, check out supermarkets or the hausa traders at a market. They are more likely to have dates. Does anyone know what dates are called in Hausa? Please leave a comment and help others",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Blend all ingredients together till smooth and serve chilled.P:S – If you are wondering where to buy dates, check out supermarkets or the hausa traders at a market. They are more likely to have dates. Does anyone know what dates are called in Hausa? Please leave a comment and help others",
                            "ingredients": [
                                {
                                    "id": 9087,
                                    "name": "dates",
                                    "localizedName": "dates",
                                    "image": "dates.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/milky-watermelon-drink-716252"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 40,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 6,
            "healthScore": 41,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 597.65,
            "extendedIngredients": [
                {
                    "id": 10123,
                    "aisle": "Meat",
                    "image": "raw-bacon.png",
                    "consistency": "SOLID",
                    "name": "bacon rasher",
                    "nameClean": "applewood smoked bacon",
                    "original": "2 smalls bacon rasher, sliced to strips",
                    "originalName": "s bacon rasher, sliced to strips",
                    "amount": 2.0,
                    "unit": "small",
                    "meta": [
                        "sliced to strips"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "small",
                            "unitLong": "smalls"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "small",
                            "unitLong": "smalls"
                        }
                    }
                },
                {
                    "id": 6997,
                    "aisle": "Canned and Jarred",
                    "image": "gravy.jpg",
                    "consistency": "SOLID",
                    "name": "gravy beef",
                    "nameClean": "beef gravy",
                    "original": "500 grams of gravy beef, trimmed and cut into 2cm pieces, coated in pl",
                    "originalName": "gravy beef, trimmed and cut into 2cm pieces, coated in pl",
                    "amount": 500.0,
                    "unit": "grams",
                    "meta": [
                        "trimmed",
                        "cut into 2cm pieces, coated in pl"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.102,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 500.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 6170,
                    "aisle": "Canned and Jarred",
                    "image": "beef-broth.png",
                    "consistency": "LIQUID",
                    "name": "beef stock",
                    "nameClean": "beef stock",
                    "original": "200 ml of beef stock",
                    "originalName": "beef stock",
                    "amount": 200.0,
                    "unit": "ml",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6.764,
                            "unitShort": "fl. oz",
                            "unitLong": "fl. ozs"
                        },
                        "metric": {
                            "amount": 200.0,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11260,
                    "aisle": "Produce",
                    "image": "mushrooms-white.jpg",
                    "consistency": "SOLID",
                    "name": "button mushrooms",
                    "nameClean": "fresh mushrooms",
                    "original": "200 grams of button mushrooms",
                    "originalName": "button mushrooms",
                    "amount": 200.0,
                    "unit": "grams",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 7.055,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 200.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1053,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "fluid-cream.jpg",
                    "consistency": "LIQUID",
                    "name": "cream",
                    "nameClean": "cream",
                    "original": "2 tablespoons of cream",
                    "originalName": "cream",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 14097,
                    "aisle": "Alcoholic Beverages",
                    "image": "red-wine.jpg",
                    "consistency": "LIQUID",
                    "name": "wine",
                    "nameClean": "dry red wine",
                    "original": "80 ml of dry red wine",
                    "originalName": "dry red wine",
                    "amount": 80.0,
                    "unit": "ml",
                    "meta": [
                        "dry red"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.705,
                            "unitShort": "fl. oz",
                            "unitLong": "fl. ozs"
                        },
                        "metric": {
                            "amount": 80.0,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10211297,
                    "aisle": "Produce",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "flat leaf parsley",
                    "nameClean": "fresh flat leaf parsley",
                    "original": "1/4 cup of finely chopped fresh flat leaf parsley",
                    "originalName": "finely chopped fresh flat leaf parsley",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "fresh",
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1012049,
                    "aisle": "Produce",
                    "image": "thyme.jpg",
                    "consistency": "SOLID",
                    "name": "thyme leaves",
                    "nameClean": "fresh thyme",
                    "original": "1 teaspoon of fresh thyme leaves",
                    "originalName": "fresh thyme leaves",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 11304,
                    "aisle": "Produce",
                    "image": "peas.jpg",
                    "consistency": "SOLID",
                    "name": "peas",
                    "nameClean": "petite peas",
                    "original": "2 cups of green peas thawed",
                    "originalName": "green peas thawed",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [
                        "green",
                        "thawed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
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
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "olive oil 2 tablespoons of brown onion",
                    "nameClean": "olive oil",
                    "original": "1 teaspoon of olive oil 2 tablespoons of finely chopped brown onion",
                    "originalName": "olive oil 2 tablespoons of finely chopped brown onion",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
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
                    "original": "2 teaspoons of olive oil",
                    "originalName": "olive oil",
                    "amount": 2.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "pickling onions",
                    "nameClean": "onion",
                    "original": "4 pickling onions, peeled and halved",
                    "originalName": "pickling onions, peeled and halved",
                    "amount": 4.0,
                    "unit": "",
                    "meta": [
                        "peeled",
                        "halved"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 18337,
                    "aisle": "Refrigerated;Frozen",
                    "image": "puff-pastry.png",
                    "consistency": "SOLID",
                    "name": "ready rolled butter puff pastry",
                    "nameClean": "puff pastry dough",
                    "original": "1 sheet of ready rolled butter puff pastry",
                    "originalName": "ready rolled butter puff pastry",
                    "amount": 1.0,
                    "unit": "sheet",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "sheet",
                            "unitLong": "sheet"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "sheet",
                            "unitLong": "sheet"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "A pinch of salt and pepper",
                    "originalName": "salt and pepper",
                    "amount": 1.0,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 11887,
                    "aisle": "Pasta and Rice",
                    "image": "tomato-paste.jpg",
                    "consistency": "SOLID",
                    "name": "tomato paste",
                    "nameClean": "tomato paste",
                    "original": "2 teaspoons of tomato paste",
                    "originalName": "tomato paste",
                    "amount": 2.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 6615,
                    "aisle": "Canned and Jarred",
                    "image": "chicken-broth.png",
                    "consistency": "LIQUID",
                    "name": "vegetable stock",
                    "nameClean": "vegetable stock",
                    "original": "2 tablespoons of vegetable stock",
                    "originalName": "vegetable stock",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 634585,
            "title": "Beef Bourguignon Pie With Mushy Green Pea",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "http://www.foodista.com/recipe/27N24DMJ/beef-bourguignon-pie-with-mushy-green-pea",
            "image": "https://spoonacular.com/recipeImages/634585-556x370.jpg",
            "imageType": "jpg",
            "summary": "Beef Bourguignon Pie With Mushy Green Pea requires approximately <b>45 minutes</b> from start to finish. This recipe serves 2 and costs $5.98 per serving. One portion of this dish contains approximately <b>32g of protein</b>, <b>72g of fat</b>, and a total of <b>1259 calories</b>. 6 people were impressed by this recipe. If you have peas, cream, beef stock, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 85%</b>. This score is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/minced-beef-pie-minty-mushy-peas-1335025\">Minced beef pie & minty mushy peas</a>, <a href=\"https://spoonacular.com/recipes/minced-beef-pie-minty-mushy-peas-1245137\">Minced beef pie & minty mushy peas</a>, and <a href=\"https://spoonacular.com/recipes/minced-beef-pie-minty-mushy-peas-1316899\">Minced beef pie & minty mushy peas</a>.",
            "cuisines": [],
            "dishTypes": [],
            "diets": [],
            "occasions": [],
            "instructions": "<ol><li>Making beef bourguignon</li><li>Cook bacon on medium heat until crispy. Absorb the excessive fat with paper and rest</li><li>In the same pan, add onions and cook until browned (approx. 3-5 minutes) and remove from pan</li><li>Add olive oil onto the same pan, cook mushrooms until browned and remove from pan</li><li>In the same pan, cook beef until browned. Then add cooked bacon and onions together with thyme and tomato paste. Stir fry until well combined.</li><li>Add wine and stock in and bring it to boil. Reduce to low heat and let it simmer (covered) for 1 hour</li><li>Add cooked mushrooms and continue to let it simmered (uncovered) until beef is tender (approx. 40-45 minutes). Then add in the parsley.</li><li>Making puff pie lid</li><li>Preheat the oven to 200'c (390'f) fan forced</li><li>Cut the puff pastry sheet to fit your baking dishes. Use cookie cutters to make creative shapes to decorate your puff pie lid such as flowers or alphabets or words (e.g. name, love etc). Bake the pastry on oil sprayed tray until light golden browned (5-10 minutes). Your tray must be at the middle of your fan oven.</li><li>Making mushy pea</li><li>On medium heat, cook onion until light golden browned.</li><li>Add cream and stock and bring to boil. Reduce heat to low and let it simmer for a few minutes.</li><li>Turn the heat off and mash it with folk gently. Season with salt and pepper.</li><li>To serve, spoon the beef bourguignon onto a baking dish (microwaved so it is warm). Close with the puff pie lid and serve with mushy green pea in another baking dish.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Making beef bourguignon",
                            "ingredients": [
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Cook bacon on medium heat until crispy. Absorb the excessive fat with paper and rest",
                            "ingredients": [
                                {
                                    "id": 10123,
                                    "name": "bacon",
                                    "localizedName": "bacon",
                                    "image": "raw-bacon.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "In the same pan, add onions and cook until browned (approx. 3-5 minutes) and remove from pan",
                            "ingredients": [
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
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
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Add olive oil onto the same pan, cook mushrooms until browned and remove from pan",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
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
                            "number": 5,
                            "step": "In the same pan, cook beef until browned. Then add cooked bacon and onions together with thyme and tomato paste. Stir fry until well combined.",
                            "ingredients": [
                                {
                                    "id": 10862,
                                    "name": "cooked bacon",
                                    "localizedName": "cooked bacon",
                                    "image": "cooked-bacon.jpg"
                                },
                                {
                                    "id": 11887,
                                    "name": "tomato paste",
                                    "localizedName": "tomato paste",
                                    "image": "tomato-paste.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 2049,
                                    "name": "thyme",
                                    "localizedName": "thyme",
                                    "image": "thyme.jpg"
                                },
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
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
                            "number": 6,
                            "step": "Add wine and stock in and bring it to boil. Reduce to low heat and let it simmer (covered) for 1 hour",
                            "ingredients": [
                                {
                                    "id": 1006615,
                                    "name": "stock",
                                    "localizedName": "stock",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 14084,
                                    "name": "wine",
                                    "localizedName": "wine",
                                    "image": "red-wine.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Add cooked mushrooms and continue to let it simmered (uncovered) until beef is tender (approx. 40-45 minutes). Then add in the parsley.Making puff pie lid",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 45,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 8,
                            "step": "Preheat the oven to 200'c (390'f) fan forced",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 9,
                            "step": "Cut the puff pastry sheet to fit your baking dishes. Use cookie cutters to make creative shapes to decorate your puff pie lid such as flowers or alphabets or words (e.g. name, love etc).",
                            "ingredients": [
                                {
                                    "id": 18337,
                                    "name": "puff pastry sheets",
                                    "localizedName": "puff pastry sheets",
                                    "image": "puff-pastry.png"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 221429,
                                    "name": "cookie cutter",
                                    "localizedName": "cookie cutter",
                                    "image": "cookie-cutters.jpg"
                                }
                            ]
                        },
                        {
                            "number": 10,
                            "step": "Bake the pastry on oil sprayed tray until light golden browned (5-10 minutes). Your tray must be at the middle of your fan oven.Making mushy pea",
                            "ingredients": [
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 11,
                            "step": "On medium heat, cook onion until light golden browned.",
                            "ingredients": [
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
                            "number": 12,
                            "step": "Add cream and stock and bring to boil. Reduce heat to low and let it simmer for a few minutes.Turn the heat off and mash it with folk gently. Season with salt and pepper.To serve, spoon the beef bourguignon onto a baking dish (microwaved so it is warm). Close with the puff pie lid and serve with mushy green pea in another baking dish.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 1053,
                                    "name": "cream",
                                    "localizedName": "cream",
                                    "image": "fluid-cream.jpg"
                                },
                                {
                                    "id": 1006615,
                                    "name": "stock",
                                    "localizedName": "stock",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                }
                            ]
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/beef-bourguignon-pie-with-mushy-green-pea-634585"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": true,
            "weightWatcherSmartPoints": 17,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 8,
            "healthScore": 44,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 767.02,
            "extendedIngredients": [
                {
                    "id": 98840,
                    "aisle": "Produce",
                    "image": "broccolini.jpg",
                    "consistency": "SOLID",
                    "name": "broccolini",
                    "nameClean": "broccolini",
                    "original": "1 bunch of Broccolini",
                    "originalName": "Broccolini",
                    "amount": 1.0,
                    "unit": "bunch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "bunch",
                            "unitLong": "bunch"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "bunch",
                            "unitLong": "bunch"
                        }
                    }
                },
                {
                    "id": 2044,
                    "aisle": "Produce",
                    "image": "fresh-basil.jpg",
                    "consistency": "SOLID",
                    "name": "basil",
                    "nameClean": "fresh basil",
                    "original": "1 bunch of Fresh Basil",
                    "originalName": "Fresh Basil",
                    "amount": 1.0,
                    "unit": "bunch",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "bunch",
                            "unitLong": "bunch"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "bunch",
                            "unitLong": "bunch"
                        }
                    }
                },
                {
                    "id": 1065062,
                    "aisle": null,
                    "image": "whole-chicken.jpg",
                    "consistency": "SOLID",
                    "name": "your preferred cured meat",
                    "nameClean": "meat",
                    "original": "12 Thinly sliced Prosciutto or your preferred cured meat",
                    "originalName": "Thinly sliced Prosciutto or your preferred cured meat",
                    "amount": 12.0,
                    "unit": "",
                    "meta": [
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 12.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 12.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2069,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "balsamic-vinegar.jpg",
                    "consistency": "LIQUID",
                    "name": "balsamic vinegar",
                    "nameClean": "balsamic vinegar",
                    "original": "1 cup Balsamic Vinegar",
                    "originalName": "Balsamic Vinegar",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "Olive Oil",
                    "originalName": "Olive Oil",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and Pepper",
                    "originalName": "Salt and Pepper",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }
            ],
            "id": 657167,
            "title": "Prosciutto Wrapped Broccolini With Basil Crisps",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/7435XMJZ/prosciutto-wrapped-broccolini-with-basil-crisps",
            "image": "https://spoonacular.com/recipeImages/657167-556x370.jpg",
            "imageType": "jpg",
            "summary": "Prosciutto Wrapped Broccolini With Basil Crisps might be a good recipe to expand your main course recipe box. One portion of this dish contains about <b>146g of protein</b>, <b>32g of fat</b>, and a total of <b>971 calories</b>. This gluten free, dairy free, paleolithic, and primal recipe serves 4 and costs <b>$7.67 per serving</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. Not a lot of people made this recipe, and 8 would say it hit the spot. If you have salt and pepper, olive oil, your preferred cured meat, and a few other ingredients on hand, you can make it. Overall, this recipe earns an <b>excellent spoonacular score of 87%</b>. Try <a href=\"https://spoonacular.com/recipes/prosciutto-wrapped-shrimp-with-mozzarella-and-basil-149340\">Prosciutto-Wrapped Shrimp with Mozzarellan and Basil</a>, <a href=\"https://spoonacular.com/recipes/pass-the-prosciutto-prosciutto-wrapped-pear-with-parmesan-551304\">pass the prosciutto – prosciutto wrapped pear with parmesan</a>, and <a href=\"https://spoonacular.com/recipes/caramelized-onion-prosciutto-and-broccolini-crustless-quiche-592959\">Caramelized Onion, Prosciutto and Broccolini Crustless Quiche</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal",
                "fodmap friendly",
                "whole 30"
            ],
            "occasions": [],
            "instructions": "Prepare an ice bath. Trim the bottom tip off the broccolini. Bring a large pot of water to a rolling boil. Add a generous amount of salt. Blanch the broccolini for 30 seconds, remove, then submerge into the ice bath. When the broccolini is fully cooled, drain and pat dry with a kitchen towel.\nReduce the balsamic vinegar over medium heat until it becomes 1/4 cup of sticky syrup. Set aside.\nDrop a small handful of basil leaves into the oil. Shield yourself from potential splatter. It only takes one second for the leaves to pop. Immediately fish them from the oil with a strainer and place onto a towel-lined plate. The leaves should become crisp and translucent, but not darkened or it will be bitter.\nHeat up the grill and coat generously with olive oil. Grill the broccolini until slightly charred and softened. Season with salt and pepper.\nWrap the broccolini with prosciutto. Place onto serving platter, drizzle with some extra virgin olive oil and the balsamic reduction.\nGarnish with basil crisps when ready to serve.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Prepare an ice bath. Trim the bottom tip off the broccolini. Bring a large pot of water to a rolling boil.",
                            "ingredients": [
                                {
                                    "id": 98840,
                                    "name": "broccolini",
                                    "localizedName": "broccolini",
                                    "image": "broccolini.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 10014412,
                                    "name": "ice",
                                    "localizedName": "ice",
                                    "image": "ice-cubes.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add a generous amount of salt. Blanch the broccolini for 30 seconds, remove, then submerge into the ice bath. When the broccolini is fully cooled, drain and pat dry with a kitchen towel.",
                            "ingredients": [
                                {
                                    "id": 98840,
                                    "name": "broccolini",
                                    "localizedName": "broccolini",
                                    "image": "broccolini.jpg"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                },
                                {
                                    "id": 10014412,
                                    "name": "ice",
                                    "localizedName": "ice",
                                    "image": "ice-cubes.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 221439,
                                    "name": "kitchen towels",
                                    "localizedName": "kitchen towels",
                                    "image": "dish-towel.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Reduce the balsamic vinegar over medium heat until it becomes 1/4 cup of sticky syrup. Set aside.",
                            "ingredients": [
                                {
                                    "id": 2069,
                                    "name": "balsamic vinegar",
                                    "localizedName": "balsamic vinegar",
                                    "image": "balsamic-vinegar.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "syrup",
                                    "localizedName": "syrup",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Drop a small handful of basil leaves into the oil. Shield yourself from potential splatter. It only takes one second for the leaves to pop. Immediately fish them from the oil with a strainer and place onto a towel-lined plate. The leaves should become crisp and translucent, but not darkened or it will be bitter.",
                            "ingredients": [
                                {
                                    "id": 2044,
                                    "name": "fresh basil",
                                    "localizedName": "fresh basil",
                                    "image": "fresh-basil.jpg"
                                },
                                {
                                    "id": 10115261,
                                    "name": "fish",
                                    "localizedName": "fish",
                                    "image": "fish-fillet.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "pop",
                                    "localizedName": "soft drink",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405600,
                                    "name": "sieve",
                                    "localizedName": "sieve",
                                    "image": "strainer.png"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Heat up the grill and coat generously with olive oil. Grill the broccolini until slightly charred and softened. Season with salt and pepper.",
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
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Wrap the broccolini with prosciutto.",
                            "ingredients": [
                                {
                                    "id": 98840,
                                    "name": "broccolini",
                                    "localizedName": "broccolini",
                                    "image": "broccolini.jpg"
                                },
                                {
                                    "id": 10010123,
                                    "name": "prosciutto",
                                    "localizedName": "prosciutto",
                                    "image": "proscuitto.jpg"
                                },
                                {
                                    "id": 10018364,
                                    "name": "wrap",
                                    "localizedName": "wrap",
                                    "image": "flour-tortilla.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Place onto serving platter, drizzle with some extra virgin olive oil and the balsamic reduction.",
                            "ingredients": [
                                {
                                    "id": 1034053,
                                    "name": "extra virgin olive oil",
                                    "localizedName": "extra virgin olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "reduction",
                                    "localizedName": "reduction",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 8,
                            "step": "Garnish with basil crisps when ready to serve.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "chips",
                                    "localizedName": "chips",
                                    "image": ""
                                },
                                {
                                    "id": 2044,
                                    "name": "basil",
                                    "localizedName": "basil",
                                    "image": "basil.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/prosciutto-wrapped-broccolini-with-basil-crisps-657167"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 1,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 23,
            "healthScore": 2,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 16.03,
            "extendedIngredients": [
                {
                    "id": 6150,
                    "aisle": "Condiments",
                    "image": "barbecue-sauce.jpg",
                    "consistency": "SOLID",
                    "name": "barbecue sauce",
                    "nameClean": "barbecue sauce",
                    "original": "2 Tablespoons Barbecue Sauce",
                    "originalName": "Barbecue Sauce",
                    "amount": 2.0,
                    "unit": "Tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 16058,
                    "aisle": "Canned and Jarred",
                    "image": "chickpeas.png",
                    "consistency": "SOLID",
                    "name": "chickpeas",
                    "nameClean": "canned chickpeas",
                    "original": "1 ½ cup Canned Chickpeas",
                    "originalName": "Canned Chickpeas",
                    "amount": 1.5,
                    "unit": "cup",
                    "meta": [
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1052047,
                    "aisle": "Spices and Seasonings",
                    "image": "garlic-salt.jpg",
                    "consistency": "SOLID",
                    "name": "celery salt",
                    "nameClean": "celery salt",
                    "original": "¼ teaspoons Celery Salt",
                    "originalName": "Celery Salt",
                    "amount": 0.25,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "1 clove garlic",
                    "originalName": "garlic",
                    "amount": 1.0,
                    "unit": "clove",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        }
                    }
                },
                {
                    "id": 6168,
                    "aisle": "Condiments",
                    "image": "hot-sauce-or-tabasco.png",
                    "consistency": "LIQUID",
                    "name": "franks hot sauce",
                    "nameClean": "hot sauce",
                    "original": "3 Tablespoons Franks Hot Sauce (try 2 Tbsp. First To Check Spice Factor)",
                    "originalName": "Franks Hot Sauce (try 2 Tbsp. First To Check Spice Factor)",
                    "amount": 3.0,
                    "unit": "Tablespoons",
                    "meta": [
                        "(try 2 Tbsp. First To Check Spice Factor)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "lemon juice",
                    "nameClean": "lemon juice",
                    "original": "2 Tablespoons Lemon Juice, Fresh",
                    "originalName": "Lemon Juice, Fresh",
                    "amount": 2.0,
                    "unit": "Tablespoons",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2028,
                    "aisle": "Spices and Seasonings",
                    "image": "paprika.jpg",
                    "consistency": "SOLID",
                    "name": "paprika",
                    "nameClean": "paprika",
                    "original": "¾ teaspoons Paprika",
                    "originalName": "Paprika",
                    "amount": 0.75,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.75,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vinegar-(white).jpg",
                    "consistency": "LIQUID",
                    "name": "distilled vinegar",
                    "nameClean": "distilled white vinegar",
                    "original": "½ Tablespoons Distilled White Vinegar",
                    "originalName": "Distilled White Vinegar",
                    "amount": 0.5,
                    "unit": "Tablespoons",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 636422,
            "title": "Buffalo Wing Hummus",
            "readyInMinutes": 45,
            "servings": 8,
            "sourceUrl": "http://www.foodista.com/recipe/TKRJW6HH/buffalo-wing-hummus-with-lime-chips",
            "image": "https://spoonacular.com/recipeImages/636422-556x370.jpg",
            "imageType": "jpg",
            "summary": "Buffalo Wing Hummus could be just the <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe you've been looking for. This recipe makes 8 servings with <b>37 calories</b>, <b>2g of protein</b>, and <b>1g of fat</b> each. For <b>16 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. It works well as a very reasonably priced hor d'oeuvre for <b>The Super Bowl</b>. If you have lemon juice, paprika, celery salt, and a few other ingredients on hand, you can make it. A few people really liked this American dish. 23 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 36%</b>, this dish is rather bad. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/buffalo-wing-hummus-570011\">Buffalo Wing Hummus</a>, <a href=\"https://spoonacular.com/recipes/buffalo-wing-hummus-510266\">Buffalo Wing Hummus</a>, and <a href=\"https://spoonacular.com/recipes/buffalo-wing-hummus-315636\">Buffalo Wing Hummus</a>.",
            "cuisines": [
                "American"
            ],
            "dishTypes": [
                "antipasti",
                "condiment",
                "starter",
                "snack",
                "appetizer",
                "dip",
                "antipasto",
                "hor d'oeuvre",
                "spread"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "occasions": [
                "super bowl"
            ],
            "instructions": "<ol><li>Put the chickpeas, chickpea liquid, garlic, lemon juice, paprika, celery salt, barbecue sauce, hot sauce, and vinegar in a food processor. Puree until smooth and creamy.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Put the chickpeas, chickpea liquid, garlic, lemon juice, paprika, celery salt, barbecue sauce, hot sauce, and vinegar in a food processor. Puree until smooth and creamy.",
                            "ingredients": [
                                {
                                    "id": 6150,
                                    "name": "barbecue sauce",
                                    "localizedName": "barbecue sauce",
                                    "image": "barbecue-sauce.jpg"
                                },
                                {
                                    "id": 1052047,
                                    "name": "celery salt",
                                    "localizedName": "celery salt",
                                    "image": "garlic-salt.jpg"
                                },
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 16057,
                                    "name": "chickpeas",
                                    "localizedName": "chickpeas",
                                    "image": "chickpeas.png"
                                },
                                {
                                    "id": 6168,
                                    "name": "hot sauce",
                                    "localizedName": "hot sauce",
                                    "image": "hot-sauce-or-tabasco.png"
                                },
                                {
                                    "id": 2028,
                                    "name": "paprika",
                                    "localizedName": "paprika",
                                    "image": "paprika.jpg"
                                },
                                {
                                    "id": 2053,
                                    "name": "vinegar",
                                    "localizedName": "vinegar",
                                    "image": "vinegar-(white).jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                }
                            ]
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/buffalo-wing-hummus-636422"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 8,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 11,
            "healthScore": 3,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 87.87,
            "extendedIngredients": [
                {
                    "id": 12108,
                    "aisle": "Baking",
                    "image": "coconut-flakes.png",
                    "consistency": "SOLID",
                    "name": "coconut beverage",
                    "nameClean": "unsweetened coconut",
                    "original": "1 cup unsweetened coconut beverage, divided",
                    "originalName": "unsweetened coconut beverage, divided",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "unsweetened",
                        "divided"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 99009,
                    "aisle": "Canned and Jarred",
                    "image": "coconut-milk.jpg",
                    "consistency": "LIQUID",
                    "name": "coconut milk",
                    "nameClean": "light coconut milk",
                    "original": "1 cup light coconut milk",
                    "originalName": "light coconut milk",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "light"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 9176,
                    "aisle": "Produce",
                    "image": "mango.jpg",
                    "consistency": "SOLID",
                    "name": "mango",
                    "nameClean": "mango",
                    "original": "1 cup mango, fresh or frozen",
                    "originalName": "mango, fresh or frozen",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
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
                    "id": 19911,
                    "aisle": "Cereal",
                    "image": "maple-syrup.png",
                    "consistency": "LIQUID",
                    "name": "maple syrup",
                    "nameClean": "maple syrup",
                    "original": "3 1/2 to 4 1/2 Tbs maple syrup, divided (add more if necessary)",
                    "originalName": "maple syrup, divided (add more if necessary)",
                    "amount": 3.5,
                    "unit": "Tbs",
                    "meta": [
                        "divided",
                        "(add more if necessary)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.5,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 3.5,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        }
                    }
                },
                {
                    "id": 9266,
                    "aisle": "Produce",
                    "image": "pineapple.jpg",
                    "consistency": "SOLID",
                    "name": "pineapple",
                    "nameClean": "pineapple",
                    "original": "3/4 cup pineapple, fresh or frozen",
                    "originalName": "pineapple, fresh or frozen",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": -1,
                    "aisle": "?",
                    "image": null,
                    "consistency": "SOLID",
                    "name": "popsicle moulds",
                    "nameClean": null,
                    "original": "6 popsicle moulds",
                    "originalName": "popsicle moulds",
                    "amount": 6.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                }
            ],
            "id": 663858,
            "title": "Tropical Ice Pops",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/KCTN2T42/tropical-ice-pops",
            "image": "https://spoonacular.com/recipeImages/663858-556x370.jpg",
            "imageType": "jpg",
            "summary": "Tropical Ice Pops might be a good recipe to expand your dessert repertoire. One serving contains <b>180 calories</b>, <b>1g of protein</b>, and <b>11g of fat</b>. This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe serves 6 and costs <b>88 cents per serving</b>. This recipe from Foodista has 11 fans. If you have coconut beverage, coconut milk, pineapple, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 64%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/healthy-tropical-candy-corn-ice-pops-618777\">Healthy Tropical Candy Corn Ice Pops</a>, <a href=\"https://spoonacular.com/recipes/tequila-sunrise-ice-pops-to-end-all-ice-pops-604745\">Tequila Sunrise Ice Pops to End All Ice Pops</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-dip-ice-pops-from-purely-pops-q-a-with-the-author-and-giveaway-608288\">Chocolate Dip Ice Pops from Purely Pops | Q&A with the Author and Giveaway</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "vegan"
            ],
            "occasions": [],
            "instructions": "<ol><li>Pure the mango, pineapple, 3/4 cup coconut beverage and 1 1/2 tablespoon maple syrup in a blender.</li><li>Pour equal amounts of the mixture into each mould.</li><li>In a small bowl, mix the coconut milk, 1/4 cup of coconut beverage, and 2-3 TBS of maple syrup (adjust the sweetness to your taste).</li><li>Pour equal amounts of the coconut mixture on top of the fruit pure.</li><li>Insert a popsicle stick into each of the moulds, leaving about a quarter of the stick above the mould.</li><li>Freeze the popsicles for about 2 to 3 hours.</li><li>To remove the ice pops from the moulds, run them under warm to hot water for about 5 to 10 seconds before pulling them out.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Pure the mango, pineapple, 3/4 cup coconut beverage and 1 1/2 tablespoon maple syrup in a blender.",
                            "ingredients": [
                                {
                                    "id": 19911,
                                    "name": "maple syrup",
                                    "localizedName": "maple syrup",
                                    "image": "maple-syrup.png"
                                },
                                {
                                    "id": 9266,
                                    "name": "pineapple",
                                    "localizedName": "pineapple",
                                    "image": "pineapple.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "drink",
                                    "localizedName": "drink",
                                    "image": ""
                                },
                                {
                                    "id": 12104,
                                    "name": "coconut",
                                    "localizedName": "coconut",
                                    "image": "coconut.jpg"
                                },
                                {
                                    "id": 9176,
                                    "name": "mango",
                                    "localizedName": "mango",
                                    "image": "mango.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Pour equal amounts of the mixture into each mould.In a small bowl, mix the coconut milk, 1/4 cup of coconut beverage, and 2-3 TBS of maple syrup (adjust the sweetness to your taste).",
                            "ingredients": [
                                {
                                    "id": 12118,
                                    "name": "coconut milk",
                                    "localizedName": "coconut milk",
                                    "image": "coconut-milk.png"
                                },
                                {
                                    "id": 19911,
                                    "name": "maple syrup",
                                    "localizedName": "maple syrup",
                                    "image": "maple-syrup.png"
                                },
                                {
                                    "id": 0,
                                    "name": "drink",
                                    "localizedName": "drink",
                                    "image": ""
                                },
                                {
                                    "id": 12104,
                                    "name": "coconut",
                                    "localizedName": "coconut",
                                    "image": "coconut.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Pour equal amounts of the coconut mixture on top of the fruit pure.Insert a popsicle stick into each of the moulds, leaving about a quarter of the stick above the mould.Freeze the popsicles for about 2 to 3 hours.To remove the ice pops from the moulds, run them under warm to hot water for about 5 to 10 seconds before pulling them out.",
                            "ingredients": [
                                {
                                    "id": 12104,
                                    "name": "coconut",
                                    "localizedName": "coconut",
                                    "image": "coconut.jpg"
                                },
                                {
                                    "id": 9431,
                                    "name": "fruit",
                                    "localizedName": "fruit",
                                    "image": "mixed-fresh-fruit.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 10014412,
                                    "name": "ice",
                                    "localizedName": "ice",
                                    "image": "ice-cubes.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 408704,
                                    "name": "popsicle sticks",
                                    "localizedName": "popsicle sticks",
                                    "image": "popsicle-sticks.jpg"
                                }
                            ],
                            "length": {
                                "number": 180,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/tropical-ice-pops-663858"
        }
    ]
}
