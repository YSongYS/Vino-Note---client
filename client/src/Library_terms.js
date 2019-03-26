const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
	,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]

const options_Country = country_list.map((country,idx)=>{return{key:idx+1, text:country, value:country}})

const variety_list = ["Albariño", "Arneis", "Bacchus", "Barbera", "Blauer Zweigelt", "Blaufränkisch", "Cabernet Franc", "Cabernet Sauvignon", "Carignan", "Carignan/Mazuelo/Samso", "Carmenere", "Chardonnay", "Chenin Blanc", "Cinsault", "Clairette", "Colombard", "Cortese", "CorteseCorvina", "Corvina", "Dolcetto", "Fiano", "Gamay", "Garganega", "Gewürztraminer", "Glera (Prosecco)", "Graciano", "Grenache", "Grenache Blanc", "Grenache/Garnacha", "Grüner Veltliner", "Harslevelu", "Macabeo", "Macabeo/Viura", "Malbec", "Malvoisie", "Marsanne", "Mauzac", "Melon de Bourgogne", "Merlot", "Monastrell/Mourvedre", "Mourvedre", "Muscat", "Muscat Blanc a Petits Grains", "Nebbiolo", "Palomino", "Pedro Ximenez", "Petit Verdot", "Picpoul", "Pinot Blanc", "Pinot Grigio", "Pinot Gris", "Pinot Meunier", "Pinot Noir", "Pinotage", "Port Blend", "Primitivo", "Riesling", "Rondinella", "Roussanne", "Sangiovese", "Sauvignon Blanc", "Semillon", "Syrah/Shiraz", "Tempranillo", "Tinta Roriz", "Touriga Nacional", "Verdejo", "Viognier", "Zinfandel"]

const options_Variety = variety_list.map((variety,idx)=>{return{key:idx+1, text:variety, value:variety}})

const options_Price = [
  {key:1,text:'$',value:1},
  {key:2,text:'$$',value:2},
  {key:3,text:'$$$',value:3},
  {key:4,text:'$$$$',value:4}
]

const white_colors = {
   "#f4f3de":"Pale Straw",
   "#ebe4b3":"Medium Straw",
   "#e3de9a":"Deep Straw",
   "#f5f3b6":"Pale Yellow",
   "#f5ed80":"Medium Yellow",
   "#f0dc47":"Deep Yellow",
   "#f0e2a1":"Pale Gold",
   "#f3e395":"Medium Gold",
   "#f2cb56":"Deep Gold",
   "#dca437":"Pale Brown",
   "#af6329":"Medium Brown",
   "#935129":"Deep Brown"
}
const rose_colors = {
   "#fbc450":"Pale Amber",
   "#f29e24":"Medium Amber",
   "#e37727":"Deep Amber",
   "#f3cdac":"Pale Cooper",
   "#f49f66":"Medium Cooper",
   "#e06d34":"Deep Cooper",
   "#efbaac":"Pale Salmon",
   "#f39e8e":"Medium Salmon",
   "#ef7a5e":"Deep Salmon",
   "#f5d4d5":"Pale Pink",
   "#f1a4a8":"Medium Pink",
   "#f3858b":"Deep Pink",
}
const red_colors = {
   "#a21d3c":"Pale Ruby",
   "#891b34":"Medium Ruby",
   "#701b2a":"Deep Ruby",
   "#a11d46":"Pale Purple",
   "#581930":"Medium Purple",
   "#2b121a":"Deep Purple",
   "#c92f27":"Pale Garnet",
   "#ac2529":"Medium Garnet",
   "#671514":"Deep Garnet",
   "#a83e25":"Pale Tawny",
   "#9c3c23":"Medium Tawny",
   "#702017":"Deep Tawny"
}

