import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

const tokens = [
  { id: 1, left: "<p>", right: "", accepts: "&#9633;" },
  { id: 2, left: "<img", right: "/>", accepts: "&#9675;" },
  {
    id: 3,
    left: "",
    right: "Je Code Collectif</p>",
    type: "&#9633;",
    accepts: null,
  },
  {
    id: 4,
    left: "Makerland : une fête pour",
    right: "",
    type: "&#9633;",
    accepts: "M",
  },
  {
    id: 5,
    left: "",
    right: " rêver</p>",
    type: "M",
    accepts: null,
  },
  {
    id: 6,
    left: "",
    right: " expérimenter</p>",
    type: "M",
    accepts: null,
  },
  {
    id: 7,
    left: "",
    right: " fabriquer</p>",
    type: "M",
    accepts: null,
  },
  {
    id: 8,
    left: "",
    right: " partager</p>",
    type: "M",
    accepts: null,
  },
  {
    id: 9,
    left: "src='kitty.webp' alt='chaton'",
    right: "/>",
    type: "&#9675;",
    accepts: null,
  },
  {
    id: 10,
    left: "src='dog.webp' alt='toutou'",
    right: "/>",
    type: "&#9675;",
    accepts: null,
  },
  {
    id: 11,
    left: "src='surprise.webp' alt='surprise'",
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

  const postCode = () => {
    setCode([]);
  };

  return (
    <>
      <h1>La Fabrique à Balises</h1>
      <div ref={animationParent} style={{ display: "inline-block" }}>
        {code.map((token, index, array) => (
          <p key={token.id}>
            <span>{token.left}</span>
            {token.accepts == null && <span>{token.right}</span>}
            <br />
            {index === array.length - 1 && (
              <button type="button" onClick={removeLastCode}>
                x
              </button>
            )}
            <br />
            {token.accepts == null && (
              <button type="button" onClick={postCode}>
                Envoyer
              </button>
            )}
          </p>
        ))}
      </div>
      <ul style={{ display: "inline-block" }}>
        {tokens
          .filter((token) => token.type === code.at(-1)?.accepts)
          .map((token) => (
            <li key={token.id} style={{ listStyleType: "none" }}>
              <button type="button" onClick={() => addCode(token)}>
                {token.left} {token.right}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Home;
