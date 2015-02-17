;(function(global) {
    
    var camel = {
        camelize: camelize
    };    

  function camelize(obj){
    var newObj = {};

    for(var propertyName in obj) {
      
      var property = obj[propertyName];
      var camelCasePropertyName = camelizeText(propertyName);

      if(property !== null && typeof(property) === 'object') {
        newObj[camelCasePropertyName] = camelize(property)
      } else {
        newObj[camelCasePropertyName] = property;  
      }

    }

    return newObj;
  }

  function camelizeText(text){
    return text.replace(/^([A-Z])/, function(match, c) {
        return c ? c.toLowerCase() : '';
      });
  }
  
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = camel;
  } else {
      global.camel = camel;
  }
    
})(this);