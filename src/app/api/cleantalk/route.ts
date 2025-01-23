import Cleantalk from 'cleantalk/src/Cleantalk';
import CleantalkRequest from 'cleantalk/src/CleantalkRequest';

import { Socket } from 'net';
import { IncomingMessage } from 'node:http';

import type { NextApiRequest } from 'next';

class NextApiRequestWrapper extends IncomingMessage {
  constructor(req: NextApiRequest) {
    super(new Socket());

    Object.assign(this, req);

    this.headers = Object.fromEntries(
      (req.headers as unknown as Map<string, string>).entries(),
    );
  }
}

const AUTH_KEY = process.env.CLEANTALK_AUTH_KEY;
const LANGUAGE = 'en';
const ALIASES = {
  sender_email: 'body.sender_email',
  sender_nickname: 'body.sender_nickname',
  message: 'body.message',
};

export async function GET(req: NextApiRequest) {
  const wrappedReq = new NextApiRequestWrapper(req);

  const client = new Cleantalk({
    auth_key: AUTH_KEY,
    language: LANGUAGE,
  });

  const ctRequest = new CleantalkRequest({
    options: {},
    aliases: ALIASES,
    request: wrappedReq,
  });

  await client.isAllowMessage(ctRequest);

  return Response.json({ message: { ctRequest } });
}
