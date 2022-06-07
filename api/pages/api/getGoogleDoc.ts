// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet';

type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const doc = new GoogleSpreadsheet('1zmwGZml_TaCoY8h3oRztk1sTLgfmse0e7SWJOPiW3wY');
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()
    const data = rows.map((row: any) => 
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
