export default function Template({ extension,content, pri, tit }) {
  return (
    <>
      <div className="pt-12">
        <img style={{ height: 600 }} src={`data:${extension};base64,${content}`}/>
        <div className="flex justify-between items-center mt-2">
          <h2>{tit}</h2>
          <span className="text-stone-400 pr-12">{tit}</span>
        </div>
      </div>
    </>
  );
}

