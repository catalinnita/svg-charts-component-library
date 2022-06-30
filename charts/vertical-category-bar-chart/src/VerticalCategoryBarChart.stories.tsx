import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerticalCategoryBarChart } from './VerticalCategoryBarChart'
import * as packageJson from '../package.json'
import { BarChartDataI } from '../../bars-vertical/dist/types';

export default {
  title: `organisms/${packageJson.displayName}`,
  component: VerticalCategoryBarChart,
} as ComponentMeta<typeof VerticalCategoryBarChart>;

const getData = async (id: string, filters: Record<string, string[]>) => {
  const rawData = await fetch(`http://localhost:3000/api/getGoogleDoc`, {
    method: 'POST',
    body: JSON.stringify({
      docId: id,
      filters
    })
  })
  const { data } = await rawData.json()
  return remapData(data, {
    value: 'Servers',
    displayValue: 'Servers',
    color: 'black',
    label: 'Entity',
  })
}

const remapData = (
  data: Record<string, string>[], 
  translate: Record<string, string>): BarChartDataI[] => {

  return data.map((el: Record<string, string>) => {
    return Object.keys(translate).reduce((acc, key) => {
      const val = key === 'value' ? parseFloat(el[translate[key]]) : el[translate[key]]
      return {
        ...acc,
        [key]: val,
      }
    }, {} as BarChartDataI)
  })

}

const orderData = (
  data: BarChartDataI[], 
  orderBy: keyof BarChartDataI,
  direction: 'ASC' | 'DESC' = 'ASC',
  as: 'number' | 'date' | 'string' = 'string'
): BarChartDataI[] => {
  const retValue = direction === 'ASC'? -1 : -1
  return data.sort((a, b) => {
    if (as === 'number') {
      if (direction === 'DESC') {
        return parseFloat(a[orderBy].toString()) > parseFloat(b[orderBy].toString()) ? -1 : 0
      }
      return parseFloat(a[orderBy].toString()) < parseFloat(b[orderBy].toString()) ? -1 : 0
    }
    if (direction === 'DESC') {
      return a[orderBy] > b[orderBy] ? -1 : 0
    }
    return a[orderBy] < b[orderBy] ? -1 : 0
  })
}

export const MainStory: ComponentStory<typeof VerticalCategoryBarChart> = () => {
  const [chartData, setChartData] = useState([] as BarChartDataI[])
  useEffect(() => {
    const attachData = async () => {
      const data = await getData(
        '1yH-9tWDltdrMlpL38ooTTzoxBJtqNtda9PV4QuJERDk', {
          Entity: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Republic of Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'],
          Year: ['2020'],
      })
      setChartData(orderData(data, 'value', 'ASC', 'number'))
    }
    attachData()
  }, [])
  
  return <VerticalCategoryBarChart 
    data={chartData}
    gap={10}
    width={800}
    height={500}
    padding={[60, 20, 80, 60]}
    colorType="provided"
    colors={['#173f5e', '#20639b', '#3baea3', '#f6d55c', '#ed553b']}
    title="Secure internet servers in European countries (per million people)" 
    x={0} 
    y={0}  
  />;

}