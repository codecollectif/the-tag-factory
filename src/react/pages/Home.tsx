import { useState } from "react";

const tokens = ["h1", "img"];

function Home() {
  const [code, setCode] = useState([] as string[]);

  const addCode = (token: string) => setCode([...code, token]);

  return (
    <>
      <h1>Home</h1>
      <p>Lorem Ipsum</p>
      <div>
        {code.map((token) => (
          <p key={token}>{token}</p>
        ))}
      </div>
      <div>
        {tokens.map((token) => (
          <button key={token} type="button" onClick={() => addCode(token)}>
            {token}
          </button>
        ))}
      </div>
    </>
  );
}

export default Home;
