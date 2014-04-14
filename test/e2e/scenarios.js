'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('turbotime', function() {

  browser.get('index.html');

    describe('Main Dash', function(){
//        it('sites page it should see site 2 mock', function(){
//            var sites = element(by.repeater('site in sites').row(1));
//            expect(sites.getText()).toEqual('Test 2 working mock view');
//        });

        it('Should see calendar info', function(){
            var button = element(by.linkName('Witnesses'))
            button.click();
            var witness = element(by.repeater('p in people').row(1));
            expect(witness.getText()).toEqual('Dorsey Diaz');
        });
    });


});
