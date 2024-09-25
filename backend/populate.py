import json
from model import Category, Dish, PizzaPrice, PizzaSize, PizzaSubcategory, db

def populateDB() :

    categories = [] # done
    pizza_sizes = [
            PizzaSize(size_id=1,name='Kinder'), 
            PizzaSize(size_id=2,name='Klein'), 
            PizzaSize(size_id=3,name='Groß'), 
            PizzaSize(size_id=4,name='Family'), 
            PizzaSize(size_id=5,name='Party')
    ]
    pizza_subcategories = []
    dishes = [] #done
    pizza_prices = []

    category_id = 1

    with open('./backend/menu.json', 'r', encoding='utf-8') as file:
        menu_data = json.load(file)

    for category, items in menu_data.items():
        categories.append(Category(name=category))
        if category == "Pizza" :
            for pizza_subcategory, pizza_items in items.items():
                pizza_subcategories.append(PizzaSubcategory(subcategory_id=pizza_subcategory, number=pizza_subcategory))
                for pizza_id, pizza_details in pizza_items.items():
                    for name, value in pizza_details.items() :
                        if name == "Price" :
                            for size_name, price in value.items() :
                                for size in pizza_sizes:
                                    if size_name == size.name:
                                        pizza_prices.append(PizzaPrice(number=pizza_id, size_id=size.size_id, subcategory_id=pizza_subcategory, price=price),)
                                        break
                            dishes.append(Dish(number=pizza_id, name=pizza_details["Name"], category_id=category_id, description=pizza_details["Description"]))
        else :
            for dish_id, details in items.items():
                name = details['Name']
                if not details["Description"] :
                    print()
                description = details["Description"]
                price = details['Price']
                dishes.append(Dish(number=dish_id, name=name, category_id=category_id, description=description, price=price))

        category_id+=1
                
    return dishes, categories, pizza_sizes, pizza_prices, pizza_subcategories

    db.session.add_all(dishes)
    db.session.add_all(categories)
    db.session.add_all(pizza_sizes)
    db.session.add_all(pizza_subcategories)
    db.session.add_all(pizza_prices)
    db.session.commit()
                    


