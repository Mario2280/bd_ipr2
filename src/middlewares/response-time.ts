import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now()
    res.on('close', () => {
      const duration = Date.now() - start
      console.log(`Request took ${duration}ms`)
    })
    next()
  }
}
