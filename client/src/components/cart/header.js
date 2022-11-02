export default function Header({
    title,
    tag_line
}) {
  return (
    <>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">
            {title}
        </h1>
            {/* <h1 className="font-italic underline">
                {tag_line}
            </h1> */}
            <a href="/serve">
                {tag_line}
            </a>
      </div>
    </>
  );
}
