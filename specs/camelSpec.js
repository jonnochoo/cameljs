var camel = require('../camel');

describe("camel", function(){
    
  it("empty object", function() {
      var actual = camel.camelize({});
      
      expect(actual).toEqual({});
  });
  
  
  it("object with one property", function() {
      var actual = camel.camelize({
          Name: "harry"
      });
      
      expect(actual).toEqual({
          name: "harry"
      });
  });

  it("object with two properties", function() {
      var actual = camel.camelize({
          Name: "harry",
          Age: 5
      });
      
      expect(actual).toEqual({
          name: "harry",
          age: 5
      });
  });
  

  it("object with nested properties", function() {
      var actual = camel.camelize({
          Name: "harry",
          Age: 5,
          Tags: [],
          Sport: {},
          Weight: null,
          Address: {
            Street: null,
            Suburb: "Sydney",
            State: "NSW"
          }
      });
      
      expect(actual).toEqual({
          name: "harry",
          age: 5,
          tags: [],
          sport: {},
          weight: null,
          address: {
            street: null,
            suburb: "Sydney",
            state: "NSW"
          }
      });
  });
  
});