import React from "react";
import clsx from "clsx";

function ChooseYourSide({
  side,
  onSelect,
  processing,
}: {
  side: number | undefined;
  onSelect: (side: number | undefined) => void;
  processing: boolean;
}) {
  return (
    <div className="flex items-center  mb-4">
      <div className="btn-group btn-group-horizontal">
        <button
          className={clsx(
            "btn px-10",
            side === undefined && "btn-active",
            side === undefined && processing && "loading pl-4"
          )}
          onClick={() => onSelect(undefined)}
        >
          All
        </button>
        <button
          className={clsx(
            "btn px-10",
            side === 1 && "btn-active",
            side === 1 && processing && "loading pl-4"
          )}
          onClick={() => onSelect(1)}
        >
          Dark Side
        </button>
        <button
          className={clsx(
            "btn px-10",
            side === 2 && "btn-active",
            side === 2 && processing && "loading pl-4"
          )}
          onClick={() => onSelect(2)}
        >
          Light Side
        </button>
      </div>
    </div>
  );
}

export default ChooseYourSide;
