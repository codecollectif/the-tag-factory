import { type PropsWithChildren, createContext, use, useContext } from "react";
import { useNavigate, useParams } from "react-router";

import { useAuth } from "./AuthContext";
import { cache, invalidateCache } from "./utils";

type ElementContextType = {
  elements: MyElement[];
  addElement: (partialElement: Omit<MyElement, "id">) => void;
  deleteElement: () => void;
};

const ElementContext = createContext(null as ElementContextType | null);

export function ElementProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  const { user } = useAuth();

  const elements = use(cache("/api/elements")) as MyElement[];

  const addElement = (partialElement: Omit<MyElement, "id" | "user_id">) => {
    fetch("/api/elements", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partialElement),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
      })
      .then(() => {
        invalidateCache("/api/elements");
      });
  };

  const { id } = useParams();

  const deleteElement = () => {
    if (user == null) {
      alert("Please log in");
      return;
    }

    fetch(`/api/elements/${id}`, {
      method: "delete",
    }).then((response) => {
      if (response.status === 204) {
        invalidateCache("/api/elements");
        navigate("/elements");
      }
    });
  };

  return (
    <ElementContext value={{ elements, addElement, deleteElement }}>
      {children}
    </ElementContext>
  );
}

export const useElements = () => {
  const value = useContext(ElementContext);

  if (value == null) {
    throw new Error("useElements has to be used within <ElementProvider />");
  }

  return value;
};
