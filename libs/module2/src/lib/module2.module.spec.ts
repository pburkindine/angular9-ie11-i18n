import { async, TestBed } from '@angular/core/testing';
import { Module2Module } from './module2.module';

describe('Module2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Module2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Module2Module).toBeDefined();
  });
});