const category_explained = {
  "sweetness" : {
    1 : ["Bone dry", "<1g/L residual sugar", "Description on the rating"],
    2 : ["Dry", "1-10g/L residual sugar", "Description on the rating"],
    3 : ["Off-dry", "17-35g/L residual sugar", "Description on the rating"],
    4 : ["Sweet", "35-120g/L residual sugar", "Description on the rating"],
    5 : ["Very sweet", "120-220g/L residual sugar", "Description on the rating"]
  },
  "acidity" : {
    1 : ["Low", "4.5pH", "Description on the rating"],
    2 : ["Medium low", "4.0pH", "Description on the rating"],
    3 : ["Average", "3.5pH", "Description on the rating"],
    4 : ["Sour", "3.0pH", "Description on the rating"],
    5 : ["Very sour", "2.5pH", "Description on the rating"]
  },
  "tannin" : {
    1 : ["Low","Low", "Description on the rating"],
    2 : ["Medium low","Medium low", "Description on the rating"],
    3 : ["Average","Average", "Description on the rating"],
    4 : ["Astringent","Astringent", "Description on the rating"],
    5 : ["Very astringent","Very astringent", "Description on the rating"]
  },
  "alcohol" : {
    1 : ["Low", "<10% ABV", "Description on the rating"],
    2 : ["Medium low", "10-11.5% ABV", "Description on the rating"],
    3 : ["Average", "11.5-13.5% ABV", "Description on the rating"],
    4 : ["Medium high", "13.5-15% ABV", "Description on the rating"],
    5 : ["High", ">15% ABV"]
  },
  "body" : {
    1 : ["Very light","Very light", "Description on the rating"],
    2 : ["Light bodied","Light bodied", "Description on the rating"],
    3 : ["Average","Average", "Description on the rating"],
    4 : ["Medium full","Medium full", "Description on the rating"],
    5 : ["Full bodied","Full bodied", "Description on the rating"]
  }
}

const second_smells = {
  "primary": ["Flower", "Citrus", "Tree Fruit", "Tropical Fruit", "Red Fruit", "Black Fruit", "Dried Fruit", "Noble Rot", "Spice", "Vegetable", "Earth"],
  "secondary": ["Microbial"],
  "tertiary": ["Oak Aging", "General Aging"],
  "flaw": ["Cork Taint", "Sulfides and Mercaptans", "Brettanomyces", "Madeirized or Cooked", "Volatile Acidity"]
}



const third_smells = {
  "Flower": ["Iris", "Peony", "Elderflower", "Acacia", "Lilac", "Jasmine", "Honeysuckle", "Violet", "Lavender", "Rose", "Potpourri", "Hibiscus"],
  "Citrus": ["Lime", "Lemon", "Grapefruit", "Orange", "Marmalade"],
  "Tree Fruit": ["Quince", "Apple", "Pear", "Nectarine", "Peach", "Apricot", "Persimmon"],
  "Tropical Fruit": ["Pineapple", "Mango", "Guava", "Passion Fruit", "Lychee", "Bubblegum"],
  "Red Fruit": ["Cranberry", "Red Plum", "Pomegranate", "Sour Cherry", "Strawberry", "Cherry", "Raspberry"],
  "Black Fruit": ["Boysenberry", "Black Currant", "Black Cherry", "Plum", "Blackberry", "Blueberry", "Olive"],
  "Dried Fruit": ["Raisin", "Fig", "Date", "Fruitcake"],
  "Noble Rot": ["Beeswax", "Ginger", "Honey"],
  "Spice": ["White Pepper", "Red Pepper", "Black Pepper", "Cinnamon", "Anise", "5-Spice", "Fennel", "Eucalyptus", "Mint", "Thyme"],
  "Vegetable": ["Grass", "Tomato Leaf", "Gooseberry", "Bell Pepper", "Jalapeño", "Bitter Almond", "Tomato", "Sun-Dried Tomato", "Black Tea"],
  "Earth": ["Clay Pot", "Slate", "Wet Gravel", "Potting Soil", "Red Beet", "Volcanic Rocks", "Petroleum"],
  "Microbial": ["Butter", "Cream", "Sourdough", "Lager", "Truffle", "Mushroom"],
  "Oak Aging": ["Vanilla", "Coconut", "Baking Spices", "Cigar Box", "Smoke", "Dill"],
  "General Aging": ["Dried Fruit", "Nutty Flavors", "Tobacco", "Coffee", "Cocoa", "Leather"],
  "Cork Taint": ["Musty Cardboard", "Wet Dog"],
  "Sulfides and Mercaptans": ["Cured Meat", "Boiled Eggs", "Burnt Rubber", "Lit Match", "Garlic", "Onion", "Cat Pee"],
  "Brettanomyces": ["Black Cardamon", "Band-Aid", "Sweaty Leather Saddle", "Horse Manure"],
  "Madeirized or Cooked": ["Toffee", "Stewed Fruit"],
  "Volatile Acidity": ["Vinegar", "Nail Polish Remover"]
}

const color_scheme = {
  'mainWheel': ["#92BBB0", "#722143", "#351A2D", "#B73A45"],
  'primary': ["#d3e3df", "#a7c8bf"],
  'secondary': ["#c6a6b3", "#8e4d68"],
  'tertiary': ["#aea3ab", "#5d4756"],
  'flaw': ["#e2b0b4", "#c5616a"]
}




export {
  options_Country, 
  options_Variety, 
  options_Price, 
  white_colors, 
  red_colors, 
  rose_colors, 
  category_explained, 
  second_smells, 
  third_smells, 
  color_scheme
};
