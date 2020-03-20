import { async, TestBed } from '@angular/core/testing';
import { Module1Module } from './module1.module';

describe('Module1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Module1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Module1Module).toBeDefined();
  });
});
