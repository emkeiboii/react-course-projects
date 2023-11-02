export default function App() {
  return (
    <>
      <EatNSplit />
    </>
  );
}

function EatNSplit() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FriendForm />
        <button className="button">Chiudi</button>
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
          key={f.id}
          id={f.id}
          name={f.name}
          image={f.image}
          balance={f.balance}
        />
      ))}
    </ul>
  );
}

function Friend({ id, name, image, balance }) {
  return (
    <li id={id}>
      <img src={image} alt={id} />
      <h3>{name}</h3>
      <p className={balance === 0 ? "" : balance > 0 ? "green" : "red"}>
        {balance === 0
          ? `Tu e ${name} siete in pari`
          : balance > 0
          ? `${name} ti deve ${balance}`
          : `Devi a ${name} ${balance} `}
      </p>
      <button className="button">Seleziona</button>
    </li>
  );
}

function FriendForm() {
  return (
    <form className="form-add-friend">
      <label>👬 Nome Amico</label>
      <input></input>
      <label>🌄 URL Immagine</label>
      <input></input>
      <button className="button">Aggiungi amico</button>
    </form>
  );
}

function BillForm() {
  return (
    <form className="form-split-bill">
      <h2>dividi il conto con X</h2>
      <label>🧾 Conto</label>
      <input type="number"></input>
      <label>🧍 Tue Spese</label>
      <input type="number"></input>
      <label>👬 Spese di X</label>
      <input type="number"></input>
      <label>🤑 Chi paga il conto?</label>
      <select>
        <option>Tu</option>
        <option>X</option>
      </select>
      <button className="button">Dividi il conto</button>
    </form>
  );
}
