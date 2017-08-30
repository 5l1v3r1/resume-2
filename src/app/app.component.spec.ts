import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { MdCardModule } from '@angular/material';
import { ReversePipe } from './pipes/reverse.pipe';
import { FirebaseService, Firebase } from './services/firebase';
import { FirebaseServiceMock } from './mocks';

describe('AppComponent', () => {

  let firebaseService: FirebaseService;
  const fakeJokeService = jasmine.createSpyObj('firebaseService', ['getResume']);
  let fixture: any;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCardModule
      ],
      declarations: [
        AppComponent,
        ReversePipe
      ],
      providers: [{ provide: FirebaseService, useClass: FirebaseServiceMock }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should call firebase service when init', async () => {
    firebaseService = TestBed.get(FirebaseService);
    spyOn(firebaseService, 'getResume').and.callThrough();
    app.ngOnInit();
    expect(firebaseService.getResume).toHaveBeenCalled();
  });

});
