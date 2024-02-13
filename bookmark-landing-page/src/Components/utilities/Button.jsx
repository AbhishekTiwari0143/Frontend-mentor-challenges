export default function Button({ title }) {
  return (
    <button
      type="button"
      className="px-4 py-2 rounded-lg text-white font-medium text-base bg-[--soft-blue] box-shadow hover:text-[--soft-blue] outline-2 hover:outline hover:outline-[--soft-blue] hover:bg-white"
    >
      {title}
    </button>
  );
}
