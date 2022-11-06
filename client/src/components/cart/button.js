export default function Button({ title }) {
  return (
    <>
      <button class="bg-purple-500 hover:bg-purple-700 text-white text-sm font-bold py-2 px-4 rounded w-64">
        {title}
      </button>
    </>
  );
}
