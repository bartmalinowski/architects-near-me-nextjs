import FilteredList from "../ui/FilteredList/FilteredList";

const page = () => {
  return (
    <div>
      <div>
        <h2>
          Wykaz osób uprawnionych do sporządzania świadectw charakterystyki
          energetycznej:
        </h2>
      </div>
      <FilteredList />
    </div>
  );
};

export default page;
