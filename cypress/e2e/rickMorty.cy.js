// const { expect } = require("chai")

describe('API do rick and morty', () => {

  it('Deve ser possível obter lista dos endpoints', () => {

    cy.request('GET', '/').as('endpoints')
    cy.get('@endpoints').should((response) => {

      // expect(response.status).to.eq(200)
        expect(response.body).to.have.property('characters')
          expect(response.body.characters).to.eq("https://rickandmortyapi.com/api/character")

        expect(response.body).to.have.property('locations')
          expect(response.body.locations).to.eq("https://rickandmortyapi.com/api/location")

        expect(response.body).to.have.property('episodes')
          expect(response.body.episodes).to.eq("https://rickandmortyapi.com/api/episode")
      
    })
  })
})




  it('Deve ser possível obter informações em characters', () => {

    cy.request('GET', '/character').as('endpoints')
    cy.get('@endpoints').should((response) => {

        expect(response.body).to.have.property('info')

          expect(response.body.info).to.have.property('count')
              expect(typeof(response.body.info.count)).to.eq('number')

          expect(response.body.info).to.have.property('pages')
            expect(typeof(response.body.info.pages)).to.eq('number')

          expect(response.body.info).to.have.property('next')
            expect(response.body.info.next).to.eq('https://rickandmortyapi.com/api/character?page=2')

          expect(response.body.info).to.have.property('prev')
            expect(response.body.info.prev).to.eq(null)
       
      
    })
  })
