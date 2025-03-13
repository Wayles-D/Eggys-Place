import { useParams } from "react-router-dom";
import products from "../Pages/FoodTypes"; // Assuming this is where your product data is stored

const categoryDescriptions = {
  Burgers: "Sink your teeth into our mouthwatering burgers, crafted with the perfect balance of flavors and textures. Each bite delivers a juicy, perfectly seasoned beef patty made from 100% grass-fed beef, topped with creamy melted cheese, crisp iceberg lettuce, vine-ripened tomatoes, crunchy dill pickles, and caramelized onions for a hint of sweetness. All this deliciousness is drizzled with our tangy, house-made special sauce and nestled in a soft, freshly toasted sesame bun. With just 450 calories, it’s the perfect indulgence!",
  Combos: "Can’t decide what to order? Get the best of everything with our delicious combos! Whether it’s a juicy burger paired with crispy fries, tender chicken wings with a refreshing drink, or a perfectly balanced meal that satisfies all your cravings, our combos are designed to give you maximum flavor at the best value. Carefully curated to complement each other, every combo is a feast that guarantees satisfaction. Why settle for one when you can have it all?",
  Drinks: "Quench your thirst with our refreshing range of beverages, carefully curated to complement your meal. From ice-cold sodas to freshly squeezed fruit juices and creamy milkshakes, we have something to satisfy every craving. Whether you need an energy boost from our rich, aromatic coffee or a relaxing sip of herbal tea, our drinks are served at the perfect temperature and made with premium ingredients. Every sip is a burst of pure refreshment, keeping you cool and satisfied all day long!",
  Chicken: "Golden and crispy on the outside, tender and juicy on the inside—our chicken is nothing short of legendary. Every piece is carefully seasoned with a secret blend of spices, marinated for hours, and fried to perfection for that unbeatable crunch. Whether you prefer it spicy or classic, our chicken is always hot, fresh, and packed with bold flavors. Pair it with our signature sauces for an unforgettable taste experience. This is chicken done right!",
  Salads: "resh, healthy, and bursting with flavor—our salads are made with the finest farm-to-table ingredients. Crisp lettuce, juicy cherry tomatoes, crunchy cucumbers, and a medley of colorful vegetables come together to create a refreshing and nutritious dish. Topped with grilled chicken, roasted nuts, or creamy feta cheese, our salads are drizzled with homemade dressings that bring out every delicious note. Whether you're looking for a light meal or the perfect side, our salads are the perfect choice!",
  Chips: "Crispy, golden, and absolutely irresistible—our chips are made from the finest potatoes, hand-cut and fried to perfection. Each batch is lightly seasoned with just the right amount of salt and served piping hot for that perfect crunch. Whether you dip them in ketchup, drench them in cheese, or enjoy them with our signature sauces, every bite is pure satisfaction. These fries aren’t just a side dish; they’re the main event!"
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2 className="text-center text-red-500">Product not found!</h2>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-8">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="w-1/2 rounded-lg" />

        {/* Product Details */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-4">{categoryDescriptions[product.category]}</p>
          <h2 className="text-2xl font-semibold mt-4">₦{product.price}</h2>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded mt-4">Add to Cart</button>
        </div>
      </div>

      {/* Others You Might Like */}
      <h2 className="text-2xl font-bold mt-8">Others You Might Like</h2>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {products
          .filter((item) => item.category === product.category && item.id !== product.id)
          .slice(0, 3)
          .map((item) => (
            <div key={item.id} className="border p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="mt-2 font-semibold">{item.name}</h3>
              <p className="text-gray-600">₦{item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;
