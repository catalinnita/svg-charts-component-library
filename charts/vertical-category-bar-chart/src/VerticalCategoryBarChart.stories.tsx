import { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerticalCategoryBarChart } from './VerticalCategoryBarChart'
import * as packageJson from '../package.json'
import { BarChartDataI } from '@scrambled-data/bars-vertical';

export default {
  title: `organisms/${packageJson.displayName}`,
  component: VerticalCategoryBarChart,
} as ComponentMeta<typeof VerticalCategoryBarChart>;

const getData = async (id: string, filters: Record<string, string[]>) => {
  const rawData = await fetch(`http://localhost:3001/api/getGoogleDoc`, {
    method: 'POST',
    body: JSON.stringify({
      docId: id,
      filters
    })
  })
  const { data } = await rawData.json()
  return remapData(data, {
    value: {
      key: 'Servers',
      filter: (val: string) => parseFloat(val)
    },
    displayValue: {
      key: 'Servers',
      filter: (val: string) => Math.ceil(parseFloat(val))
    },
    color: {
      key: 'black',
    },
    label: {
      key: 'Entity',
    },
  })
}

type TranslateT = Record<string, {
  key: string,
  filter?: (val: string) => string | number
}>

const remapData = (
  data: Record<string, string>[], 
  translate: TranslateT): BarChartDataI[] => {

  return data.map((el: Record<string, string>) => {
    return Object.keys(translate).reduce((acc, key) => {

      const filterFunc = translate[key].filter
      const val = typeof(filterFunc) !== 'function' ? el[translate[key].key] : filterFunc(el[translate[key].key])
      
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
    width={800}
    height={500}
    padding={[60, 20, 80, 60]}
    name="Secure internet servers in European countries (per million people)" 
    barsVertical={{
      gap: 10,
      colorType: "heat-gradient",
      colors: ['#173f5e', '#20639b', '#3baea3', '#f6d55c', '#ed553b'],
      r: 3
    }}
    svgStyle={{
      background: '#fff', 
      border: '1px solid #ddd'
    }}
    legend={{
      spacing: [30, 0, 0, 0],
      title: "Secure internet servers in European countries (per million people)" 
    }}
  />;

}

export const BlackVersion: ComponentStory<typeof VerticalCategoryBarChart> = () => {
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
    data={chartData.slice(-5)}
    width={1000}
    height={500}
    padding={[30, 420, 20, 20]}
    name="Secure internet servers in European countries (per million people)" 
    svgStyle={{
      background: '#fff1e5', 
    }}
    barsVertical={{
      gap: 0,
      colorType: "uni",
      colors: ['#000']
    }}
    xAxis={{
      showAxis: false,
      showThicks: false,
      showLabels: false,
    }}
    yAxis={{
      showLabels: false,
      showAxis: false,
      showThicks: false,
    }}
    grid={{
      showHorizontal: false,
      showVertical: false,
    }}
    labels={{
      fontSize: 14,
      initialOpacity: 1,
      textColor: 'black',
      fillColor: 'none',
      strokeColor: 'none'
    }}
    legend={{
      title: "Secure internet servers in European countries (per million people)",
      align: "end",
      spacing: [50, 20, 0, 0] 
    }}
  />;

}

export const LinesVersion: ComponentStory<typeof VerticalCategoryBarChart> = () => {
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
    width={800}
    height={500}
    padding={[20, 20, 80, 20]}
    name="Secure internet servers in European countries (per million people)" 
    barsVertical={{
      gap: 20,
      r: 5,
      colorType: "provided",
      colors: ['#8FB9A8', '#F1D1B5', '#FCD0BA', '#F1828D', '#765D69', '#FCBB6D', '#D8737F', '#AB6C82', '#685D79', '#475C7A']
  
    }}
    xAxis={{
      showThicks: false,
      showAxis: false,
    }}
    yAxis={{
      showAxis: false,
      showLabels: false,
      showThicks: false,
    }}
    grid={{
      showHorizontal: false,
      showVertical: false,
    }}
    legend={{
      title: "Secure internet servers",
      titleColor: "black",
      titleFontSize: 24,
      description: "European countries (per million people)",
      descriptionColor: "gray",
      descriptionFontSize: 16,
      pos: 'top',
      align: 'start',
      spacing: [30, 0, 0, 20]
    }}
  />;

}