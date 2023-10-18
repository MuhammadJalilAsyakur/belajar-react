import Navbar from "./components/navbar/navbar";
import './index.css'
import CardProduct from "./components/card/card"


function App() {
  return (
    <>
    <Navbar/>
      <div className="flex justify-between">
          <CardProduct name="tahu" img="https://www.masakapahariini.com/wp-content/uploads/2020/01/resep-tahu-gejrot.jpg" price="1000"/>
          <CardProduct name="tempe" img="https://www.masakapahariini.com/wp-content/uploads/2020/01/resep-tahu-gejrot.jpg" price="2000"/>
          <CardProduct name="sayur" img="https://www.masakapahariini.com/wp-content/uploads/2020/01/resep-tahu-gejrot.jpg" price="3000"/>
        </div>

      <main>
        <section>by Jalil</section>
      </main>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </>
  );
}

export default App;
