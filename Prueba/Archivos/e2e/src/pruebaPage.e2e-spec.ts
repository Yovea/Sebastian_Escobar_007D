import {browser, element, by} from 'protractor';

describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");
    });
    //creación de prueba 1
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".t ion-label")).getText()).toContain("Menú de navegacion");
    });
}); //fin de prueba 1