export default function Header() {
  return (
    <div className="flex justify-center bg-mycolor h-24 border-b-2 border-white">
      <div className="container flex items-center">
        <div className="text-white text-3xl font-bold">logo</div>
        <div>
          <input
            className="h-8 w-64 p-3 rounded-xl ml-64"
            type="text"
            placeholder="search"
          />
        </div>
      </div>
    </div>
  );
}
