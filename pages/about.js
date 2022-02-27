import Layout from "../components/Layout";

export default function About() {
  function handleClick(e) {
    e.preventDefault();
    console.log(`You clicked submit.`);
  }

  function handleMouseOver(e) {
    e.preventDefault();
    console.log(`You MouseOver submit.`);
  }

  return (
    <div>
      <h1>About Page</h1>
      <img src="/favicon.ico" alt="ファビコン" />
      <img src="image/fujisan.jpg" alt="富士山" width="500" height="200" />
      <input
        type="submit"
        value="確定"
        className="text-2xl text-left bg-yellow-100 my-5 border-solid border-4 block w-32 rounded-md border-red-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <div className="flex justify-around">
        <div>test1</div>
        <div>test2</div>
      </div>
      <form
        onClick={handleClick}
        className="w-32 bg-gray-500 font-semibold text-white py-2 px-4"
      >
        <button type="submit">onClick</button>
      </form>
      <form
        onMouseOver={handleMouseOver}
        className="w-32 bg-green-500 font-semibold text-white py-2 px-4"
      >
        <button type="submit">onMouseOver</button>
      </form>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
