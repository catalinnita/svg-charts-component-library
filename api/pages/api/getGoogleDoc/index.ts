// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Cors from 'cors'

type Data = {
  data: any
}

const cors = Cors({
  methods: ['POST', 'HEAD'],
  origin: '*',
})

function runMiddleware(req:NextApiRequest, res:NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<any> {
  const { docId, filters } = JSON.parse(req.body)
  try {
    await runMiddleware(req, res, cors)

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      throw Error('no env variables')
    }
    const doc = new GoogleSpreadsheet(docId.toString());
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()
    
    const data = rows
      .filter((row) => {
        return Object.keys(filters).filter(key => {
          return filters[key].includes(row[key])
        }).length === Object.keys(filters).length
      })
      .map((row: any) => 
        sheet.headerValues.reduce((acc: any, column: string) => (
          {
            ...acc,
            ...{[column]: row[column]}
          }
        ), {})
      )

    res.status(200).json({ data })
  } catch(e){ 
    console.error({e})
    res.status(400).json({ data: e })
  }
}
