import { useState } from "react";
export default function Footer() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <div>
        <button
          className="bg-indigo-700 font-semibold text-white py-2 px-4"
          onClick={() => setCount(count + 1)}
        >
          Count+
        </button>
      </div>
      <p>Footerコンポーネント</p>
    </div>
  );
}
