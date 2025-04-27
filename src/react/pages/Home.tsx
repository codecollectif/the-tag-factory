import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

const tokens = [
  { id: 1, left: "<h1", right: ">", accepts: "&#9633;" },
  { id: 2, left: "<img", right: "/>", accepts: "&#9675;" },
  { id: 3, left: ">", right: "</h1>", type: "&#9633;", accepts: null },
  {
    id: 4,
    left: "src='kitty.webp'",
    right: "/>",
    type: "&#9675;",
    accepts: null,
  },
];

type Token = (typeof tokens)[0];

function Home() {
  const [animationParent] = useAutoAnimate();

  const [code, setCode] = useState([] as Token[]);

  const addCode = (token: Token) => setCode([...code, token]);

  const removeLastCode = () => setCode(code.slice(0, -1));

  return (
    <>
      <h1>Home</h1>
      <p>Lorem Ipsum</p>
      <div>
        {code.map((token, index, array) => (
          <div key={token.id}>
            <span>{token.left}</span>
            {index === array.length - 1 && (
              <>
                <span>{token.right}</span>
                <button type="button" onClick={removeLastCode}>
                  x
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div ref={animationParent}>
        {tokens
          .filter((token) => token.type === code.at(-1)?.accepts)
          .map((token) => (
            <button key={token.id} type="button" onClick={() => addCode(token)}>
              {token.left} {token.right}
            </button>
          ))}
      </div>
    </>
  );
}

export default Home;
