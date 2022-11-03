function ITEMPAGE() {
  return (
    <>
      <div>
        <div className="flex">
          <img src="" />
          <div className="pl-32">
            <h1 className="font-bold text-3xl ">Modern sport shoes</h1>
            <div className="flex">
              <button className="text-orange-500 bg-orange-200 rounded-lg">
                Trainers
              </button>
              <button className="text-green-500 bg-green-200 rounded-lg">
                {" "}
                Woman
              </button>
            </div>
            <p className="font-bold text-xl">$2345</p>
            <div className="flex">
              <span className="font-bold">Size</span>
              <span className="itelic">36,37,38,39</span>
            </div>
            <div className="flex gap-2">
              <p>1</p>
              <button className="rounded-lg bg-green-300 text-white font-bold">
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-12">
          <h1 className="text-2xl font-bold">About this product</h1>
        </div>

        <div className="px-16 py-32">
          <p>
            Your audience and writing purpose will determine your writing style.
            The four main types of writing styles are persuasive, narrative,
            expository, and descriptive. In this blog post, we’ll briefly
            explore the defining features of these four writing styles. For more
            help using these writing styles, schedule an appointment at the GWC!
            Persuasive: For this writing style, the writer is trying to convince
            the reader of the validity of a certain position or argument.
            Persuasive writing includes the writers’ opinions, and provides
            justifications and evidence to support their claims. Examples:
            Letters of recommendation; cover letters; Op-Eds and Editorial
            newspaper articles; argumentative essays for academic papers
          </p>
        </div>
      </div>
    </>
  );
}

export default ITEMPAGE;
