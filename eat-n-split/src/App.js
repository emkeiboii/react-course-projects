import { useState } from "react";

export default function App() {
  return (
    <>
      <EatNSplit />
    </>
  );
}
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

/* ------------------------------------------------------------------------------------------ */

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function EatNSplit() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleToggle() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleToggle(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FriendForm onAddFriends={handleAddFriend} />}
        <Button onClick={handleToggle}>
          {showAddFriend ? "Chiudi" : "Aggiungi amico"}
        </Button>
      </div>
      {selectedFriend && <BillForm selectedFriend={selectedFriend} />}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance === 0 ? "" : friend.balance > 0 ? "green" : "red"
        }
      >
        {friend.balance === 0
          ? `Tu e ${friend.name} siete in pari`
          : friend.balance > 0
          ? `${friend.name} ti deve €${Math.abs(friend.balance)}`
          : `Devi a ${friend.name} €${Math.abs(friend.balance)} `}
      </p>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Chiudi" : "Seleziona"}
      </Button>
    </li>
  );
}

function FriendForm({ onAddFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = { id, name, image: `${image}${id}`, balance: 0 };
    console.log(newFriend);

    onAddFriends(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬 Nome Amico</label>
      <input
        type="text"
        maxLength="10"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>🌄 URL Immagine</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>Aggiungi amico</Button>
    </form>
  );
}

function BillForm({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>dividi il conto con {selectedFriend.name}</h2>
      <label>🧾 Conto</label>
      <input type="text"></input>
      <label>🧍 Tue Spese</label>
      <input type="text"></input>
      <label>👬 Spese di {selectedFriend.name}</label>
      <input type="text" disabled></input>
      <label>🤑 Chi paga il conto?</label>
      <select>
        <option value="user">Tu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Dividi il conto</Button>
    </form>
  );
}
