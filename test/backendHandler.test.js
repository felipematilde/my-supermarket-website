import BackendHandler from '../src/backendHandler';


test('Return 10', ()=> {
    let backendHandler = new BackendHandler();
    backendHandler.addElement(10);
    expect(backendHandler.param).toBe(10);
})