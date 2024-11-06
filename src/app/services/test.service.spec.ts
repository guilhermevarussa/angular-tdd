import { TestBed } from '@angular/core/testing'
import { TestService } from './test.service'
import { LoggerService } from './logger.service'


describe('TestService', () => {
  let service: TestService
  let loggerSpy: jasmine.SpyObj<LoggerService>

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])

    TestBed.configureTestingModule({
      providers: [TestService,{
        provide: LoggerService,
        useValue: loggerSpy
      }]
    })
    service = TestBed.inject(TestService)
  })

  it('should add two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calculate(4, 2, 'add');
    expect(result).toBe(6,'4 + 2 should be 6');
  })

  it('should subtract two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calculate(4, 2, 'subtract');
    expect(result).toBe(2,'4 - 2 should be 2');

  })

  it('should multiply two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calculate(4, 2, 'multiply');
    expect(result).toBe(8,'4 * 2 should be 8');
  })

  it('should divide two numbers', () => {
    expect(service).toBeTruthy();
    const result = service.calculate(4, 2, 'divide');
    expect(result).toBe(2,'4 / 2 should be 2');
  })

  it('should return 0 and a log for an invalid operation', () => {
    expect(service).toBeTruthy();
    const result = service.calculate(4, 2, 'invalid');
    expect(result).toBe(0,'4 invalid 2 should be 0');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    
  })


})
