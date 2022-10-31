export default function Archi({ extension,content, pri, tit ,loading}) {
    if (loading) {
        return <h2>Loading...</h2>;
      }
    return (
      <>
        <div className="pt-12">
          <img style={{ height: 400}} src={`data:${extension};base64,${content}`}/>
          <div className="flex justify-between items-center mt-2">
            <h2>{tit}</h2>
            <span className="text-stone-400 pr-12">{pri}</span>
          </div>
        </div>
      </>
    );
  }