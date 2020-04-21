import { NowRequest, NowResponse } from '@now/node';

const handler = (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Api working');
};

export default handler;
