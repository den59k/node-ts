import AppModel from '../../model';

declare module 'fastify' {
  interface FastifyInstance {
    model: AppModel,
    generateJWT: (userData: any, exp?: number) => Promise<string>,
    decodeJWT: (token: string) => Promise<any>
  }

  interface FastifyRequest {
    userData: {
      _id: string
    }
  }

  interface FastifyReply {
    error (payload: any, code?: number): FastifyReply
  }
}