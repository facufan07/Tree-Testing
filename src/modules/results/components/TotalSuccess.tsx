import { ResponsivePie } from '@nivo/pie';
import type { TaskResult } from '../../../types/TaskResult';
import { useEffect, useState } from 'react';
import type { Pie } from '../../../types/Pie';

interface TotalSuccessProps {
    tasks: TaskResult[],
}

export default function TotalSuccess({tasks}: TotalSuccessProps) {
    const [data, setData] = useState<Pie[]>([
        {
                id: 'Éxitos',
                label: 'Éxitos',
                value: 0,
            },
            {
                id: 'Fallos',
                label: 'Fallos',
                value: 0,
            },
    ]);
    
    useEffect(() => {
        const totalSuccess = tasks.reduce((succeded, task) => succeded + task.successResponses, 0)
        const totalFailure = tasks.reduce((failed, task) => failed + task.failureResponses, 0);
        setData([
            {
                id: 'Éxitos',
                label: 'Éxitos',
                value: totalSuccess,
            },
            {
                id: 'Fallos',
                label: 'Fallos',
                value: totalFailure,
            },
        ]);
    }, [tasks]);

    return(
        <div
        className='w-full border-2 border-gray-300 mt-4 p-5 rounded-lg'
        >
            <h2
            className="font-semibold tracking-wider text-xl mb-3"
            >
            Total
            </h2>
            {data[0].value === 0 && data[1].value === 0 ? 
            (
                <div
                className='h-[300px] flex items-center justify-center'
                >
                    <h3
                    className="font-semibold tracking-wider text-lg"
                    >
                    No hay resultados
                    </h3>
                </div>
            ):
            (
                <div
                className='h-[300px]'
                >
                    <ResponsivePie
                    data={data}
                    margin={{ top: 40, bottom: 40}}
                    innerRadius={0}
                    padAngle={0.7}
                    cornerRadius={0}
                    colors={['#3B82F6', '#EF4444']}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 10]] }}
                    animate={true}
                    motionConfig="wobbly"
                    enableArcLinkLabels={false}
                    enableArcLabels={true}
                    arcLabel={d => `${d.label} (${d.value})`}
                    />
                </div>
            )}
        </div>
    )
}