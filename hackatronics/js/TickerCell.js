export const TickerCell = ({ label, value }) => {
    const formattedValue = value < 10 ? `0${value}` : value.toString()

    return (
        <div
            style={{
                flex: "1",
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
            }}
        >
            <span style={{ fontSize: "7vw", fontFamily: "'Acme', sans-serif" }}>
                {formattedValue}
            </span>
            <span
                style={{
                    fontSize: "3vw",
                    fontFamily: "'Acme', sans-serif",
                }}
            >
                {label}
            </span>
        </div>
    )
}
