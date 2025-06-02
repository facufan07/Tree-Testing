interface SuccessRateProps {
    rate: number,
    taskNumber: number
}
export default function SuccessRate({rate, taskNumber}: SuccessRateProps) {
    return (
        <div className="w-full mt-8">
            <div
            className="flex justify-between mb-2"
            >
                <h3
                className="font-semibold tracking-wide text-md"
                >
                Tarea {taskNumber}:
                </h3>
                <span
                className="font-semibold tracking-wide text-md"
                >
                {rate}%
                </span>
            </div>
            <div
            className="w-full h-2 bg-gray-200 rounded-lg"
            >
                <div
                className={`h-full bg-blue-500 rounded-lg`}
                style={{width: `${rate}%`}}
                >

                </div>
            </div>
        </div>
    )
}