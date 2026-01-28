import request from 'supertest';
import app from '../../app';

describe('App', () => {
  it('should return 200 OK for /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('ok');
  });

  it('should return 200 OK for /test', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Server is running!!!');
  });
});
