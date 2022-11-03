export default function Navitem({ text , handle}) {
  return (
    <>
      <a href={"/serve/"+text.toLowerCase()}>
        <button onClick={handle} type="submit" className="hover:opacity-50">
          {text}
        </button>
      </a>
    </>
  );
}
