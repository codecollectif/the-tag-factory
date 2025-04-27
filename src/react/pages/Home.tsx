import { useState } from "react";

const tokens = [
  { id: 1, left: "<h1", right: ">" },
  { id: 2, left: "<img", right: "/>" },
];

type Token = (typeof tokens)[0];

function Home() {
  const [code, setCode] = useState([] as Token[]);

  const addCode = (token: Token) => setCode([...code, token]);

  return (
    <>
      <h1>Home</h1>
      <p>Lorem Ipsum</p>
      <div>
        {code.map((token, index, array) => (
          <div key={token.id}>
            <span>{token.left}</span>
            {index === array.length - 1 && <span>{token.right}</span>}
          </div>
        ))}
      </div>
      <div>
        {tokens.map((token) => (
          <button key={token.id} type="button" onClick={() => addCode(token)}>
            {token.left} {token.right}
          </button>
        ))}
      </div>
    </>
  );
}

export default Home;
