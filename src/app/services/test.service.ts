import { Injectable } from '@angular/core'
import { LoggerService } from './logger.service'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor (private loggerService:LoggerService) {}

  calculate (a: number, b: number, operation: string) {
    let result: number
    switch (operation) {
      case 'add':
        result = a + b
        break
      case 'subtract':
        result = a - b
        break
      case 'multiply':
        result = a * b
        break
      case 'divide':
        result = a / b
        break
      default:
        this.loggerService.log('Invalid operation')
        return 0
    }
    return result
  }
}
