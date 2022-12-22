import { TickerCell } from "../TickerCell/TickerCell"
import { TickerSeparator } from "../TickerSeprator.js/TickerSeprator"
import { useTicker } from "../../hooks/useTicker"

export const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate)
    const tickerContents = isTimeUp ? (
        <>
        <TickerCell value={0} label="DAYS" />
            <TickerSeparator />
            <TickerCell value={0} label="HOURS" />
            <TickerSeparator />
            <TickerCell value={0} label="MINS" />
            <TickerSeparator />
            <TickerCell value={0} label="SECS" />
            </>
    ) : (
        <>
            <TickerCell value={days} label="DAYS" />
            <TickerSeparator />
            <TickerCell value={hours} label="HOURS" />
            <TickerSeparator />
            <TickerCell value={minutes} label="MINS" />
            <TickerSeparator />
            <TickerCell value={seconds} label="SECS" />
        </>
    )

    return (
        <div
            style={{
                alignSelf: "stretch",
                display: "flex",
                border: "8px solid #9F7FF3",
                borderRadius: "44px",
                padding: "5%",
            }}
        >
            {tickerContents}
        </div>
    )
}
