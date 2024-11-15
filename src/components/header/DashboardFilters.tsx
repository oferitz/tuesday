const DashboardFilters = () => {
  return (
    <div className="flex items-center gap-4">
      <input
        className="border border-gray-200 rounded px-2 py-1 text-sm"
        placeholder="Type to filter"
      />
      <button>Save</button>
      <div className="bg-gray-300 w-[1px] h-7" />
      <button>People</button>
      <select>
        <option>Filter</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  )
}

export default DashboardFilters
