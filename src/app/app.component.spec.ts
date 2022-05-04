import { render, RenderResult, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const sut = async () => {
    let component: AppComponent;
    let ComponentFixture: RenderResult<AppComponent>;
    const appConfig = {
      removeAngularAttributes: true,
      declarations: [AppComponent],
      imports: [AppRoutingModule],
    };

    const rendered = await render(AppComponent, appConfig);
    ComponentFixture = { ...rendered };
    component = rendered.fixture.componentInstance as AppComponent;
    return {
      ComponentFixture,
      component,
    };
  };

  it('deve renderizar o componente app', async () => {
    const { component } = await sut();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-concepts'`, async () => {
    const { component } = await sut();
    // expect(component.title).toEqual('angular-concepts');
    expect(screen.getByText(/angular-concepts/i)).toBeInTheDocument();
  });

  it('should change title when changeTitle() is called', async () => {
    const { component } = await sut();
    component.changeTitle();
    expect(component.title).toEqual('testando novo titulo');
  });
});
