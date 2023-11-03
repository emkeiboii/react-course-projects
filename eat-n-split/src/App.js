import { useState } from "react";

export default function App() {
  return (
    <>
      <EatNSplit />
    </>
  );
}

/* ------------------------------------------------------------------------------------------ */

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function EatNSplit() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleToggle() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FriendForm />}
        <Button onClick={handleToggle}>
          {showAddFriend ? "Chiudi" : "Aggiungi amico"}
        </Button>
      </div>
      <BillForm />
    </div>
  );
}

function FriendsList() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  return (
    <ul>
      {initialFriends.map((f) => (
        <Friend
          id={f.id}
          name={f.name}
          image={f.image}
          balance={f.balance}
          key={f.id}
        />
      ))}
    </ul>
  );
}

function Friend({ name, image, balance }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={balance === 0 ? "" : balance > 0 ? "green" : "red"}>
        {balance === 0
          ? `Tu e ${name} siete in pari`
          : balance > 0
          ? `${name} ti deve €${Math.abs(balance)}`
          : `Devi a ${name} €${Math.abs(balance)} `}
      </p>
      <Button>Seleziona</Button>
    </li>
  );
}

function FriendForm() {
  return (
    <form className="form-add-friend">
      <label>👬 Nome Amico</label>
      <input type="text"></input>
      <label>🌄 URL Immagine</label>
      <input type="text"></input>
      <Button>Aggiungi amico</Button>
    </form>
  );
}

function BillForm() {
  return (
    <form className="form-split-bill">
      <h2>dividi il conto con X</h2>
      <label>🧾 Conto</label>
      <input type="text"></input>
      <label>🧍 Tue Spese</label>
      <input type="text"></input>
      <label>👬 Spese di X</label>
      <input type="text" disabled></input>
      <label>🤑 Chi paga il conto?</label>
      <select>
        <option value="user">Tu</option>
        <option value="friend">X</option>
      </select>
      <Button>Dividi il conto</Button>
    </form>
  );
}
