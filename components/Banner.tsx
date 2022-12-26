export default function Banner() {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl">Pav's musings</h1>
        <h2 className="mt-5 md:mt-0">Weclome to my blog.</h2>
      </div>
      <p className="max-w-sm text-gray-400 mt-d md:mt-2">
        Random musings, posted sporadically.
      </p>
    </div>
  );
}
