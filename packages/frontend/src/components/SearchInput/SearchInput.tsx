import React, { ChangeEvent } from "react";

interface ISearchInput {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ onChange }: ISearchInput) {
  return (
    <div>
      <div className="flex justify-center w-full">
        <input
          type="text"
          onChange={onChange}
          className="w-full border border-gray-300 rounded-md py-2 px-4"
          placeholder="Search by user name"
        />
      </div>
    </div>
  );
}

export default SearchInput;
