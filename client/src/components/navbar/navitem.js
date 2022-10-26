export default function Navitem({ text }) {
  return (
    <>
    <a href={text.toLowerCase()}>
      <h1 className="hover:opacity-50">{text}</h1>
      </a>
    </>
  );
}
