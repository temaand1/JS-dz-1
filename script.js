(function () {
    'use strict';

    let strings = ['moloko, xleb, sahar, voda, frukti '];


  let listElement = document.getElementById('list');

  let items = strings.map(str => {
      let li = document.createElement('li');
      li.textContent = str;
      return li;
  })

    let fragment = strings.reduce((frag,str =>{
        li.textContent = str;
    }))


}());

