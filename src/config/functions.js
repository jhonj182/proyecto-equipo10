

export function FormatNumber({ number }, {color}) {
    return (
      <span style={{ color: color }}>
        {new Intl.NumberFormat("ES-CO", {
          style: "currency",
          currency: "COP"
        }).format(number)}
      </span>
    );
  }