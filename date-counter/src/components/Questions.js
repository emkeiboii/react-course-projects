import Options from "./Options";

function Questions({ question }) {
  console.log(question);
  return (
    <div>
      <Options question={question} />
    </div>
  );
}

export default Questions;
