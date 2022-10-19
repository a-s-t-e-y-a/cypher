
const Highlight_template = ({
  Heading,
  para1,
  para2,
  para3
}) => {
  return (
    <>
      <div className="flex justify-center py-24 ">
        <div className="">
          <img
            className=""
            style={{ height: 600 }}
            src="/images/girlll.jpg"
            alt="sorry"
          />
        </div>
        <div className="w-2/4 pl-36 pt-24">
          <h1 className="font-bold ">{Heading}</h1>
          <span>
            <p className="pt-12 text-sm">
             {para1}
            </p>
          </span>
          <span>
            <p className="pt-12 text-sm">
             {para2}
            </p>
          </span>
          <span>
            <p className="py-16 flex justify-end underline underline-offset-8 ...">
             {para3}
            </p>
          </span>
        </div>
      </div>
    </>
  );
};
export default Highlight_template;
