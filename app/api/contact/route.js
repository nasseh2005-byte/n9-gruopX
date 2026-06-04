import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  type: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request) {
  const data = await request.json().catch(() => null);
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    return Response.json({ ok: false, error: 'Invalid form data' }, { status: 400 });
  }

  return Response.json({ ok: true, message: 'Received successfully', data: parsed.data }, { status: 200 });
}
