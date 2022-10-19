export default function Girls_template({ img, pri, tit }) {
    return (
      <>
           <div className="pt-12">
            <img style={{ height: 600 }} src={img} alt="oeee" />
            <div className="flex justify-between items-center mt-2">
              <h2>{tit}</h2>
              <span className="text-stone-400 pr-12">${pri}</span>
            </div>
          </div>
      </>
    )
  }
  